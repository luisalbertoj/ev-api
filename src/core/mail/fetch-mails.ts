import type { EvolinciteMailConfiguration } from '@/API';
import Imap from 'imap';
import { simpleParser } from 'mailparser';

interface Email {
  id: string;
  subjectText: string;
  fromText: string | undefined;
  textText: string | undefined;
  isUnread: boolean;
}

const connection = (mailConfig: EvolinciteMailConfiguration) => {
  if (!mailConfig || !mailConfig.email || !mailConfig.password) {
    throw new Error('Mail config not found');
  }
  return new Imap({
    user: mailConfig.email,
    password: mailConfig.password,
    host: 'imap.hostinger.com',
    port: 993,
    tls: true,
  });
};
/* export const fetchEmails = (
  folder: string,
  mailConfig: EvolinciteMailConfiguration,
  limit: number = 100,
): Promise<Email[]> => {
  return new Promise((resolve, reject) => {
    try {
      const imap = connection(mailConfig);
      imap.search(['ALL'], (err, results) => {
        if (err) {
          console.error('Error en imap.search:', err);
          return reject(err);
        }

        console.log('Resultados obtenidos:', results.length);

        if (results.length === 0) {
          imap.end();
          return resolve([]);
        }

        const limitedResults = results.slice(-limit);
        const f = imap.fetch(limitedResults, { bodies: '' });

        const emails: Email[] = [];

        f.on('message', (msg, seqno) => {
          msg.on('body', (stream) => {
            simpleParser(stream, (err, mail) => {
              if (err) {
                console.error('Error en simpleParser:', err);
                return reject(err);
              }
              emails.push({
                ...mail,
                id: mail.messageId || '',
                subjectText: mail.subject || '',
                fromText: mail?.from?.text,
                textText: mail.text || '',
              });
            });
          });
        });

        f.once('end', () => {
          console.log('Cantidad de correos procesados:', emails.length);
          imap.end();
          resolve(emails);
        });

        f.once('error', (err) => {
          console.error('Error en imap.fetch:', err);
          reject(err);
        });
      });
      console.log('Conectando a IMAP...');
      imap.once('ready', () => {
        imap.openBox(folder, true, (err, box) => {
          if (err) return reject(err);

          imap.search(['ALL'], (err, results) => {
            if (err) return reject(err);

            // Si no hay resultados, resolvemos con un array vacío.
            if (results.length === 0) {
              imap.end();
              return resolve([]);
            }

            const limitedResults = results.slice(-limit);
            const f = imap.fetch(limitedResults, { bodies: '' });

            const emails: Email[] = [];

            f.on('message', (msg, seqno) => {
              msg.on('body', (stream) => {
                simpleParser(stream, (err, mail) => {
                  if (err) reject(err);
                  emails.push({
                    ...mail,
                    id: mail.messageId || '',
                    subjectText: mail.subject || '',
                    fromText: mail?.from?.text,
                    textText: mail.text || '',
                  });
                });
              });
            });

            f.once('error', (err) => {
              reject(err);
            });

            f.once('end', () => {
              imap.end();
              resolve(emails);
            });
          });
        });
      });

      imap.once('error', (err) => {
        reject(err);
      });

      imap.connect();
    } catch (error) {
      console.log(error);
      resolve([]);
    }
  });
}; */

export const fetchEmails = (
  folder: string,
  mailConfig: EvolinciteMailConfiguration,
  limit: number = 100,
): Promise<Email[]> => {
  return new Promise((resolve, reject) => {
    try {
      const imap = connection(mailConfig);

      imap.once('ready', () => {
        imap.openBox(folder, true, (err, box) => {
          if (err) {
            console.error('Error al abrir la bandeja:', err);
            return reject(err);
          }

          console.log('Bandeja abierta:', folder);

          imap.search(['ALL'], (err, results) => {
            if (err) {
              console.error('Error en imap.search:', err);
              return reject(err);
            }

            console.log('Resultados obtenidos:', results.length);

            if (results.length === 0) {
              imap.end();
              return resolve([]);
            }

            const limitedResults = results.slice(-limit);
            const f = imap.fetch(limitedResults, { bodies: '' });

            const emails: Email[] = [];

            f.on('message', (msg, seqno) => {
              let isUnread = true;
              msg.on('attributes', (attrs) => {
                // Verificar si el flag \Seen está presente
                isUnread = !attrs.flags.includes('\\Seen');
              });

              msg.on('body', (stream) => {
                simpleParser(stream, (err, mail) => {
                  if (err) {
                    console.error(`Error procesando el correo #${seqno}:`, err);
                    return; // No rechazar la promesa, solo omitir el correo problemático
                  }
                  console.log(`Correo #${seqno} procesado correctamente`);
                  emails.push({
                    ...mail,
                    id: mail.messageId || '',
                    subjectText: mail.subject || '',
                    fromText: mail?.from?.text || '',
                    textText: mail.text || '',
                    isUnread,
                  });
                });
              });
            });

            f.once('error', (err) => {
              console.error('Error en imap.fetch:', err);
              reject(err);
            });

            f.once('end', () => {
              console.log('Cantidad de correos procesados:', emails.length);
              imap.end();
              resolve(emails);
            });
          });
        });
      });

      imap.once('error', (err) => {
        console.error('Error en imap:', err);
        reject(err);
      });

      imap.connect();
    } catch (error) {
      console.error('Error en la función fetchEmails:', error);
      resolve([]); // Devolver un array vacío en caso de error para evitar que se rompa la aplicación
    }
  });
};

export const listMailboxes = (
  mailConfig: EvolinciteMailConfiguration,
): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    const imap = connection(mailConfig);

    imap.once('ready', () => {
      imap.getBoxes((err, boxes) => {
        if (err) {
          reject(err);
        } else {
          const mailboxes: string[] = [];
          const traverseBoxes = (box, prefix = '') => {
            Object.keys(box).forEach((name) => {
              const path = prefix ? `${prefix}${name}` : name;
              mailboxes.push(path);
              if (box[name].children) {
                traverseBoxes(box[name].children, `${path}.`);
              }
            });
          };

          traverseBoxes(boxes);
          resolve(mailboxes);
        }
        imap.end();
      });
    });

    imap.once('error', (err) => {
      reject(err);
    });

    imap.connect();
  });
};

export const deleteMail = (
  mailConfig: EvolinciteMailConfiguration,
  ids: string,
) => {
  return new Promise((resolve, reject) => {
    const imap = connection(mailConfig);
    imap.once('ready', () => {
      imap.addFlags(ids, '\\Deleted', (err) => {
        if (err) throw err;
        imap.expunge(ids, (err) => {
          if (err) throw err;
          console.log('Correo eliminado');
        });
      });
    });
    imap.once('error', (err) => {
      reject(err);
    });
    imap.connect();
  });
};

export const move = (
  mailConfig: EvolinciteMailConfiguration,
  ids: string,
  folder: string,
) => {
  return new Promise((resolve, reject) => {
    const imap = connection(mailConfig);
    imap.once('ready', () => {
      imap.move(ids, folder, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(true);
        }
        imap.end();
      });
    });
    imap.once('error', (err) => {
      reject(err);
    });
    imap.connect();
  });
};
