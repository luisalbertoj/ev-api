import {
  EvolinciteNotificationPriority,
  EvolinciteRule,
  EvolinciteStates,
  type EvolinciteCrmAutomation,
  type EvolinciteCrmNegotiation,
  type EvolinciteNotification,
  type GetEvolinciteCrmAutomationQuery,
  type GetEvolinciteCrmNegotiationQuery,
} from '@/API';
import { createEvolinciteNotification } from '@/graphql/mutations';
import {
  evolinciteCrmNegotiationsByEvolinciteCrmStateIDAndCreatedAt,
  listEvolinciteCrmAutomations,
} from '@/graphql/queries';
import { Connector } from '@/utils/connector';

interface ControlCrmStateDto {
  automation: GetEvolinciteCrmAutomationQuery;
  negotiation: GetEvolinciteCrmNegotiationQuery;
}

export const run = async () => {
  let promises = [];
  const automations: {
    data: {
      listEvolinciteCrmAutomations: {
        items: EvolinciteCrmAutomation[];
      };
    };
  } = await getAutomations();
  promises = [];
  const automationIndex: { [key: string]: EvolinciteCrmAutomation } = {};
  for (const automation of automations.data.listEvolinciteCrmAutomations
    .items ?? []) {
    if (automation?.rule == EvolinciteRule.CONTROL_CRM_STATES) {
      const crmStateId = automation.evolinciteCrmStateID;
      if (!crmStateId) {
        continue;
      }
      automationIndex[crmStateId] = automation;
      promises.push(getNegotiations(crmStateId));
    }
  }
  const negotiationsRes = (await Promise.all(promises)) as {
    data: {
      evolinciteCrmNegotiationsByEvolinciteCrmStateIDAndCreatedAt: {
        items: [];
      };
    };
  }[];
  let negotiations: EvolinciteCrmNegotiation[] = [];
  for (const iterator of negotiationsRes) {
    negotiations = [
      ...negotiations,
      ...(iterator.data
        .evolinciteCrmNegotiationsByEvolinciteCrmStateIDAndCreatedAt.items ??
        []),
    ];
  }
  console.log({ negotiations });
  promises = [];
  for (const negotiation of negotiations) {
    if (!negotiation?.evolinciteCrmStateID) {
      continue;
    }
    const automationConfig: any =
      automationIndex[negotiation.evolinciteCrmStateID].setting;

    const negotiationDate = negotiation.updatedAt as string;
    if (
      compareDate(
        new Date(new Date(negotiationDate) + automationConfig.days),
        new Date(),
      )
    ) {
      promises.push(createNotification(negotiation, automationConfig));
    }
  }
  return Promise.all(promises);
};

export const createNotification = async (
  negotiation: EvolinciteCrmNegotiation,
  automationConfig: any,
) => {
  const promises = [];
  for (const userId of automationConfig.users) {
    const input: Partial<EvolinciteNotification> = {
      evolinciteCompanyID: negotiation.evolinciteCompanyID,
      evolinciteUserID: userId,
      priority: EvolinciteNotificationPriority.HIGH,
      title: negotiation.name,
      content: automationConfig.description,
      state: EvolinciteStates.ACTIVE,
    };
    promises.push(
      Connector.graphql({
        query: createEvolinciteNotification,
        variables: { input },
      }),
    );
  }
  return await Promise.all(promises);
};

export const getAutomations = () => {
  return Connector.graphql({
    query: listEvolinciteCrmAutomations,
    variables: {
      filter: {
        state: { eq: EvolinciteStates.ACTIVE },
      },
    },
  });
};

export const getNegotiations = (crmStateId: string) => {
  return Connector.graphql({
    query: evolinciteCrmNegotiationsByEvolinciteCrmStateIDAndCreatedAt,
    variables: {
      evolinciteCrmStateID: crmStateId,
      filter: {
        state: { eq: EvolinciteStates.ACTIVE },
      },
    },
  });
};

export const compareDate = (a: Date, b: Date) => {
  if (a < b) {
    return false;
  }
  return true;
};

export const ControlCrmState = {
  run,
};
