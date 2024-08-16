import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum EvolinciteTaskStates {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
  REVIEW = "REVIEW",
  COMPLETE = "COMPLETE"
}

export enum EvolinciteActivityTypes {
  TASK = "TASK",
  MEETING = "MEETING"
}

export enum EvolinciteTypeBankAccounts {
  AHORRO = "AHORRO",
  CORRIENTE = "CORRIENTE"
}

export enum EvolinciteTicketState {
  OPEN = "OPEN",
  SOLVING = "SOLVING",
  CLOSED = "CLOSED"
}

export enum EvolinciteFunctionalities {
  WALLET_CORE_ROUTE = "WALLET_CORE_ROUTE",
  WALLET_PAYMENT_ROUTE = "WALLET_PAYMENT_ROUTE",
  WALLET_PAYMENT_LOAD_ALL = "WALLET_PAYMENT_LOAD_ALL",
  WALLET_PAYMENT_CREATE = "WALLET_PAYMENT_CREATE",
  WALLET_PAYMENT_EDIT = "WALLET_PAYMENT_EDIT",
  WALLET_PAYMENT_DELETE = "WALLET_PAYMENT_DELETE",
  WALLET_PAYMENT_PROCESS = "WALLET_PAYMENT_PROCESS",
  WALLET_PAYMENT_REVERT = "WALLET_PAYMENT_REVERT",
  WALLET_PAYMENT_UPLOAD_FILES = "WALLET_PAYMENT_UPLOAD_FILES",
  WALLET_PAYMENT_EXPORT_FILES = "WALLET_PAYMENT_EXPORT_FILES",
  WALLET_PAYMENT_LOAD_PERSONAL = "WALLET_PAYMENT_LOAD_PERSONAL",
  WALLET_EXPENSE_ROUTE = "WALLET_EXPENSE_ROUTE",
  WALLET_EXPENSE_LOAD_ALL = "WALLET_EXPENSE_LOAD_ALL",
  WALLET_EXPENSE_CREATE = "WALLET_EXPENSE_CREATE",
  WALLET_EXPENSE_EDIT = "WALLET_EXPENSE_EDIT",
  WALLET_EXPENSE_DELETE = "WALLET_EXPENSE_DELETE",
  WALLET_EXPENSE_PROCESS = "WALLET_EXPENSE_PROCESS",
  WALLET_EXPENSE_TYPE_ROUTE = "WALLET_EXPENSE_TYPE_ROUTE",
  WALLET_EXPENSE_TYPE_CREATE = "WALLET_EXPENSE_TYPE_CREATE",
  WALLET_EXPENSE_TYPE_EDIT = "WALLET_EXPENSE_TYPE_EDIT",
  WALLET_EXPENSE_TYPE_DELETE = "WALLET_EXPENSE_TYPE_DELETE",
  WALLET_EXPENSE_REVERT = "WALLET_EXPENSE_REVERT",
  WALLET_EXPENSE_LOAD_PERSONAL = "WALLET_EXPENSE_LOAD_PERSONAL",
  WALLET_SALARY_ROUTE = "WALLET_SALARY_ROUTE",
  WALLET_SALARY_PROCESS = "WALLET_SALARY_PROCESS",
  WALLET_REPORTS_PAYMENTS_ACCESS = "WALLET_REPORTS_PAYMENTS_ACCESS",
  WALLET_REPORTS_EXPENSES_ACCESS = "WALLET_REPORTS_EXPENSES_ACCESS",
  WALLET_REPORTS_NEGOTIATIONS_ACCESS = "WALLET_REPORTS_NEGOTIATIONS_ACCESS",
  WALLET_NEGOTIATIONS_DUPLICATED = "WALLET_NEGOTIATIONS_DUPLICATED",
  WALLET_NEGOTIATIONS_EXPENSE = "WALLET_NEGOTIATIONS_EXPENSE",
  CRM_CORE_ROUTE = "CRM_CORE_ROUTE",
  CRM_PROCESS_ROUTE = "CRM_PROCESS_ROUTE",
  CRM_STATE_CREATE = "CRM_STATE_CREATE",
  CRM_STATE_EDIT = "CRM_STATE_EDIT",
  CRM_STATE_DELETE = "CRM_STATE_DELETE",
  CRM_PIPELINE_CREATE = "CRM_PIPELINE_CREATE",
  CRM_PIPELINE_EDIT = "CRM_PIPELINE_EDIT",
  CRM_PIPELINE_DELETE = "CRM_PIPELINE_DELETE",
  CRM_COMMENTARY_CREATE = "CRM_COMMENTARY_CREATE",
  CRM_COMMENTARY_SELECT_FILE = "CRM_COMMENTARY_SELECT_FILE",
  CRM_COMMENTARY_SELECT_EMOJI = "CRM_COMMENTARY_SELECT_EMOJI",
  CRM_COMMENTARY_DELETE_ALL = "CRM_COMMENTARY_DELETE_ALL",
  CRM_COPY_NEGOTIATION = "CRM_COPY_NEGOTIATION",
  CRM_MOVE_NEGOTIATION = "CRM_MOVE_NEGOTIATION",
  CRM_COPY_NEGOTIATION_MASSIVE = "CRM_COPY_NEGOTIATION_MASSIVE",
  CRM_MOVE_NEGOTIATION_MASSIVE = "CRM_MOVE_NEGOTIATION_MASSIVE",
  CRM_FROZEN_NEGOTIATION = "CRM_FROZEN_NEGOTIATION",
  CRM_FIELD_MANAGER_CORE_ROUTE = "CRM_FIELD_MANAGER_CORE_ROUTE",
  CRM_FIELD_MANAGER_SECTION_CREATE = "CRM_FIELD_MANAGER_SECTION_CREATE",
  CRM_FIELD_MANAGER_FIELD_CREATE = "CRM_FIELD_MANAGER_FIELD_CREATE",
  CRM_FIELD_MANAGER_FIELD_AND_SECTION_EDIT = "CRM_FIELD_MANAGER_FIELD_AND_SECTION_EDIT",
  CRM_FIELD_MANAGER_FIELD_AND_SECTION_DELETE = "CRM_FIELD_MANAGER_FIELD_AND_SECTION_DELETE",
  CRM_AUTOMATION_CORE_ROUTE = "CRM_AUTOMATION_CORE_ROUTE",
  CRM_AUTOMATION_CREATE = "CRM_AUTOMATION_CREATE",
  CRM_AUTOMATION_EDIT = "CRM_AUTOMATION_EDIT",
  CRM_AUTOMATION_DELETE = "CRM_AUTOMATION_DELETE",
  CRM_CONFIGURATIONS_ACCESS_PERMITS_CRM = "CRM_CONFIGURATIONS_ACCESS_PERMITS_CRM",
  CRM_PROCESS_TYPE_CORE_ROUTE = "CRM_PROCESS_TYPE_CORE_ROUTE",
  CRM_PROCESS_TYPE_CREATE = "CRM_PROCESS_TYPE_CREATE",
  CRM_PROCESS_TYPE_EDIT = "CRM_PROCESS_TYPE_EDIT",
  CRM_PROCESS_TYPE_DELETE = "CRM_PROCESS_TYPE_DELETE",
  CRM_NEGOTIATION_CREATE = "CRM_NEGOTIATION_CREATE",
  CRM_NEGOTIATION_EDIT = "CRM_NEGOTIATION_EDIT",
  CRM_NEGOTIATION_DELETE = "CRM_NEGOTIATION_DELETE",
  CRM_NEGOTIATION_PARENT_ACCESS = "CRM_NEGOTIATION_PARENT_ACCESS",
  CRM_NEGOTIATION_PARENT_CHANGE = "CRM_NEGOTIATION_PARENT_CHANGE",
  CRM_NEGOTIATION_PARENT_UNLINK = "CRM_NEGOTIATION_PARENT_UNLINK",
  CRM_NEGOTIATION_EDIT_AMOUNTS = "CRM_NEGOTIATION_EDIT_AMOUNTS",
  CRM_NEGOTIATION_GOAL_CREATE = "CRM_NEGOTIATION_GOAL_CREATE",
  CRM_NEGOTIATION_GOAL_EDIT = "CRM_NEGOTIATION_GOAL_EDIT",
  CRM_NEGOTIATION_GOAL_DELETE = "CRM_NEGOTIATION_GOAL_DELETE",
  CRM_NEGOTIATION_GOAL_ADD = "CRM_NEGOTIATION_GOAL_ADD",
  CRM_NEGOTIATION_GOAL_CHANGE = "CRM_NEGOTIATION_GOAL_CHANGE",
  CRM_NEGOTIATION_VIEW_GENERAL_INFORMATION = "CRM_NEGOTIATION_VIEW_GENERAL_INFORMATION",
  CRM_CUSTOMER_CREATE = "CRM_CUSTOMER_CREATE",
  CRM_CUSTOMER_EDIT = "CRM_CUSTOMER_EDIT",
  CRM_CUSTOMER_DELETE = "CRM_CUSTOMER_DELETE",
  CALENDAR_CORE_ROUTE = "CALENDAR_CORE_ROUTE",
  CALENDAR_ACTIVITY_CREATE = "CALENDAR_ACTIVITY_CREATE",
  CALENDAR_ACTIVITY_EDIT = "CALENDAR_ACTIVITY_EDIT",
  CALENDAR_ACTIVITY_DELETE = "CALENDAR_ACTIVITY_DELETE",
  CALENDAR_VIEW_OTHER_USER = "CALENDAR_VIEW_OTHER_USER",
  TASK_CORE_ROUTE = "TASK_CORE_ROUTE",
  TASK_CHANGE_STATE = "TASK_CHANGE_STATE",
  TASK_KANBAN_CORE_ROUTE = "TASK_KANBAN_CORE_ROUTE",
  TASK_LIST_VIEW_CORE_ROUTE = "TASK_LIST_VIEW_CORE_ROUTE",
  TASK_KANBAN_VIEW_CORE_ROUTE = "TASK_KANBAN_VIEW_CORE_ROUTE",
  COMPANY_CORE_ROUTE = "COMPANY_CORE_ROUTE",
  COMPANY_ORGANIZATION_ROUTE = "COMPANY_ORGANIZATION_ROUTE",
  COMPANY_DEPARTMENT_CREATE = "COMPANY_DEPARTMENT_CREATE",
  COMPANY_DEPARTMENT_EDIT = "COMPANY_DEPARTMENT_EDIT",
  COMPANY_DEPARTMENT_DELETE = "COMPANY_DEPARTMENT_DELETE",
  COMPANY_EMPLOYEES_ROUTE = "COMPANY_EMPLOYEES_ROUTE",
  COMPANY_EMPLOYEE_CREATE = "COMPANY_EMPLOYEE_CREATE",
  COMPANY_EMPLOYEE_EDIT = "COMPANY_EMPLOYEE_EDIT",
  COMPANY_EMPLOYEE_DELETE = "COMPANY_EMPLOYEE_DELETE",
  COMPANY_EMPLOYEE_INVITE_USER = "COMPANY_EMPLOYEE_INVITE_USER",
  COMPANY_EMPLOYEE_JOB_CREATE = "COMPANY_EMPLOYEE_JOB_CREATE",
  COMPANY_EMPLOYEE_JOB_EDIT = "COMPANY_EMPLOYEE_JOB_EDIT",
  COMPANY_EMPLOYEE_JOB_DELETE = "COMPANY_EMPLOYEE_JOB_DELETE",
  COMPANY_REASSIGN_DATA = "COMPANY_REASSIGN_DATA",
  CHAT_CORE_ROUTE = "CHAT_CORE_ROUTE",
  CHAT_SELECT_EMOJI = "CHAT_SELECT_EMOJI",
  CHAT_SELECT_FILE = "CHAT_SELECT_FILE",
  CHAT_SEND_MESSAGE = "CHAT_SEND_MESSAGE",
  MAIL_CORE_ROUTE = "MAIL_CORE_ROUTE",
  MAIL_INBOX_ROUTE = "MAIL_INBOX_ROUTE",
  MAIL_COMPOSE_ROUTE = "MAIL_COMPOSE_ROUTE",
  MAIL_DETAIL_ROUTE = "MAIL_DETAIL_ROUTE",
  FILES_CORE_ROUTE = "FILES_CORE_ROUTE",
  FILES_CREATE_FILE = "FILES_CREATE_FILE",
  FILES_EDIT_FILE = "FILES_EDIT_FILE",
  FILES_DELETE_FILE = "FILES_DELETE_FILE",
  FILES_CREATE_FILE_ALL = "FILES_CREATE_FILE_ALL",
  FILES_EDIT_FILE_ALL = "FILES_EDIT_FILE_ALL",
  FILES_DELETE_FILE_ALL = "FILES_DELETE_FILE_ALL",
  FILES_VIEW_FILE = "FILES_VIEW_FILE",
  FILES_CREATE_FOLDER = "FILES_CREATE_FOLDER",
  FILES_EDIT_FOLDER = "FILES_EDIT_FOLDER",
  FILES_DELETE_FOLDER = "FILES_DELETE_FOLDER",
  FILES_CREATE_FOLDER_ALL = "FILES_CREATE_FOLDER_ALL",
  FILES_EDIT_FOLDER_ALL = "FILES_EDIT_FOLDER_ALL",
  FILES_DELETE_FOLDER_ALL = "FILES_DELETE_FOLDER_ALL",
  FILES_MOVE_FILE_AND_FOLDER = "FILES_MOVE_FILE_AND_FOLDER",
  FILES_MOVE_FILE_AND_FOLDER_ALL = "FILES_MOVE_FILE_AND_FOLDER_ALL",
  FORUM_CORE_ROUTE = "FORUM_CORE_ROUTE",
  FORUM_CREATE_ARTICLE = "FORUM_CREATE_ARTICLE",
  FORUM_EDIT_ARTICLE = "FORUM_EDIT_ARTICLE",
  FORUM_DELETE_ARTICLE = "FORUM_DELETE_ARTICLE",
  FORUM_EDIT_ARTICLE_ALL = "FORUM_EDIT_ARTICLE_ALL",
  FORUM_DELETE_ARTICLE_ALL = "FORUM_DELETE_ARTICLE_ALL",
  SURVEY_CORE_ROUTE = "SURVEY_CORE_ROUTE",
  SURVEY_VIEW_FORM = "SURVEY_VIEW_FORM",
  SURVEY_CREATE_FORM = "SURVEY_CREATE_FORM",
  SURVEY_EDIT_FORM = "SURVEY_EDIT_FORM",
  SURVEY_DELETE_FORM = "SURVEY_DELETE_FORM",
  SURVEY_VIEW_ANSWERS = "SURVEY_VIEW_ANSWERS",
  SURVEY_DELETE_ANSWER = "SURVEY_DELETE_ANSWER",
  SURVEY_PROCESS_ANSWER = "SURVEY_PROCESS_ANSWER",
  ACCESS_CORE_ROUTE = "ACCESS_CORE_ROUTE",
  ACCESS_CREATE = "ACCESS_CREATE",
  ACCESS_EDIT = "ACCESS_EDIT",
  ACCESS_DELETE = "ACCESS_DELETE",
  CONFIG_CORE_ROUTE = "CONFIG_CORE_ROUTE",
  CONFIG_GENERAL = "CONFIG_GENERAL",
  CONFIG_PROCESS_TYPE = "CONFIG_PROCESS_TYPE",
  CONFIG_GOALS = "CONFIG_GOALS",
  CONFIG_JOB_TITLE = "CONFIG_JOB_TITLE",
  CONFIG_CUSTOMER = "CONFIG_CUSTOMER",
  CONFIG_CUSTOMER_DELETE = "CONFIG_CUSTOMER_DELETE",
  CONFIG_PAYMENT_AUTOMATION = "CONFIG_PAYMENT_AUTOMATION",
  CONFIG_PAYMENT_AUTOMATION_CREATE = "CONFIG_PAYMENT_AUTOMATION_CREATE",
  CONFIG_PAYMENT_AUTOMATION_EDIT = "CONFIG_PAYMENT_AUTOMATION_EDIT",
  CONFIG_PAYMENT_AUTOMATION_DELETE = "CONFIG_PAYMENT_AUTOMATION_DELETE",
  CONFIG_DEPARTMENTS = "CONFIG_DEPARTMENTS",
  CONFIG_DEPARTMENT_CREATE = "CONFIG_DEPARTMENT_CREATE",
  CONFIG_DEPARTMENT_EDIT = "CONFIG_DEPARTMENT_EDIT",
  CONFIG_DEPARTMENT_DELETE = "CONFIG_DEPARTMENT_DELETE",
  CONFIG_NEGOTIATIONS = "CONFIG_NEGOTIATIONS",
  CONFIG_NEGOTIATION_CREATE = "CONFIG_NEGOTIATION_CREATE",
  CONFIG_NEGOTIATION_EDIT = "CONFIG_NEGOTIATION_EDIT",
  CONFIG_NEGOTIATION_DELETE = "CONFIG_NEGOTIATION_DELETE",
  TICKETS_VIEW_ALL = "TICKETS_VIEW_ALL",
  ACADEMY_CORE_ROUTE = "ACADEMY_CORE_ROUTE",
  ACADEMY_COURSES_ROUTE = "ACADEMY_COURSES_ROUTE",
  ACADEMY_WORKSHOPS_ROUTE = "ACADEMY_WORKSHOPS_ROUTE",
  ACADEMY_ANSWERS_ROUTE = "ACADEMY_ANSWERS_ROUTE",
  ACADEMY_ADMIN_ANSWERS_ROUTE = "ACADEMY_ADMIN_ANSWERS_ROUTE",
  ACADEMY_ADMIN_ANSWERS_ALL_ROUTE = "ACADEMY_ADMIN_ANSWERS_ALL_ROUTE",
  CORPORATE_MANAGEMENT_CORE = "CORPORATE_MANAGEMENT_CORE",
  CORPORATE_MANAGEMENT_TIME = "CORPORATE_MANAGEMENT_TIME",
  CORPORATE_MANAGEMENT_TIME_CREATE = "CORPORATE_MANAGEMENT_TIME_CREATE",
  CORPORATE_MANAGEMENT_TIME_EDIT = "CORPORATE_MANAGEMENT_TIME_EDIT",
  CORPORATE_MANAGEMENT_TIME_DELETE = "CORPORATE_MANAGEMENT_TIME_DELETE",
  CORPORATE_MANAGEMENT_MILESTONE = "CORPORATE_MANAGEMENT_MILESTONE",
  CORPORATE_MANAGEMENT_MILESTONE_CREATE = "CORPORATE_MANAGEMENT_MILESTONE_CREATE",
  CORPORATE_MANAGEMENT_MILESTONE_EDIT = "CORPORATE_MANAGEMENT_MILESTONE_EDIT",
  CORPORATE_MANAGEMENT_MILESTONE_DELETE = "CORPORATE_MANAGEMENT_MILESTONE_DELETE",
  CORPORATE_MANAGEMENT_MILESTONE_VIEW_DETAILS = "CORPORATE_MANAGEMENT_MILESTONE_VIEW_DETAILS",
  REQUEST_TEMPLATE_CORE_ROUTE = "REQUEST_TEMPLATE_CORE_ROUTE",
  REQUEST_TEMPLATE_CREATE = "REQUEST_TEMPLATE_CREATE",
  REQUEST_TEMPLATE_EDIT = "REQUEST_TEMPLATE_EDIT",
  REQUEST_TEMPLATE_DELETE = "REQUEST_TEMPLATE_DELETE",
  REQUEST_CORE_ROUTE = "REQUEST_CORE_ROUTE",
  REQUEST_CREATE = "REQUEST_CREATE",
  REQUEST_EDIT = "REQUEST_EDIT",
  REQUEST_DELETE = "REQUEST_DELETE",
  TAG_CORE_ROUTE = "TAG_CORE_ROUTE",
  TAG_CREATE = "TAG_CREATE",
  TAG_EDIT = "TAG_EDIT",
  TAG_DELETE = "TAG_DELETE"
}

export enum EvolinciteTransactionType {
  CREDIT_CARD = "CREDIT_CARD",
  WIRE_TRANSFER = "WIRE_TRANSFER",
  CASH = "CASH",
  WEB_PAY = "WEB_PAY",
  BANK_DEPOSIT = "BANK_DEPOSIT",
  CORRESPONDENT_DEPOSIT = "CORRESPONDENT_DEPOSIT"
}

export enum EvolinciteLogicOperator {
  EXIST = "EXIST",
  NOT_EXIST = "NOT_EXIST",
  EQUAL = "EQUAL",
  NOT_EQUAL = "NOT_EQUAL",
  GREATER_THAN = "GREATER_THAN",
  SMALLER_THAN = "SMALLER_THAN"
}

export enum EvolinciteExpenseStates {
  PENDING = "PENDING",
  PAID = "PAID",
  VALIDATE = "VALIDATE"
}

export enum EvolinciteFieldCore {
  NAME = "NAME",
  VALUE = "VALUE",
  OWNER = "OWNER"
}

export enum EvolinciteMunicipality {
  CUCUTA = "CUCUTA",
  BUCARAMANGA = "BUCARAMANGA",
  LETICIA = "LETICIA",
  MEDELLIN = "MEDELLIN",
  ARAUCA = "ARAUCA",
  BARRANQUILLA = "BARRANQUILLA",
  BOGOTA = "BOGOTA",
  CARTAGENA = "CARTAGENA",
  TUNJA = "TUNJA",
  MANIZALES = "MANIZALES",
  FLORENCIA = "FLORENCIA",
  YOPAL = "YOPAL",
  POPAYAN = "POPAYAN",
  VALLEDUPAR = "VALLEDUPAR",
  QUIBDO = "QUIBDO",
  MONTERIA = "MONTERIA",
  INIRIDA = "INIRIDA",
  SAN_JOSE_DEL_GUAVIARE = "SAN_JOSE_DEL_GUAVIARE",
  NEIVA = "NEIVA",
  RIOACHA = "RIOACHA",
  SANTA_MARTA = "SANTA_MARTA",
  VILLAVICENCIO = "VILLAVICENCIO",
  PASTO = "PASTO",
  MOCOA = "MOCOA",
  ARMENIA = "ARMENIA",
  PEREIRA = "PEREIRA",
  SAN_ANDRES = "SAN_ANDRES",
  SINCELEJO = "SINCELEJO",
  IBAGUE = "IBAGUE",
  CALI = "CALI",
  MITU = "MITU",
  PUERTO_CARRENO = "PUERTO_CARRENO"
}

export enum EvolinciteDocumentType {
  CC = "CC",
  NIT = "NIT"
}

export enum EvolinciteWalletPaymentStatus {
  PAID = "PAID",
  PENDING = "PENDING",
  VALIDATE = "VALIDATE",
  REVERTED = "REVERTED"
}

export enum EvolinciteField {
  STRING = "STRING",
  NUMBER = "NUMBER",
  SELECT_LIST = "SELECT_LIST",
  DOCUMENT = "DOCUMENT",
  DATE = "DATE"
}

export enum EvolinciteMessageType {
  TEXT = "TEXT",
  IMG = "IMG",
  FILE = "FILE",
  VIDEO = "VIDEO"
}

export enum EvolinciteRule {
  MOVE = "MOVE",
  COPY = "COPY",
  CHANGE_ATTRIBUTE = "CHANGE_ATTRIBUTE",
  CREATE_PAYMENT = "CREATE_PAYMENT",
  CREATE_EXPENSE = "CREATE_EXPENSE",
  VALIDATE_FIELD = "VALIDATE_FIELD",
  FROZEN_NEGOTIATION = "FROZEN_NEGOTIATION",
  ASSIGN_GOAL_INITIAL = "ASSIGN_GOAL_INITIAL",
  ASSIGN_GOAL_FINAL = "ASSIGN_GOAL_FINAL",
  CREATE_NEGOTIATION = "CREATE_NEGOTIATION",
  VALIDATE_TOTAL_TASKS = "VALIDATE_TOTAL_TASKS",
  VALIDATE_TASK_STATE = "VALIDATE_TASK_STATE",
  VALIDATE_TASKS_SPECIFIC_STATE = "VALIDATE_TASKS_SPECIFIC_STATE",
  SEND_PRE_MADE_EMAIL = "SEND_PRE_MADE_EMAIL",
  SEND_CREATE_EMAIL = "SEND_CREATE_EMAIL",
  GENERATE_DOCUMENT = "GENERATE_DOCUMENT",
  CONTROL_CRM_STATES = "CONTROL_CRM_STATES"
}

export enum EvolinciteStates {
  INACTIVE = "INACTIVE",
  ACTIVE = "ACTIVE"
}

export enum EvolinciteApplication {
  LEADS_UP = "LEADS_UP",
  ACADEMY = "ACADEMY",
  LANDING = "LANDING"
}

export enum EvolinciteArticleStates {
  INTERNAL = "INTERNAL",
  EXTERNAL = "EXTERNAL"
}

export enum EvolinciteNotificationPriority {
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LOW = "LOW"
}

export enum EvolinciteMailStates {
  PENDING = "PENDING",
  SENT = "SENT",
  REJECTED = "REJECTED"
}

export enum EvolinciteSurveyAnswerState {
  PROCESS = "PROCESS",
  NO_PROCESS = "NO_PROCESS",
  NO_CRM = "NO_CRM"
}

export enum EvolunciteNotificationType {
  GENERAL = "GENERAL",
  NEGOTIATION = "NEGOTIATION",
  CHAT = "CHAT"
}

export enum EvolunciteMilestoneType {
  AMOUNT = "AMOUNT",
  CLIENTS = "CLIENTS",
  PROCESSES = "PROCESSES",
  GOALS = "GOALS",
  TASKS = "TASKS"
}

export enum EvolunciteRequestType {
  NEGOTIATION = "NEGOTIATION",
  PAY = "PAY",
  EXPENSE = "EXPENSE",
  GENERAL = "GENERAL"
}

export enum EvolinciteRequestPriority {
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LOW = "LOW"
}

export enum EvolinciteRequestStatus {
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED"
}



type EagerEvolinciteCompetence = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteCompetence, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly content?: string | null;
  readonly application?: EvolinciteApplication | keyof typeof EvolinciteApplication | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly EvolinciteSyllabus?: EvolinciteSyllabus | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly evolinciteCompetenceEvolinciteSyllabusId?: string | null;
}

type LazyEvolinciteCompetence = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteCompetence, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly content?: string | null;
  readonly application?: EvolinciteApplication | keyof typeof EvolinciteApplication | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly EvolinciteSyllabus: AsyncItem<EvolinciteSyllabus | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly evolinciteCompetenceEvolinciteSyllabusId?: string | null;
}

export declare type EvolinciteCompetence = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteCompetence : LazyEvolinciteCompetence

export declare const EvolinciteCompetence: (new (init: ModelInit<EvolinciteCompetence>) => EvolinciteCompetence) & {
  copyOf(source: EvolinciteCompetence, mutator: (draft: MutableModel<EvolinciteCompetence>) => MutableModel<EvolinciteCompetence> | void): EvolinciteCompetence;
}

type EagerEvolinciteCourse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteCourse, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly durationUnit?: string | null;
  readonly duration?: number | null;
  readonly objectives?: (string | null)[] | null;
  readonly application?: EvolinciteApplication | keyof typeof EvolinciteApplication | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly EvolinciteSyllabus?: EvolinciteSyllabus | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly evolinciteCourseEvolinciteSyllabusId?: string | null;
}

type LazyEvolinciteCourse = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteCourse, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly durationUnit?: string | null;
  readonly duration?: number | null;
  readonly objectives?: (string | null)[] | null;
  readonly application?: EvolinciteApplication | keyof typeof EvolinciteApplication | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly EvolinciteSyllabus: AsyncItem<EvolinciteSyllabus | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly evolinciteCourseEvolinciteSyllabusId?: string | null;
}

export declare type EvolinciteCourse = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteCourse : LazyEvolinciteCourse

export declare const EvolinciteCourse: (new (init: ModelInit<EvolinciteCourse>) => EvolinciteCourse) & {
  copyOf(source: EvolinciteCourse, mutator: (draft: MutableModel<EvolinciteCourse>) => MutableModel<EvolinciteCourse> | void): EvolinciteCourse;
}

type EagerEvolinciteSyllabus = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteSyllabus, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly content?: string | null;
  readonly application?: EvolinciteApplication | keyof typeof EvolinciteApplication | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly EvolinciteCompetence?: EvolinciteCompetence | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly evolinciteSyllabusEvolinciteCompetenceId?: string | null;
}

type LazyEvolinciteSyllabus = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteSyllabus, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly content?: string | null;
  readonly application?: EvolinciteApplication | keyof typeof EvolinciteApplication | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly EvolinciteCompetence: AsyncItem<EvolinciteCompetence | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly evolinciteSyllabusEvolinciteCompetenceId?: string | null;
}

export declare type EvolinciteSyllabus = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteSyllabus : LazyEvolinciteSyllabus

export declare const EvolinciteSyllabus: (new (init: ModelInit<EvolinciteSyllabus>) => EvolinciteSyllabus) & {
  copyOf(source: EvolinciteSyllabus, mutator: (draft: MutableModel<EvolinciteSyllabus>) => MutableModel<EvolinciteSyllabus> | void): EvolinciteSyllabus;
}

type EagerEvolinciteUserAnswers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteUserAnswers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly answers?: string | null;
  readonly application?: EvolinciteApplication | keyof typeof EvolinciteApplication | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly EvolinciteUser?: EvolinciteUser | null;
  readonly EvolinciteSyllabus?: EvolinciteSyllabus | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly evolinciteUserAnswersEvolinciteUserId?: string | null;
  readonly evolinciteUserAnswersEvolinciteSyllabusId?: string | null;
}

type LazyEvolinciteUserAnswers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteUserAnswers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly answers?: string | null;
  readonly application?: EvolinciteApplication | keyof typeof EvolinciteApplication | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly EvolinciteUser: AsyncItem<EvolinciteUser | undefined>;
  readonly EvolinciteSyllabus: AsyncItem<EvolinciteSyllabus | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly evolinciteUserAnswersEvolinciteUserId?: string | null;
  readonly evolinciteUserAnswersEvolinciteSyllabusId?: string | null;
}

export declare type EvolinciteUserAnswers = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteUserAnswers : LazyEvolinciteUserAnswers

export declare const EvolinciteUserAnswers: (new (init: ModelInit<EvolinciteUserAnswers>) => EvolinciteUserAnswers) & {
  copyOf(source: EvolinciteUserAnswers, mutator: (draft: MutableModel<EvolinciteUserAnswers>) => MutableModel<EvolinciteUserAnswers> | void): EvolinciteUserAnswers;
}

type EagerEvolinciteProcessType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteProcessType, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly order?: number | null;
  readonly sellerCommission?: number | null;
  readonly referrerCommission?: number | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly EvolinciteCrmNegotiations?: (EvolinciteCrmNegotiation | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteProcessType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteProcessType, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly order?: number | null;
  readonly sellerCommission?: number | null;
  readonly referrerCommission?: number | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly EvolinciteCrmNegotiations: AsyncCollection<EvolinciteCrmNegotiation>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteProcessType = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteProcessType : LazyEvolinciteProcessType

export declare const EvolinciteProcessType: (new (init: ModelInit<EvolinciteProcessType>) => EvolinciteProcessType) & {
  copyOf(source: EvolinciteProcessType, mutator: (draft: MutableModel<EvolinciteProcessType>) => MutableModel<EvolinciteProcessType> | void): EvolinciteProcessType;
}

type EagerEvolinciteExpenseType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteExpenseType, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly type?: EvolinciteField | keyof typeof EvolinciteField | null;
  readonly setting?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly EvolinciteExpenses?: (EvolinciteExpense | null)[] | null;
  readonly evolinciteCompanyID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteExpenseType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteExpenseType, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly type?: EvolinciteField | keyof typeof EvolinciteField | null;
  readonly setting?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly EvolinciteExpenses: AsyncCollection<EvolinciteExpense>;
  readonly evolinciteCompanyID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteExpenseType = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteExpenseType : LazyEvolinciteExpenseType

export declare const EvolinciteExpenseType: (new (init: ModelInit<EvolinciteExpenseType>) => EvolinciteExpenseType) & {
  copyOf(source: EvolinciteExpenseType, mutator: (draft: MutableModel<EvolinciteExpenseType>) => MutableModel<EvolinciteExpenseType> | void): EvolinciteExpenseType;
}

type EagerEvolinciteExpense = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteExpense, 'id'>;
  };
  readonly id: string;
  readonly amount?: number | null;
  readonly process?: string | null;
  readonly expenseState?: EvolinciteExpenseStates | keyof typeof EvolinciteExpenseStates | null;
  readonly expenseDate?: string | null;
  readonly observations?: string | null;
  readonly voucher?: (string | null)[] | null;
  readonly transactionType?: EvolinciteTransactionType | keyof typeof EvolinciteTransactionType | null;
  readonly reference?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteExpenseTypeID?: string | null;
  readonly EvolinciteExpenseType?: EvolinciteExpenseType | null;
  readonly evolinciteCrmNegotiationID?: string | null;
  readonly EvolinciteCrmNegotiation?: EvolinciteCrmNegotiation | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteExpenseLogs?: (EvolinciteExpenseLog | null)[] | null;
  readonly evolinciteUserID?: string | null;
  readonly EvolinciteUser?: EvolinciteUser | null;
  readonly evolinciteUserResponsibleID?: string | null;
  readonly EvolinciteUserResponsible?: EvolinciteUser | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteExpense = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteExpense, 'id'>;
  };
  readonly id: string;
  readonly amount?: number | null;
  readonly process?: string | null;
  readonly expenseState?: EvolinciteExpenseStates | keyof typeof EvolinciteExpenseStates | null;
  readonly expenseDate?: string | null;
  readonly observations?: string | null;
  readonly voucher?: (string | null)[] | null;
  readonly transactionType?: EvolinciteTransactionType | keyof typeof EvolinciteTransactionType | null;
  readonly reference?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteExpenseTypeID?: string | null;
  readonly EvolinciteExpenseType: AsyncItem<EvolinciteExpenseType | undefined>;
  readonly evolinciteCrmNegotiationID?: string | null;
  readonly EvolinciteCrmNegotiation: AsyncItem<EvolinciteCrmNegotiation | undefined>;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteExpenseLogs: AsyncCollection<EvolinciteExpenseLog>;
  readonly evolinciteUserID?: string | null;
  readonly EvolinciteUser: AsyncItem<EvolinciteUser | undefined>;
  readonly evolinciteUserResponsibleID?: string | null;
  readonly EvolinciteUserResponsible: AsyncItem<EvolinciteUser | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteExpense = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteExpense : LazyEvolinciteExpense

export declare const EvolinciteExpense: (new (init: ModelInit<EvolinciteExpense>) => EvolinciteExpense) & {
  copyOf(source: EvolinciteExpense, mutator: (draft: MutableModel<EvolinciteExpense>) => MutableModel<EvolinciteExpense> | void): EvolinciteExpense;
}

type EagerEvolinciteUserEvolinciteJobTitle = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteUserEvolinciteJobTitle, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteJobTitleID?: string | null;
  readonly EvolinciteJobTitle?: EvolinciteJobTitle | null;
  readonly evolinciteUserID?: string | null;
  readonly EvolinciteUser?: EvolinciteUser | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteUserEvolinciteJobTitle = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteUserEvolinciteJobTitle, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteJobTitleID?: string | null;
  readonly EvolinciteJobTitle: AsyncItem<EvolinciteJobTitle | undefined>;
  readonly evolinciteUserID?: string | null;
  readonly EvolinciteUser: AsyncItem<EvolinciteUser | undefined>;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteUserEvolinciteJobTitle = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteUserEvolinciteJobTitle : LazyEvolinciteUserEvolinciteJobTitle

export declare const EvolinciteUserEvolinciteJobTitle: (new (init: ModelInit<EvolinciteUserEvolinciteJobTitle>) => EvolinciteUserEvolinciteJobTitle) & {
  copyOf(source: EvolinciteUserEvolinciteJobTitle, mutator: (draft: MutableModel<EvolinciteUserEvolinciteJobTitle>) => MutableModel<EvolinciteUserEvolinciteJobTitle> | void): EvolinciteUserEvolinciteJobTitle;
}

type EagerEvolinciteJobTitle = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteJobTitle, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly salary?: number | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly EvolinciteUserEvolinciteJobTitle?: (EvolinciteUserEvolinciteJobTitle | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteJobTitle = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteJobTitle, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly salary?: number | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly EvolinciteUserEvolinciteJobTitle: AsyncCollection<EvolinciteUserEvolinciteJobTitle>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteJobTitle = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteJobTitle : LazyEvolinciteJobTitle

export declare const EvolinciteJobTitle: (new (init: ModelInit<EvolinciteJobTitle>) => EvolinciteJobTitle) & {
  copyOf(source: EvolinciteJobTitle, mutator: (draft: MutableModel<EvolinciteJobTitle>) => MutableModel<EvolinciteJobTitle> | void): EvolinciteJobTitle;
}

type EagerEvolinciteWalletPayment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteWalletPayment, 'id'>;
  };
  readonly id: string;
  readonly amount?: number | null;
  readonly scheduledDate?: string | null;
  readonly datePayment?: string | null;
  readonly paymentStatus?: EvolinciteWalletPaymentStatus | keyof typeof EvolinciteWalletPaymentStatus | null;
  readonly prePayment?: string | null;
  readonly postPayment?: string | null;
  readonly observations?: string | null;
  readonly voucher?: (string | null)[] | null;
  readonly transactionType?: EvolinciteTransactionType | keyof typeof EvolinciteTransactionType | null;
  readonly reference?: string | null;
  readonly amountInterest?: number | null;
  readonly amountCollection?: number | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly evolinciteUserReferrerID?: string | null;
  readonly EvolinciteUserReferrer?: EvolinciteUser | null;
  readonly evolinciteUserSellerID?: string | null;
  readonly EvolinciteUserSeller?: EvolinciteUser | null;
  readonly evolinciteCrmNegotiationID?: string | null;
  readonly EvolinciteCrmNegotiation?: EvolinciteCrmNegotiation | null;
  readonly evolinciteCustomerID?: string | null;
  readonly EvolinciteCustomer?: EvolinciteCustomer | null;
  readonly EvolinciteWalletPaymentLogs?: (EvolinciteWalletPaymentLog | null)[] | null;
  readonly evolinciteUserResponsibleID?: string | null;
  readonly EvolinciteUserResponsible?: EvolinciteUser | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteWalletPayment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteWalletPayment, 'id'>;
  };
  readonly id: string;
  readonly amount?: number | null;
  readonly scheduledDate?: string | null;
  readonly datePayment?: string | null;
  readonly paymentStatus?: EvolinciteWalletPaymentStatus | keyof typeof EvolinciteWalletPaymentStatus | null;
  readonly prePayment?: string | null;
  readonly postPayment?: string | null;
  readonly observations?: string | null;
  readonly voucher?: (string | null)[] | null;
  readonly transactionType?: EvolinciteTransactionType | keyof typeof EvolinciteTransactionType | null;
  readonly reference?: string | null;
  readonly amountInterest?: number | null;
  readonly amountCollection?: number | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly evolinciteUserReferrerID?: string | null;
  readonly EvolinciteUserReferrer: AsyncItem<EvolinciteUser | undefined>;
  readonly evolinciteUserSellerID?: string | null;
  readonly EvolinciteUserSeller: AsyncItem<EvolinciteUser | undefined>;
  readonly evolinciteCrmNegotiationID?: string | null;
  readonly EvolinciteCrmNegotiation: AsyncItem<EvolinciteCrmNegotiation | undefined>;
  readonly evolinciteCustomerID?: string | null;
  readonly EvolinciteCustomer: AsyncItem<EvolinciteCustomer | undefined>;
  readonly EvolinciteWalletPaymentLogs: AsyncCollection<EvolinciteWalletPaymentLog>;
  readonly evolinciteUserResponsibleID?: string | null;
  readonly EvolinciteUserResponsible: AsyncItem<EvolinciteUser | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteWalletPayment = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteWalletPayment : LazyEvolinciteWalletPayment

export declare const EvolinciteWalletPayment: (new (init: ModelInit<EvolinciteWalletPayment>) => EvolinciteWalletPayment) & {
  copyOf(source: EvolinciteWalletPayment, mutator: (draft: MutableModel<EvolinciteWalletPayment>) => MutableModel<EvolinciteWalletPayment> | void): EvolinciteWalletPayment;
}

type EagerEvolinciteCrmNegotiationField = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteCrmNegotiationField, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly field?: string | null;
  readonly type?: EvolinciteField | keyof typeof EvolinciteField | null;
  readonly required?: boolean | null;
  readonly order?: number | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly meta?: string | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly EvolinciteCrmNegotiationFieldValues?: (EvolinciteCrmNegotiationFieldValue | null)[] | null;
  readonly evolinciteCrmNegotiationSectionID?: string | null;
  readonly EvolinciteCrmNegotiationSection?: EvolinciteCrmNegotiationSection | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteCrmNegotiationField = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteCrmNegotiationField, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly field?: string | null;
  readonly type?: EvolinciteField | keyof typeof EvolinciteField | null;
  readonly required?: boolean | null;
  readonly order?: number | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly meta?: string | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly EvolinciteCrmNegotiationFieldValues: AsyncCollection<EvolinciteCrmNegotiationFieldValue>;
  readonly evolinciteCrmNegotiationSectionID?: string | null;
  readonly EvolinciteCrmNegotiationSection: AsyncItem<EvolinciteCrmNegotiationSection | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteCrmNegotiationField = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteCrmNegotiationField : LazyEvolinciteCrmNegotiationField

export declare const EvolinciteCrmNegotiationField: (new (init: ModelInit<EvolinciteCrmNegotiationField>) => EvolinciteCrmNegotiationField) & {
  copyOf(source: EvolinciteCrmNegotiationField, mutator: (draft: MutableModel<EvolinciteCrmNegotiationField>) => MutableModel<EvolinciteCrmNegotiationField> | void): EvolinciteCrmNegotiationField;
}

type EagerEvolinciteCrmNegotiationSection = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteCrmNegotiationSection, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly order?: number | null;
  readonly meta?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly EvolinciteCrmNegotiationFields?: (EvolinciteCrmNegotiationField | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteCrmNegotiationSection = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteCrmNegotiationSection, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly order?: number | null;
  readonly meta?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly EvolinciteCrmNegotiationFields: AsyncCollection<EvolinciteCrmNegotiationField>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteCrmNegotiationSection = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteCrmNegotiationSection : LazyEvolinciteCrmNegotiationSection

export declare const EvolinciteCrmNegotiationSection: (new (init: ModelInit<EvolinciteCrmNegotiationSection>) => EvolinciteCrmNegotiationSection) & {
  copyOf(source: EvolinciteCrmNegotiationSection, mutator: (draft: MutableModel<EvolinciteCrmNegotiationSection>) => MutableModel<EvolinciteCrmNegotiationSection> | void): EvolinciteCrmNegotiationSection;
}

type EagerEvolinciteCrmAutomation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteCrmAutomation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly rule?: EvolinciteRule | keyof typeof EvolinciteRule | null;
  readonly setting?: string | null;
  readonly order?: number | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly evolinciteCrmStateID?: string | null;
  readonly EvolinciteCrmState?: EvolinciteCrmState | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteCrmAutomation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteCrmAutomation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly rule?: EvolinciteRule | keyof typeof EvolinciteRule | null;
  readonly setting?: string | null;
  readonly order?: number | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly evolinciteCrmStateID?: string | null;
  readonly EvolinciteCrmState: AsyncItem<EvolinciteCrmState | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteCrmAutomation = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteCrmAutomation : LazyEvolinciteCrmAutomation

export declare const EvolinciteCrmAutomation: (new (init: ModelInit<EvolinciteCrmAutomation>) => EvolinciteCrmAutomation) & {
  copyOf(source: EvolinciteCrmAutomation, mutator: (draft: MutableModel<EvolinciteCrmAutomation>) => MutableModel<EvolinciteCrmAutomation> | void): EvolinciteCrmAutomation;
}

type EagerEvolinciteComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteComment, 'id'>;
  };
  readonly id: string;
  readonly files?: (string | null)[] | null;
  readonly content?: string | null;
  readonly pinned?: boolean | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteUserID?: string | null;
  readonly evolinciteCrmNegotiationID?: string | null;
  readonly EvolinciteCrmNegotiation?: EvolinciteCrmNegotiation | null;
  readonly EvolinciteUser?: EvolinciteUser | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteComment, 'id'>;
  };
  readonly id: string;
  readonly files?: (string | null)[] | null;
  readonly content?: string | null;
  readonly pinned?: boolean | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteUserID?: string | null;
  readonly evolinciteCrmNegotiationID?: string | null;
  readonly EvolinciteCrmNegotiation: AsyncItem<EvolinciteCrmNegotiation | undefined>;
  readonly EvolinciteUser: AsyncItem<EvolinciteUser | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteComment = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteComment : LazyEvolinciteComment

export declare const EvolinciteComment: (new (init: ModelInit<EvolinciteComment>) => EvolinciteComment) & {
  copyOf(source: EvolinciteComment, mutator: (draft: MutableModel<EvolinciteComment>) => MutableModel<EvolinciteComment> | void): EvolinciteComment;
}

type EagerEvolinciteActivity = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteActivity, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly color?: string | null;
  readonly type?: EvolinciteActivityTypes | keyof typeof EvolinciteActivityTypes | null;
  readonly priority?: number | null;
  readonly meta?: string | null;
  readonly taskState?: EvolinciteTaskStates | keyof typeof EvolinciteTaskStates | null;
  readonly documents?: (string | null)[] | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteUserID?: string | null;
  readonly EvolinciteUserOwner?: EvolinciteUser | null;
  readonly Participants?: (EvolinciteActivityEvolinciteUser | null)[] | null;
  readonly evolinciteCompanyID?: string | null;
  readonly evolinciteCrmNegotiationID?: string | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly EvolinciteCrmNegotiation?: EvolinciteCrmNegotiation | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteActivity = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteActivity, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly color?: string | null;
  readonly type?: EvolinciteActivityTypes | keyof typeof EvolinciteActivityTypes | null;
  readonly priority?: number | null;
  readonly meta?: string | null;
  readonly taskState?: EvolinciteTaskStates | keyof typeof EvolinciteTaskStates | null;
  readonly documents?: (string | null)[] | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteUserID?: string | null;
  readonly EvolinciteUserOwner: AsyncItem<EvolinciteUser | undefined>;
  readonly Participants: AsyncCollection<EvolinciteActivityEvolinciteUser>;
  readonly evolinciteCompanyID?: string | null;
  readonly evolinciteCrmNegotiationID?: string | null;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly EvolinciteCrmNegotiation: AsyncItem<EvolinciteCrmNegotiation | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteActivity = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteActivity : LazyEvolinciteActivity

export declare const EvolinciteActivity: (new (init: ModelInit<EvolinciteActivity>) => EvolinciteActivity) & {
  copyOf(source: EvolinciteActivity, mutator: (draft: MutableModel<EvolinciteActivity>) => MutableModel<EvolinciteActivity> | void): EvolinciteActivity;
}

type EagerEvolincitePermissions = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolincitePermissions, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly evolinciteUserID?: string | null;
  readonly evolinciteDepartmentID?: string | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly EvolinciteUser?: EvolinciteUser | null;
  readonly EvolinciteDepartment?: EvolinciteDepartment | null;
  readonly evolinciteRolID?: string | null;
  readonly EvolinciteRol?: EvolinciteRol | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolincitePermissions = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolincitePermissions, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly evolinciteUserID?: string | null;
  readonly evolinciteDepartmentID?: string | null;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly EvolinciteUser: AsyncItem<EvolinciteUser | undefined>;
  readonly EvolinciteDepartment: AsyncItem<EvolinciteDepartment | undefined>;
  readonly evolinciteRolID?: string | null;
  readonly EvolinciteRol: AsyncItem<EvolinciteRol | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolincitePermissions = LazyLoading extends LazyLoadingDisabled ? EagerEvolincitePermissions : LazyEvolincitePermissions

export declare const EvolincitePermissions: (new (init: ModelInit<EvolincitePermissions>) => EvolincitePermissions) & {
  copyOf(source: EvolincitePermissions, mutator: (draft: MutableModel<EvolincitePermissions>) => MutableModel<EvolincitePermissions> | void): EvolincitePermissions;
}

type EagerEvolinciteDepartment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteDepartment, 'id'>;
  };
  readonly id: string;
  readonly name?: string | null;
  readonly parent?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly EvolincitePermissions?: (EvolincitePermissions | null)[] | null;
  readonly EvolinciteUserDepartments?: (EvolinciteUserDepartment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteDepartment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteDepartment, 'id'>;
  };
  readonly id: string;
  readonly name?: string | null;
  readonly parent?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly EvolincitePermissions: AsyncCollection<EvolincitePermissions>;
  readonly EvolinciteUserDepartments: AsyncCollection<EvolinciteUserDepartment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteDepartment = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteDepartment : LazyEvolinciteDepartment

export declare const EvolinciteDepartment: (new (init: ModelInit<EvolinciteDepartment>) => EvolinciteDepartment) & {
  copyOf(source: EvolinciteDepartment, mutator: (draft: MutableModel<EvolinciteDepartment>) => MutableModel<EvolinciteDepartment> | void): EvolinciteDepartment;
}

type EagerEvolinciteSubscription = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteSubscription, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly price?: number | null;
  readonly dateInitial?: string | null;
  readonly dateFinal?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly EvolinciteCompanies?: (EvolinciteCompany | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteSubscription = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteSubscription, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly price?: number | null;
  readonly dateInitial?: string | null;
  readonly dateFinal?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly EvolinciteCompanies: AsyncCollection<EvolinciteCompany>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteSubscription = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteSubscription : LazyEvolinciteSubscription

export declare const EvolinciteSubscription: (new (init: ModelInit<EvolinciteSubscription>) => EvolinciteSubscription) & {
  copyOf(source: EvolinciteSubscription, mutator: (draft: MutableModel<EvolinciteSubscription>) => MutableModel<EvolinciteSubscription> | void): EvolinciteSubscription;
}

type EagerEvolinciteModule = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteModule, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteModule = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteModule, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteModule = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteModule : LazyEvolinciteModule

export declare const EvolinciteModule: (new (init: ModelInit<EvolinciteModule>) => EvolinciteModule) & {
  copyOf(source: EvolinciteModule, mutator: (draft: MutableModel<EvolinciteModule>) => MutableModel<EvolinciteModule> | void): EvolinciteModule;
}

type EagerEvolinciteFunctionality = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteFunctionality, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly functionalities?: (EvolinciteFunctionalities | null)[] | Array<keyof typeof EvolinciteFunctionalities> | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolincitePackageID?: string | null;
  readonly EvolincitePackage?: EvolincitePackage | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteFunctionality = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteFunctionality, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly functionalities?: (EvolinciteFunctionalities | null)[] | Array<keyof typeof EvolinciteFunctionalities> | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolincitePackageID?: string | null;
  readonly EvolincitePackage: AsyncItem<EvolincitePackage | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteFunctionality = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteFunctionality : LazyEvolinciteFunctionality

export declare const EvolinciteFunctionality: (new (init: ModelInit<EvolinciteFunctionality>) => EvolinciteFunctionality) & {
  copyOf(source: EvolinciteFunctionality, mutator: (draft: MutableModel<EvolinciteFunctionality>) => MutableModel<EvolinciteFunctionality> | void): EvolinciteFunctionality;
}

type EagerEvolinciteRol = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteRol, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly permissions?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly EvolincitePermissions?: (EvolincitePermissions | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteRol = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteRol, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly permissions?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly EvolincitePermissions: AsyncCollection<EvolincitePermissions>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteRol = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteRol : LazyEvolinciteRol

export declare const EvolinciteRol: (new (init: ModelInit<EvolinciteRol>) => EvolinciteRol) & {
  copyOf(source: EvolinciteRol, mutator: (draft: MutableModel<EvolinciteRol>) => MutableModel<EvolinciteRol> | void): EvolinciteRol;
}

type EagerEvolinciteCustomer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteCustomer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly lastName?: string | null;
  readonly documentType?: EvolinciteDocumentType | keyof typeof EvolinciteDocumentType | null;
  readonly documentNumber?: string | null;
  readonly phone?: string | null;
  readonly optionalPhone?: string | null;
  readonly email?: string | null;
  readonly picture?: string | null;
  readonly birthDate?: string | null;
  readonly municipality?: EvolinciteMunicipality | keyof typeof EvolinciteMunicipality | null;
  readonly documents?: (string | null)[] | null;
  readonly address?: string | null;
  readonly meta?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly EvolinciteCrmNegotiations?: (EvolinciteCrmNegotiation | null)[] | null;
  readonly EvolinciteWalletPayments?: (EvolinciteWalletPayment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteCustomer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteCustomer, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly lastName?: string | null;
  readonly documentType?: EvolinciteDocumentType | keyof typeof EvolinciteDocumentType | null;
  readonly documentNumber?: string | null;
  readonly phone?: string | null;
  readonly optionalPhone?: string | null;
  readonly email?: string | null;
  readonly picture?: string | null;
  readonly birthDate?: string | null;
  readonly municipality?: EvolinciteMunicipality | keyof typeof EvolinciteMunicipality | null;
  readonly documents?: (string | null)[] | null;
  readonly address?: string | null;
  readonly meta?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly EvolinciteCrmNegotiations: AsyncCollection<EvolinciteCrmNegotiation>;
  readonly EvolinciteWalletPayments: AsyncCollection<EvolinciteWalletPayment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteCustomer = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteCustomer : LazyEvolinciteCustomer

export declare const EvolinciteCustomer: (new (init: ModelInit<EvolinciteCustomer>) => EvolinciteCustomer) & {
  copyOf(source: EvolinciteCustomer, mutator: (draft: MutableModel<EvolinciteCustomer>) => MutableModel<EvolinciteCustomer> | void): EvolinciteCustomer;
}

type EagerEvolinciteUserSettings = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteUserSettings, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly settings?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteUserID?: string | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteUser?: EvolinciteUser | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteUserSettings = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteUserSettings, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly settings?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteUserID?: string | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteUser: AsyncItem<EvolinciteUser | undefined>;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteUserSettings = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteUserSettings : LazyEvolinciteUserSettings

export declare const EvolinciteUserSettings: (new (init: ModelInit<EvolinciteUserSettings>) => EvolinciteUserSettings) & {
  copyOf(source: EvolinciteUserSettings, mutator: (draft: MutableModel<EvolinciteUserSettings>) => MutableModel<EvolinciteUserSettings> | void): EvolinciteUserSettings;
}

type EagerEvolinciteCrmPipeline = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteCrmPipeline, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly publicDescription?: string | null;
  readonly order?: number | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly meta?: string | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly EvolinciteCrmStates?: (EvolinciteCrmState | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteCrmPipeline = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteCrmPipeline, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly publicDescription?: string | null;
  readonly order?: number | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly meta?: string | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly EvolinciteCrmStates: AsyncCollection<EvolinciteCrmState>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteCrmPipeline = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteCrmPipeline : LazyEvolinciteCrmPipeline

export declare const EvolinciteCrmPipeline: (new (init: ModelInit<EvolinciteCrmPipeline>) => EvolinciteCrmPipeline) & {
  copyOf(source: EvolinciteCrmPipeline, mutator: (draft: MutableModel<EvolinciteCrmPipeline>) => MutableModel<EvolinciteCrmPipeline> | void): EvolinciteCrmPipeline;
}

type EagerEvolinciteCrmState = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteCrmState, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly publicDescription?: string | null;
  readonly color?: string | null;
  readonly order?: number | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly EvolinciteCrmNegotiations?: (EvolinciteCrmNegotiation | null)[] | null;
  readonly EvolinciteCrmAutomations?: (EvolinciteCrmAutomation | null)[] | null;
  readonly evolinciteCrmPipelineID?: string | null;
  readonly EvolinciteCrmPipeline?: EvolinciteCrmPipeline | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteCrmState = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteCrmState, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly publicDescription?: string | null;
  readonly color?: string | null;
  readonly order?: number | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly EvolinciteCrmNegotiations: AsyncCollection<EvolinciteCrmNegotiation>;
  readonly EvolinciteCrmAutomations: AsyncCollection<EvolinciteCrmAutomation>;
  readonly evolinciteCrmPipelineID?: string | null;
  readonly EvolinciteCrmPipeline: AsyncItem<EvolinciteCrmPipeline | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteCrmState = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteCrmState : LazyEvolinciteCrmState

export declare const EvolinciteCrmState: (new (init: ModelInit<EvolinciteCrmState>) => EvolinciteCrmState) & {
  copyOf(source: EvolinciteCrmState, mutator: (draft: MutableModel<EvolinciteCrmState>) => MutableModel<EvolinciteCrmState> | void): EvolinciteCrmState;
}

type EagerEvolinciteCrmNegotiationLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteCrmNegotiationLog, 'id'>;
  };
  readonly id: string;
  readonly log?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteUserID?: string | null;
  readonly evolinciteCompanyID?: string | null;
  readonly evolinciteCrmNegotiationID?: string | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly EvolinciteUser?: EvolinciteUser | null;
  readonly EvolinciteCrmNegotiation?: EvolinciteCrmNegotiation | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteCrmNegotiationLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteCrmNegotiationLog, 'id'>;
  };
  readonly id: string;
  readonly log?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteUserID?: string | null;
  readonly evolinciteCompanyID?: string | null;
  readonly evolinciteCrmNegotiationID?: string | null;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly EvolinciteUser: AsyncItem<EvolinciteUser | undefined>;
  readonly EvolinciteCrmNegotiation: AsyncItem<EvolinciteCrmNegotiation | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteCrmNegotiationLog = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteCrmNegotiationLog : LazyEvolinciteCrmNegotiationLog

export declare const EvolinciteCrmNegotiationLog: (new (init: ModelInit<EvolinciteCrmNegotiationLog>) => EvolinciteCrmNegotiationLog) & {
  copyOf(source: EvolinciteCrmNegotiationLog, mutator: (draft: MutableModel<EvolinciteCrmNegotiationLog>) => MutableModel<EvolinciteCrmNegotiationLog> | void): EvolinciteCrmNegotiationLog;
}

type EagerEvolinciteCrmNegotiation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteCrmNegotiation, 'id'>;
  };
  readonly id: string;
  readonly name?: string | null;
  readonly value?: number | null;
  readonly due?: number | null;
  readonly parent?: string | null;
  readonly date?: string | null;
  readonly documents?: (string | null)[] | null;
  readonly meta?: string | null;
  readonly frozen?: boolean | null;
  readonly valueInterest?: number | null;
  readonly valueCollection?: number | null;
  readonly observers?: (string | null)[] | null;
  readonly exitDate?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly evolinciteUserSellerID?: string | null;
  readonly EvolinciteUserSeller?: EvolinciteUser | null;
  readonly evolinciteUserReferrerID?: string | null;
  readonly EvolinciteUserReferrer?: EvolinciteUser | null;
  readonly evolinciteUserOwnerID?: string | null;
  readonly EvolinciteUserOwner?: EvolinciteUser | null;
  readonly EvolinciteCrmNegotiationFieldValues?: (EvolinciteCrmNegotiationFieldValue | null)[] | null;
  readonly evolinciteCrmStateID?: string | null;
  readonly EvolinciteCrmState?: EvolinciteCrmState | null;
  readonly EvolinciteWalletPayments?: (EvolinciteWalletPayment | null)[] | null;
  readonly evolinciteCustomerID?: string | null;
  readonly EvolinciteCustomer?: EvolinciteCustomer | null;
  readonly EvolinciteCrmNegotiationLogs?: (EvolinciteCrmNegotiationLog | null)[] | null;
  readonly EvolinciteComments?: (EvolinciteComment | null)[] | null;
  readonly EvolinciteActivities?: (EvolinciteActivity | null)[] | null;
  readonly EvolinciteUsersObserver?: (EvolinciteUserEvolinciteCrmNegotiation | null)[] | null;
  readonly EvolinciteExpenses?: (EvolinciteExpense | null)[] | null;
  readonly evolinciteProcessTypeID?: string | null;
  readonly EvolinciteProcessType?: EvolinciteProcessType | null;
  readonly initialGoalID?: string | null;
  readonly InitialGoal?: EvolinciteGoal | null;
  readonly finalGoalID?: string | null;
  readonly FinalGoal?: EvolinciteGoal | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteCrmNegotiation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteCrmNegotiation, 'id'>;
  };
  readonly id: string;
  readonly name?: string | null;
  readonly value?: number | null;
  readonly due?: number | null;
  readonly parent?: string | null;
  readonly date?: string | null;
  readonly documents?: (string | null)[] | null;
  readonly meta?: string | null;
  readonly frozen?: boolean | null;
  readonly valueInterest?: number | null;
  readonly valueCollection?: number | null;
  readonly observers?: (string | null)[] | null;
  readonly exitDate?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly evolinciteUserSellerID?: string | null;
  readonly EvolinciteUserSeller: AsyncItem<EvolinciteUser | undefined>;
  readonly evolinciteUserReferrerID?: string | null;
  readonly EvolinciteUserReferrer: AsyncItem<EvolinciteUser | undefined>;
  readonly evolinciteUserOwnerID?: string | null;
  readonly EvolinciteUserOwner: AsyncItem<EvolinciteUser | undefined>;
  readonly EvolinciteCrmNegotiationFieldValues: AsyncCollection<EvolinciteCrmNegotiationFieldValue>;
  readonly evolinciteCrmStateID?: string | null;
  readonly EvolinciteCrmState: AsyncItem<EvolinciteCrmState | undefined>;
  readonly EvolinciteWalletPayments: AsyncCollection<EvolinciteWalletPayment>;
  readonly evolinciteCustomerID?: string | null;
  readonly EvolinciteCustomer: AsyncItem<EvolinciteCustomer | undefined>;
  readonly EvolinciteCrmNegotiationLogs: AsyncCollection<EvolinciteCrmNegotiationLog>;
  readonly EvolinciteComments: AsyncCollection<EvolinciteComment>;
  readonly EvolinciteActivities: AsyncCollection<EvolinciteActivity>;
  readonly EvolinciteUsersObserver: AsyncCollection<EvolinciteUserEvolinciteCrmNegotiation>;
  readonly EvolinciteExpenses: AsyncCollection<EvolinciteExpense>;
  readonly evolinciteProcessTypeID?: string | null;
  readonly EvolinciteProcessType: AsyncItem<EvolinciteProcessType | undefined>;
  readonly initialGoalID?: string | null;
  readonly InitialGoal: AsyncItem<EvolinciteGoal | undefined>;
  readonly finalGoalID?: string | null;
  readonly FinalGoal: AsyncItem<EvolinciteGoal | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteCrmNegotiation = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteCrmNegotiation : LazyEvolinciteCrmNegotiation

export declare const EvolinciteCrmNegotiation: (new (init: ModelInit<EvolinciteCrmNegotiation>) => EvolinciteCrmNegotiation) & {
  copyOf(source: EvolinciteCrmNegotiation, mutator: (draft: MutableModel<EvolinciteCrmNegotiation>) => MutableModel<EvolinciteCrmNegotiation> | void): EvolinciteCrmNegotiation;
}

type EagerEvolinciteRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Key?: string | null;
  readonly name?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly meta?: string | null;
  readonly EvolinciteUsers?: (EvolinciteRoomEvolinciteUser | null)[] | null;
  readonly EvolinciteMessages?: (EvolinciteMessage | null)[] | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Key?: string | null;
  readonly name?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly meta?: string | null;
  readonly EvolinciteUsers: AsyncCollection<EvolinciteRoomEvolinciteUser>;
  readonly EvolinciteMessages: AsyncCollection<EvolinciteMessage>;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteRoom = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteRoom : LazyEvolinciteRoom

export declare const EvolinciteRoom: (new (init: ModelInit<EvolinciteRoom>) => EvolinciteRoom) & {
  copyOf(source: EvolinciteRoom, mutator: (draft: MutableModel<EvolinciteRoom>) => MutableModel<EvolinciteRoom> | void): EvolinciteRoom;
}

type EagerEvolinciteMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteMessage, 'id'>;
  };
  readonly id: string;
  readonly content?: string | null;
  readonly type?: EvolinciteMessageType | keyof typeof EvolinciteMessageType | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly evolinciteUserID?: string | null;
  readonly EvolinciteUser?: EvolinciteUser | null;
  readonly evolinciteRoomID?: string | null;
  readonly EvolinciteRoom?: EvolinciteRoom | null;
}

type LazyEvolinciteMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteMessage, 'id'>;
  };
  readonly id: string;
  readonly content?: string | null;
  readonly type?: EvolinciteMessageType | keyof typeof EvolinciteMessageType | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly evolinciteUserID?: string | null;
  readonly EvolinciteUser: AsyncItem<EvolinciteUser | undefined>;
  readonly evolinciteRoomID?: string | null;
  readonly EvolinciteRoom: AsyncItem<EvolinciteRoom | undefined>;
}

export declare type EvolinciteMessage = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteMessage : LazyEvolinciteMessage

export declare const EvolinciteMessage: (new (init: ModelInit<EvolinciteMessage>) => EvolinciteMessage) & {
  copyOf(source: EvolinciteMessage, mutator: (draft: MutableModel<EvolinciteMessage>) => MutableModel<EvolinciteMessage> | void): EvolinciteMessage;
}

type EagerEvolinciteCrmNegotiationFieldValue = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteCrmNegotiationFieldValue, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly value?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCrmNegotiationFieldID?: string | null;
  readonly EvolinciteCrmNegotiationField?: EvolinciteCrmNegotiationField | null;
  readonly evolinciteCrmNegotiationID?: string | null;
  readonly EvolinciteCrmNegotiation?: EvolinciteCrmNegotiation | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteCrmNegotiationFieldValue = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteCrmNegotiationFieldValue, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly value?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCrmNegotiationFieldID?: string | null;
  readonly EvolinciteCrmNegotiationField: AsyncItem<EvolinciteCrmNegotiationField | undefined>;
  readonly evolinciteCrmNegotiationID?: string | null;
  readonly EvolinciteCrmNegotiation: AsyncItem<EvolinciteCrmNegotiation | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteCrmNegotiationFieldValue = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteCrmNegotiationFieldValue : LazyEvolinciteCrmNegotiationFieldValue

export declare const EvolinciteCrmNegotiationFieldValue: (new (init: ModelInit<EvolinciteCrmNegotiationFieldValue>) => EvolinciteCrmNegotiationFieldValue) & {
  copyOf(source: EvolinciteCrmNegotiationFieldValue, mutator: (draft: MutableModel<EvolinciteCrmNegotiationFieldValue>) => MutableModel<EvolinciteCrmNegotiationFieldValue> | void): EvolinciteCrmNegotiationFieldValue;
}

type EagerEvolinciteEmail = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteEmail, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly from?: string | null;
  readonly to?: string | null;
  readonly content?: string | null;
  readonly subject?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteEmail = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteEmail, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly from?: string | null;
  readonly to?: string | null;
  readonly content?: string | null;
  readonly subject?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteEmail = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteEmail : LazyEvolinciteEmail

export declare const EvolinciteEmail: (new (init: ModelInit<EvolinciteEmail>) => EvolinciteEmail) & {
  copyOf(source: EvolinciteEmail, mutator: (draft: MutableModel<EvolinciteEmail>) => MutableModel<EvolinciteEmail> | void): EvolinciteEmail;
}

type EagerEvolinciteEmailTemplate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteEmailTemplate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteEmailTemplate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteEmailTemplate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteEmailTemplate = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteEmailTemplate : LazyEvolinciteEmailTemplate

export declare const EvolinciteEmailTemplate: (new (init: ModelInit<EvolinciteEmailTemplate>) => EvolinciteEmailTemplate) & {
  copyOf(source: EvolinciteEmailTemplate, mutator: (draft: MutableModel<EvolinciteEmailTemplate>) => MutableModel<EvolinciteEmailTemplate> | void): EvolinciteEmailTemplate;
}

type EagerEvolinciteNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteNotification, 'id'>;
  };
  readonly id: string;
  readonly content?: string | null;
  readonly title?: string | null;
  readonly priority?: EvolinciteNotificationPriority | keyof typeof EvolinciteNotificationPriority | null;
  readonly type?: EvolunciteNotificationType | keyof typeof EvolunciteNotificationType | null;
  readonly meta?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteUserID?: string | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly EvolinciteUser?: EvolinciteUser | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteNotification, 'id'>;
  };
  readonly id: string;
  readonly content?: string | null;
  readonly title?: string | null;
  readonly priority?: EvolinciteNotificationPriority | keyof typeof EvolinciteNotificationPriority | null;
  readonly type?: EvolunciteNotificationType | keyof typeof EvolunciteNotificationType | null;
  readonly meta?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteUserID?: string | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly EvolinciteUser: AsyncItem<EvolinciteUser | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteNotification = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteNotification : LazyEvolinciteNotification

export declare const EvolinciteNotification: (new (init: ModelInit<EvolinciteNotification>) => EvolinciteNotification) & {
  copyOf(source: EvolinciteNotification, mutator: (draft: MutableModel<EvolinciteNotification>) => MutableModel<EvolinciteNotification> | void): EvolinciteNotification;
}

type EagerEvolinciteUserDepartment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteUserDepartment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly evolinciteUserID?: string | null;
  readonly EvolinciteUser?: EvolinciteUser | null;
  readonly evolinciteDepartmentID?: string | null;
  readonly EvolinciteDepartment?: EvolinciteDepartment | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteUserDepartment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteUserDepartment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly evolinciteUserID?: string | null;
  readonly EvolinciteUser: AsyncItem<EvolinciteUser | undefined>;
  readonly evolinciteDepartmentID?: string | null;
  readonly EvolinciteDepartment: AsyncItem<EvolinciteDepartment | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteUserDepartment = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteUserDepartment : LazyEvolinciteUserDepartment

export declare const EvolinciteUserDepartment: (new (init: ModelInit<EvolinciteUserDepartment>) => EvolinciteUserDepartment) & {
  copyOf(source: EvolinciteUserDepartment, mutator: (draft: MutableModel<EvolinciteUserDepartment>) => MutableModel<EvolinciteUserDepartment> | void): EvolinciteUserDepartment;
}

type EagerEvolinciteUserEvolinciteCompany = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteUserEvolinciteCompany, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteUserID?: string | null;
  readonly EvolinciteUser?: EvolinciteUser | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteUserEvolinciteCompany = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteUserEvolinciteCompany, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteUserID?: string | null;
  readonly EvolinciteUser: AsyncItem<EvolinciteUser | undefined>;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteUserEvolinciteCompany = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteUserEvolinciteCompany : LazyEvolinciteUserEvolinciteCompany

export declare const EvolinciteUserEvolinciteCompany: (new (init: ModelInit<EvolinciteUserEvolinciteCompany>) => EvolinciteUserEvolinciteCompany) & {
  copyOf(source: EvolinciteUserEvolinciteCompany, mutator: (draft: MutableModel<EvolinciteUserEvolinciteCompany>) => MutableModel<EvolinciteUserEvolinciteCompany> | void): EvolinciteUserEvolinciteCompany;
}

type EagerEvolinciteUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly nit?: string | null;
  readonly phone?: string | null;
  readonly picture?: string | null;
  readonly email?: string | null;
  readonly sub?: string | null;
  readonly meta?: string | null;
  readonly cv?: string | null;
  readonly contract?: string | null;
  readonly memos?: (string | null)[] | null;
  readonly personalMail?: string | null;
  readonly personalPhone?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly EvolinciteUserEvolinciteCompanies?: (EvolinciteUserEvolinciteCompany | null)[] | null;
  readonly EvolinciteActivitiesOwner?: (EvolinciteActivity | null)[] | null;
  readonly EvolinciteActivitiesParticipants?: (EvolinciteActivityEvolinciteUser | null)[] | null;
  readonly EvolinciteRooms?: (EvolinciteRoomEvolinciteUser | null)[] | null;
  readonly EvolinciteUserDepartments?: (EvolinciteUserDepartment | null)[] | null;
  readonly EvolinciteCrmNegotiationsOwner?: (EvolinciteCrmNegotiation | null)[] | null;
  readonly EvolinciteCrmNegotiationsReferrer?: (EvolinciteCrmNegotiation | null)[] | null;
  readonly EvolinciteCrmNegotiationsSeller?: (EvolinciteCrmNegotiation | null)[] | null;
  readonly EvolincitePaymentsUserSeller?: (EvolinciteWalletPayment | null)[] | null;
  readonly EvolincitePaymentsUserReferrer?: (EvolinciteWalletPayment | null)[] | null;
  readonly EvolinciteNotifications?: (EvolinciteNotification | null)[] | null;
  readonly EvolinciteMessages?: (EvolinciteMessage | null)[] | null;
  readonly EvolinciteCrmNegotiationLogs?: (EvolinciteCrmNegotiationLog | null)[] | null;
  readonly EvolinciteComments?: (EvolinciteComment | null)[] | null;
  readonly EvolincitePermissions?: (EvolincitePermissions | null)[] | null;
  readonly EvolinciteUserSettings?: (EvolinciteUserSettings | null)[] | null;
  readonly EvolinciteCrmNegotiationsObserver?: (EvolinciteUserEvolinciteCrmNegotiation | null)[] | null;
  readonly EvolinciteUserEvolinciteJobTitle?: (EvolinciteUserEvolinciteJobTitle | null)[] | null;
  readonly EvolinciteWalletPaymentLogs?: (EvolinciteWalletPaymentLog | null)[] | null;
  readonly EvolinciteExpenseLogs?: (EvolinciteExpenseLog | null)[] | null;
  readonly EvolinciteExpenses?: (EvolinciteExpense | null)[] | null;
  readonly EvolinciteTicket?: (EvolinciteTicket | null)[] | null;
  readonly EvolinciteTicketLogs?: (EvolinciteTicketLog | null)[] | null;
  readonly EvolinciteFiles?: (EvolinciteFile | null)[] | null;
  readonly EvolinciteFolders?: (EvolinciteFolder | null)[] | null;
  readonly EvolinciteArticles?: (EvolinciteArticle | null)[] | null;
  readonly EvolinciteArticleComments?: (EvolinciteArticleComment | null)[] | null;
  readonly EvolinciteFoldersOwner?: (EvolinciteFolder | null)[] | null;
  readonly EvolinciteFormConfigurations?: (EvolinciteFormConfiguration | null)[] | null;
  readonly EvolinciteFormAnswers?: (EvolinciteFormAnswer | null)[] | null;
  readonly EvolinciteMails?: (EvolinciteMail | null)[] | null;
  readonly EvolinciteEmployeeObservations?: (EvolinciteEmployeeObservation | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly nit?: string | null;
  readonly phone?: string | null;
  readonly picture?: string | null;
  readonly email?: string | null;
  readonly sub?: string | null;
  readonly meta?: string | null;
  readonly cv?: string | null;
  readonly contract?: string | null;
  readonly memos?: (string | null)[] | null;
  readonly personalMail?: string | null;
  readonly personalPhone?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly EvolinciteUserEvolinciteCompanies: AsyncCollection<EvolinciteUserEvolinciteCompany>;
  readonly EvolinciteActivitiesOwner: AsyncCollection<EvolinciteActivity>;
  readonly EvolinciteActivitiesParticipants: AsyncCollection<EvolinciteActivityEvolinciteUser>;
  readonly EvolinciteRooms: AsyncCollection<EvolinciteRoomEvolinciteUser>;
  readonly EvolinciteUserDepartments: AsyncCollection<EvolinciteUserDepartment>;
  readonly EvolinciteCrmNegotiationsOwner: AsyncCollection<EvolinciteCrmNegotiation>;
  readonly EvolinciteCrmNegotiationsReferrer: AsyncCollection<EvolinciteCrmNegotiation>;
  readonly EvolinciteCrmNegotiationsSeller: AsyncCollection<EvolinciteCrmNegotiation>;
  readonly EvolincitePaymentsUserSeller: AsyncCollection<EvolinciteWalletPayment>;
  readonly EvolincitePaymentsUserReferrer: AsyncCollection<EvolinciteWalletPayment>;
  readonly EvolinciteNotifications: AsyncCollection<EvolinciteNotification>;
  readonly EvolinciteMessages: AsyncCollection<EvolinciteMessage>;
  readonly EvolinciteCrmNegotiationLogs: AsyncCollection<EvolinciteCrmNegotiationLog>;
  readonly EvolinciteComments: AsyncCollection<EvolinciteComment>;
  readonly EvolincitePermissions: AsyncCollection<EvolincitePermissions>;
  readonly EvolinciteUserSettings: AsyncCollection<EvolinciteUserSettings>;
  readonly EvolinciteCrmNegotiationsObserver: AsyncCollection<EvolinciteUserEvolinciteCrmNegotiation>;
  readonly EvolinciteUserEvolinciteJobTitle: AsyncCollection<EvolinciteUserEvolinciteJobTitle>;
  readonly EvolinciteWalletPaymentLogs: AsyncCollection<EvolinciteWalletPaymentLog>;
  readonly EvolinciteExpenseLogs: AsyncCollection<EvolinciteExpenseLog>;
  readonly EvolinciteExpenses: AsyncCollection<EvolinciteExpense>;
  readonly EvolinciteTicket: AsyncCollection<EvolinciteTicket>;
  readonly EvolinciteTicketLogs: AsyncCollection<EvolinciteTicketLog>;
  readonly EvolinciteFiles: AsyncCollection<EvolinciteFile>;
  readonly EvolinciteFolders: AsyncCollection<EvolinciteFolder>;
  readonly EvolinciteArticles: AsyncCollection<EvolinciteArticle>;
  readonly EvolinciteArticleComments: AsyncCollection<EvolinciteArticleComment>;
  readonly EvolinciteFoldersOwner: AsyncCollection<EvolinciteFolder>;
  readonly EvolinciteFormConfigurations: AsyncCollection<EvolinciteFormConfiguration>;
  readonly EvolinciteFormAnswers: AsyncCollection<EvolinciteFormAnswer>;
  readonly EvolinciteMails: AsyncCollection<EvolinciteMail>;
  readonly EvolinciteEmployeeObservations: AsyncCollection<EvolinciteEmployeeObservation>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteUser = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteUser : LazyEvolinciteUser

export declare const EvolinciteUser: (new (init: ModelInit<EvolinciteUser>) => EvolinciteUser) & {
  copyOf(source: EvolinciteUser, mutator: (draft: MutableModel<EvolinciteUser>) => MutableModel<EvolinciteUser> | void): EvolinciteUser;
}

type EagerEvolinciteCompany = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteCompany, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly nit?: string | null;
  readonly picture?: string | null;
  readonly meta?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly EvolinciteUserEvolinciteCompanies?: (EvolinciteUserEvolinciteCompany | null)[] | null;
  readonly evolinciteSubscriptionID?: string | null;
  readonly EvolinciteSubscription?: EvolinciteSubscription | null;
  readonly EvolinciteWalletPayments?: (EvolinciteWalletPayment | null)[] | null;
  readonly EvolinciteCrmNegotiationFields?: (EvolinciteCrmNegotiationField | null)[] | null;
  readonly EvolinciteCrmNegotiationSections?: (EvolinciteCrmNegotiationSection | null)[] | null;
  readonly EvolinciteCrmAutomations?: (EvolinciteCrmAutomation | null)[] | null;
  readonly EvolinciteUserDepartments?: (EvolinciteUserDepartment | null)[] | null;
  readonly EvolinciteDepartments?: (EvolinciteDepartment | null)[] | null;
  readonly EvolinciteCustomers?: (EvolinciteCustomer | null)[] | null;
  readonly EvolinciteCrmPipelines?: (EvolinciteCrmPipeline | null)[] | null;
  readonly EvolinciteCrmStates?: (EvolinciteCrmState | null)[] | null;
  readonly EvolinciteCrmNegotiations?: (EvolinciteCrmNegotiation | null)[] | null;
  readonly EvolinciteJobTitles?: (EvolinciteJobTitle | null)[] | null;
  readonly EvolinciteNotifications?: (EvolinciteNotification | null)[] | null;
  readonly EvolinciteEmailTemplates?: (EvolinciteEmailTemplate | null)[] | null;
  readonly EvolinciteEmails?: (EvolinciteEmail | null)[] | null;
  readonly EvolinciteMessages?: (EvolinciteMessage | null)[] | null;
  readonly EvolinciteCrmNegotiationLogs?: (EvolinciteCrmNegotiationLog | null)[] | null;
  readonly EvolinciteActivities?: (EvolinciteActivity | null)[] | null;
  readonly EvolincitePermissions?: (EvolincitePermissions | null)[] | null;
  readonly EvolinciteRoles?: (EvolinciteRol | null)[] | null;
  readonly EvolinciteUserSettings?: (EvolinciteUserSettings | null)[] | null;
  readonly EvolinciteRooms?: (EvolinciteRoom | null)[] | null;
  readonly EvolinciteUserEvolinciteJobTitle?: (EvolinciteUserEvolinciteJobTitle | null)[] | null;
  readonly EvolinciteExpenseTypes?: (EvolinciteExpenseType | null)[] | null;
  readonly EvolinciteExpenses?: (EvolinciteExpense | null)[] | null;
  readonly EvolinciteProcessTypes?: (EvolinciteProcessType | null)[] | null;
  readonly EvolinciteGoal?: (EvolinciteGoal | null)[] | null;
  readonly EvolinciteWalletPaymentLogs?: (EvolinciteWalletPaymentLog | null)[] | null;
  readonly EvolinciteExpenseLogs?: (EvolinciteExpenseLog | null)[] | null;
  readonly EvolinciteTicketOwner?: (EvolinciteTicket | null)[] | null;
  readonly EvolinciteTicketOrigin?: (EvolinciteTicket | null)[] | null;
  readonly EvolinciteTicketLogs?: (EvolinciteTicketLog | null)[] | null;
  readonly EvolinciteFiles?: (EvolinciteFile | null)[] | null;
  readonly EvolinciteFolders?: (EvolinciteFolder | null)[] | null;
  readonly EvolinciteArticles?: (EvolinciteArticle | null)[] | null;
  readonly EvolinciteFormConfigurations?: (EvolinciteFormConfiguration | null)[] | null;
  readonly EvolincitePaymentAutomations?: (EvolincitePaymentAutomation | null)[] | null;
  readonly EvolinciteMails?: (EvolinciteMail | null)[] | null;
  readonly EvolinciteMailTemplates?: (EvolinciteMailTemplate | null)[] | null;
  readonly EvolinciteCompanySubscriptions?: (EvolinciteCompanySubscription | null)[] | null;
  readonly EvolinciteFormAnswers?: (EvolinciteFormAnswer | null)[] | null;
  readonly EvolinciteEmployeeObservations?: (EvolinciteEmployeeObservation | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteCompany = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteCompany, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly nit?: string | null;
  readonly picture?: string | null;
  readonly meta?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly EvolinciteUserEvolinciteCompanies: AsyncCollection<EvolinciteUserEvolinciteCompany>;
  readonly evolinciteSubscriptionID?: string | null;
  readonly EvolinciteSubscription: AsyncItem<EvolinciteSubscription | undefined>;
  readonly EvolinciteWalletPayments: AsyncCollection<EvolinciteWalletPayment>;
  readonly EvolinciteCrmNegotiationFields: AsyncCollection<EvolinciteCrmNegotiationField>;
  readonly EvolinciteCrmNegotiationSections: AsyncCollection<EvolinciteCrmNegotiationSection>;
  readonly EvolinciteCrmAutomations: AsyncCollection<EvolinciteCrmAutomation>;
  readonly EvolinciteUserDepartments: AsyncCollection<EvolinciteUserDepartment>;
  readonly EvolinciteDepartments: AsyncCollection<EvolinciteDepartment>;
  readonly EvolinciteCustomers: AsyncCollection<EvolinciteCustomer>;
  readonly EvolinciteCrmPipelines: AsyncCollection<EvolinciteCrmPipeline>;
  readonly EvolinciteCrmStates: AsyncCollection<EvolinciteCrmState>;
  readonly EvolinciteCrmNegotiations: AsyncCollection<EvolinciteCrmNegotiation>;
  readonly EvolinciteJobTitles: AsyncCollection<EvolinciteJobTitle>;
  readonly EvolinciteNotifications: AsyncCollection<EvolinciteNotification>;
  readonly EvolinciteEmailTemplates: AsyncCollection<EvolinciteEmailTemplate>;
  readonly EvolinciteEmails: AsyncCollection<EvolinciteEmail>;
  readonly EvolinciteMessages: AsyncCollection<EvolinciteMessage>;
  readonly EvolinciteCrmNegotiationLogs: AsyncCollection<EvolinciteCrmNegotiationLog>;
  readonly EvolinciteActivities: AsyncCollection<EvolinciteActivity>;
  readonly EvolincitePermissions: AsyncCollection<EvolincitePermissions>;
  readonly EvolinciteRoles: AsyncCollection<EvolinciteRol>;
  readonly EvolinciteUserSettings: AsyncCollection<EvolinciteUserSettings>;
  readonly EvolinciteRooms: AsyncCollection<EvolinciteRoom>;
  readonly EvolinciteUserEvolinciteJobTitle: AsyncCollection<EvolinciteUserEvolinciteJobTitle>;
  readonly EvolinciteExpenseTypes: AsyncCollection<EvolinciteExpenseType>;
  readonly EvolinciteExpenses: AsyncCollection<EvolinciteExpense>;
  readonly EvolinciteProcessTypes: AsyncCollection<EvolinciteProcessType>;
  readonly EvolinciteGoal: AsyncCollection<EvolinciteGoal>;
  readonly EvolinciteWalletPaymentLogs: AsyncCollection<EvolinciteWalletPaymentLog>;
  readonly EvolinciteExpenseLogs: AsyncCollection<EvolinciteExpenseLog>;
  readonly EvolinciteTicketOwner: AsyncCollection<EvolinciteTicket>;
  readonly EvolinciteTicketOrigin: AsyncCollection<EvolinciteTicket>;
  readonly EvolinciteTicketLogs: AsyncCollection<EvolinciteTicketLog>;
  readonly EvolinciteFiles: AsyncCollection<EvolinciteFile>;
  readonly EvolinciteFolders: AsyncCollection<EvolinciteFolder>;
  readonly EvolinciteArticles: AsyncCollection<EvolinciteArticle>;
  readonly EvolinciteFormConfigurations: AsyncCollection<EvolinciteFormConfiguration>;
  readonly EvolincitePaymentAutomations: AsyncCollection<EvolincitePaymentAutomation>;
  readonly EvolinciteMails: AsyncCollection<EvolinciteMail>;
  readonly EvolinciteMailTemplates: AsyncCollection<EvolinciteMailTemplate>;
  readonly EvolinciteCompanySubscriptions: AsyncCollection<EvolinciteCompanySubscription>;
  readonly EvolinciteFormAnswers: AsyncCollection<EvolinciteFormAnswer>;
  readonly EvolinciteEmployeeObservations: AsyncCollection<EvolinciteEmployeeObservation>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteCompany = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteCompany : LazyEvolinciteCompany

export declare const EvolinciteCompany: (new (init: ModelInit<EvolinciteCompany>) => EvolinciteCompany) & {
  copyOf(source: EvolinciteCompany, mutator: (draft: MutableModel<EvolinciteCompany>) => MutableModel<EvolinciteCompany> | void): EvolinciteCompany;
}

type EagerEvolinciteGoal = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteGoal, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly EvolinciteCrmNegotiationsInitial?: (EvolinciteCrmNegotiation | null)[] | null;
  readonly EvolinciteCrmNegotiationsFinal?: (EvolinciteCrmNegotiation | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteGoal = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteGoal, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly EvolinciteCrmNegotiationsInitial: AsyncCollection<EvolinciteCrmNegotiation>;
  readonly EvolinciteCrmNegotiationsFinal: AsyncCollection<EvolinciteCrmNegotiation>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteGoal = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteGoal : LazyEvolinciteGoal

export declare const EvolinciteGoal: (new (init: ModelInit<EvolinciteGoal>) => EvolinciteGoal) & {
  copyOf(source: EvolinciteGoal, mutator: (draft: MutableModel<EvolinciteGoal>) => MutableModel<EvolinciteGoal> | void): EvolinciteGoal;
}

type EagerEvolinciteWalletPaymentLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteWalletPaymentLog, 'id'>;
  };
  readonly id: string;
  readonly log?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteUserID?: string | null;
  readonly evolinciteCompanyID?: string | null;
  readonly evolinciteWalletPaymentID?: string | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly EvolinciteUser?: EvolinciteUser | null;
  readonly EvolinciteWalletPayment?: EvolinciteWalletPayment | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteWalletPaymentLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteWalletPaymentLog, 'id'>;
  };
  readonly id: string;
  readonly log?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteUserID?: string | null;
  readonly evolinciteCompanyID?: string | null;
  readonly evolinciteWalletPaymentID?: string | null;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly EvolinciteUser: AsyncItem<EvolinciteUser | undefined>;
  readonly EvolinciteWalletPayment: AsyncItem<EvolinciteWalletPayment | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteWalletPaymentLog = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteWalletPaymentLog : LazyEvolinciteWalletPaymentLog

export declare const EvolinciteWalletPaymentLog: (new (init: ModelInit<EvolinciteWalletPaymentLog>) => EvolinciteWalletPaymentLog) & {
  copyOf(source: EvolinciteWalletPaymentLog, mutator: (draft: MutableModel<EvolinciteWalletPaymentLog>) => MutableModel<EvolinciteWalletPaymentLog> | void): EvolinciteWalletPaymentLog;
}

type EagerEvolinciteExpenseLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteExpenseLog, 'id'>;
  };
  readonly id: string;
  readonly log?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteUserID?: string | null;
  readonly evolinciteCompanyID?: string | null;
  readonly evolinciteExpenseID?: string | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly EvolinciteUser?: EvolinciteUser | null;
  readonly EvolinciteExpense?: EvolinciteExpense | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteExpenseLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteExpenseLog, 'id'>;
  };
  readonly id: string;
  readonly log?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteUserID?: string | null;
  readonly evolinciteCompanyID?: string | null;
  readonly evolinciteExpenseID?: string | null;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly EvolinciteUser: AsyncItem<EvolinciteUser | undefined>;
  readonly EvolinciteExpense: AsyncItem<EvolinciteExpense | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteExpenseLog = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteExpenseLog : LazyEvolinciteExpenseLog

export declare const EvolinciteExpenseLog: (new (init: ModelInit<EvolinciteExpenseLog>) => EvolinciteExpenseLog) & {
  copyOf(source: EvolinciteExpenseLog, mutator: (draft: MutableModel<EvolinciteExpenseLog>) => MutableModel<EvolinciteExpenseLog> | void): EvolinciteExpenseLog;
}

type EagerEvolinciteTicket = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteTicket, 'id'>;
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly documents?: (string | null)[] | null;
  readonly meta?: string | null;
  readonly ticketState?: EvolinciteTicketState | keyof typeof EvolinciteTicketState | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteUserID?: string | null;
  readonly evolinciteCompanyOwnerID?: string | null;
  readonly evolinciteCompanyOriginID?: string | null;
  readonly EvolinciteCompanyOwner?: EvolinciteCompany | null;
  readonly EvolinciteCompanyOrigin?: EvolinciteCompany | null;
  readonly EvolinciteUser?: EvolinciteUser | null;
  readonly EvolinciteTicketLogs?: (EvolinciteTicketLog | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteTicket = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteTicket, 'id'>;
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly documents?: (string | null)[] | null;
  readonly meta?: string | null;
  readonly ticketState?: EvolinciteTicketState | keyof typeof EvolinciteTicketState | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteUserID?: string | null;
  readonly evolinciteCompanyOwnerID?: string | null;
  readonly evolinciteCompanyOriginID?: string | null;
  readonly EvolinciteCompanyOwner: AsyncItem<EvolinciteCompany | undefined>;
  readonly EvolinciteCompanyOrigin: AsyncItem<EvolinciteCompany | undefined>;
  readonly EvolinciteUser: AsyncItem<EvolinciteUser | undefined>;
  readonly EvolinciteTicketLogs: AsyncCollection<EvolinciteTicketLog>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteTicket = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteTicket : LazyEvolinciteTicket

export declare const EvolinciteTicket: (new (init: ModelInit<EvolinciteTicket>) => EvolinciteTicket) & {
  copyOf(source: EvolinciteTicket, mutator: (draft: MutableModel<EvolinciteTicket>) => MutableModel<EvolinciteTicket> | void): EvolinciteTicket;
}

type EagerEvolinciteTicketLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteTicketLog, 'id'>;
  };
  readonly id: string;
  readonly log?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteUserID?: string | null;
  readonly evolinciteCompanyID?: string | null;
  readonly evolinciteTicketID?: string | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly EvolinciteUser?: EvolinciteUser | null;
  readonly EvolinciteTicket?: EvolinciteTicket | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteTicketLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteTicketLog, 'id'>;
  };
  readonly id: string;
  readonly log?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteUserID?: string | null;
  readonly evolinciteCompanyID?: string | null;
  readonly evolinciteTicketID?: string | null;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly EvolinciteUser: AsyncItem<EvolinciteUser | undefined>;
  readonly EvolinciteTicket: AsyncItem<EvolinciteTicket | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteTicketLog = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteTicketLog : LazyEvolinciteTicketLog

export declare const EvolinciteTicketLog: (new (init: ModelInit<EvolinciteTicketLog>) => EvolinciteTicketLog) & {
  copyOf(source: EvolinciteTicketLog, mutator: (draft: MutableModel<EvolinciteTicketLog>) => MutableModel<EvolinciteTicketLog> | void): EvolinciteTicketLog;
}

type EagerEvolinciteFile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteFile, 'id'>;
  };
  readonly id: string;
  readonly name?: string | null;
  readonly size?: number | null;
  readonly meta?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteUserID?: string | null;
  readonly evolinciteCompanyID?: string | null;
  readonly evolinciteFolderID?: string | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly EvolinciteUser?: EvolinciteUser | null;
  readonly EvolinciteFolder?: EvolinciteFolder | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteFile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteFile, 'id'>;
  };
  readonly id: string;
  readonly name?: string | null;
  readonly size?: number | null;
  readonly meta?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteUserID?: string | null;
  readonly evolinciteCompanyID?: string | null;
  readonly evolinciteFolderID?: string | null;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly EvolinciteUser: AsyncItem<EvolinciteUser | undefined>;
  readonly EvolinciteFolder: AsyncItem<EvolinciteFolder | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteFile = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteFile : LazyEvolinciteFile

export declare const EvolinciteFile: (new (init: ModelInit<EvolinciteFile>) => EvolinciteFile) & {
  copyOf(source: EvolinciteFile, mutator: (draft: MutableModel<EvolinciteFile>) => MutableModel<EvolinciteFile> | void): EvolinciteFile;
}

type EagerEvolinciteFolder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteFolder, 'id'>;
  };
  readonly id: string;
  readonly parent?: string | null;
  readonly name?: string | null;
  readonly meta?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteUserID?: string | null;
  readonly evolinciteUserOwnerID?: string | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly EvolinciteUser?: EvolinciteUser | null;
  readonly EvolinciteUserOwner?: EvolinciteUser | null;
  readonly EvolinciteFiles?: (EvolinciteFile | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteFolder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteFolder, 'id'>;
  };
  readonly id: string;
  readonly parent?: string | null;
  readonly name?: string | null;
  readonly meta?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteUserID?: string | null;
  readonly evolinciteUserOwnerID?: string | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly EvolinciteUser: AsyncItem<EvolinciteUser | undefined>;
  readonly EvolinciteUserOwner: AsyncItem<EvolinciteUser | undefined>;
  readonly EvolinciteFiles: AsyncCollection<EvolinciteFile>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteFolder = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteFolder : LazyEvolinciteFolder

export declare const EvolinciteFolder: (new (init: ModelInit<EvolinciteFolder>) => EvolinciteFolder) & {
  copyOf(source: EvolinciteFolder, mutator: (draft: MutableModel<EvolinciteFolder>) => MutableModel<EvolinciteFolder> | void): EvolinciteFolder;
}

type EagerEvolinciteArticle = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteArticle, 'id'>;
  };
  readonly id: string;
  readonly front?: string | null;
  readonly cover?: (string | null)[] | null;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly articleState?: EvolinciteArticleStates | keyof typeof EvolinciteArticleStates | null;
  readonly visibility?: (string | null)[] | null;
  readonly publicationDate?: string | null;
  readonly meta?: string | null;
  readonly files?: (string | null)[] | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteUserID?: string | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly EvolinciteUser?: EvolinciteUser | null;
  readonly EvolinciteArticleComments?: (EvolinciteArticleComment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteArticle = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteArticle, 'id'>;
  };
  readonly id: string;
  readonly front?: string | null;
  readonly cover?: (string | null)[] | null;
  readonly title?: string | null;
  readonly content?: string | null;
  readonly articleState?: EvolinciteArticleStates | keyof typeof EvolinciteArticleStates | null;
  readonly visibility?: (string | null)[] | null;
  readonly publicationDate?: string | null;
  readonly meta?: string | null;
  readonly files?: (string | null)[] | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteUserID?: string | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly EvolinciteUser: AsyncItem<EvolinciteUser | undefined>;
  readonly EvolinciteArticleComments: AsyncCollection<EvolinciteArticleComment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteArticle = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteArticle : LazyEvolinciteArticle

export declare const EvolinciteArticle: (new (init: ModelInit<EvolinciteArticle>) => EvolinciteArticle) & {
  copyOf(source: EvolinciteArticle, mutator: (draft: MutableModel<EvolinciteArticle>) => MutableModel<EvolinciteArticle> | void): EvolinciteArticle;
}

type EagerEvolinciteArticleComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteArticleComment, 'id'>;
  };
  readonly id: string;
  readonly content?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteUserID?: string | null;
  readonly EvolinciteUser?: EvolinciteUser | null;
  readonly evolinciteArticleID?: string | null;
  readonly EvolinciteArticle?: EvolinciteArticle | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteArticleComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteArticleComment, 'id'>;
  };
  readonly id: string;
  readonly content?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteUserID?: string | null;
  readonly EvolinciteUser: AsyncItem<EvolinciteUser | undefined>;
  readonly evolinciteArticleID?: string | null;
  readonly EvolinciteArticle: AsyncItem<EvolinciteArticle | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteArticleComment = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteArticleComment : LazyEvolinciteArticleComment

export declare const EvolinciteArticleComment: (new (init: ModelInit<EvolinciteArticleComment>) => EvolinciteArticleComment) & {
  copyOf(source: EvolinciteArticleComment, mutator: (draft: MutableModel<EvolinciteArticleComment>) => MutableModel<EvolinciteArticleComment> | void): EvolinciteArticleComment;
}

type EagerEvolinciteFormConfiguration = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteFormConfiguration, 'id'>;
  };
  readonly id: string;
  readonly key?: string | null;
  readonly name?: string | null;
  readonly config?: string | null;
  readonly meta?: string | null;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly observations?: string | null;
  readonly front?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteUserID?: string | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly EvolinciteUser?: EvolinciteUser | null;
  readonly EvolinciteFormAnswers?: (EvolinciteFormAnswer | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteFormConfiguration = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteFormConfiguration, 'id'>;
  };
  readonly id: string;
  readonly key?: string | null;
  readonly name?: string | null;
  readonly config?: string | null;
  readonly meta?: string | null;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly observations?: string | null;
  readonly front?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteUserID?: string | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly EvolinciteUser: AsyncItem<EvolinciteUser | undefined>;
  readonly EvolinciteFormAnswers: AsyncCollection<EvolinciteFormAnswer>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteFormConfiguration = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteFormConfiguration : LazyEvolinciteFormConfiguration

export declare const EvolinciteFormConfiguration: (new (init: ModelInit<EvolinciteFormConfiguration>) => EvolinciteFormConfiguration) & {
  copyOf(source: EvolinciteFormConfiguration, mutator: (draft: MutableModel<EvolinciteFormConfiguration>) => MutableModel<EvolinciteFormConfiguration> | void): EvolinciteFormConfiguration;
}

type EagerEvolinciteFormAnswer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteFormAnswer, 'id'>;
  };
  readonly id: string;
  readonly meta?: string | null;
  readonly answerState?: EvolinciteSurveyAnswerState | keyof typeof EvolinciteSurveyAnswerState | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteUserID?: string | null;
  readonly evolinciteFormConfigurationID?: string | null;
  readonly EvolinciteFormConfiguration?: EvolinciteFormConfiguration | null;
  readonly EvolinciteUser?: EvolinciteUser | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteFormAnswer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteFormAnswer, 'id'>;
  };
  readonly id: string;
  readonly meta?: string | null;
  readonly answerState?: EvolinciteSurveyAnswerState | keyof typeof EvolinciteSurveyAnswerState | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteUserID?: string | null;
  readonly evolinciteFormConfigurationID?: string | null;
  readonly EvolinciteFormConfiguration: AsyncItem<EvolinciteFormConfiguration | undefined>;
  readonly EvolinciteUser: AsyncItem<EvolinciteUser | undefined>;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteFormAnswer = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteFormAnswer : LazyEvolinciteFormAnswer

export declare const EvolinciteFormAnswer: (new (init: ModelInit<EvolinciteFormAnswer>) => EvolinciteFormAnswer) & {
  copyOf(source: EvolinciteFormAnswer, mutator: (draft: MutableModel<EvolinciteFormAnswer>) => MutableModel<EvolinciteFormAnswer> | void): EvolinciteFormAnswer;
}

type EagerEvolincitePaymentAutomation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolincitePaymentAutomation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly setting?: string | null;
  readonly order?: number | null;
  readonly repeat?: boolean | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolincitePaymentAutomation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolincitePaymentAutomation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly setting?: string | null;
  readonly order?: number | null;
  readonly repeat?: boolean | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolincitePaymentAutomation = LazyLoading extends LazyLoadingDisabled ? EagerEvolincitePaymentAutomation : LazyEvolincitePaymentAutomation

export declare const EvolincitePaymentAutomation: (new (init: ModelInit<EvolincitePaymentAutomation>) => EvolincitePaymentAutomation) & {
  copyOf(source: EvolincitePaymentAutomation, mutator: (draft: MutableModel<EvolincitePaymentAutomation>) => MutableModel<EvolincitePaymentAutomation> | void): EvolincitePaymentAutomation;
}

type EagerEvolinciteMail = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteMail, 'id'>;
  };
  readonly id: string;
  readonly destinations?: (string | null)[] | null;
  readonly subject?: string | null;
  readonly content?: string | null;
  readonly submissionStatus?: EvolinciteMailStates | keyof typeof EvolinciteMailStates | null;
  readonly setting?: string | null;
  readonly response?: string | null;
  readonly files?: (string | null)[] | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly evolinciteUserID?: string | null;
  readonly EvolinciteUser?: EvolinciteUser | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteMail = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteMail, 'id'>;
  };
  readonly id: string;
  readonly destinations?: (string | null)[] | null;
  readonly subject?: string | null;
  readonly content?: string | null;
  readonly submissionStatus?: EvolinciteMailStates | keyof typeof EvolinciteMailStates | null;
  readonly setting?: string | null;
  readonly response?: string | null;
  readonly files?: (string | null)[] | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly evolinciteUserID?: string | null;
  readonly EvolinciteUser: AsyncItem<EvolinciteUser | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteMail = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteMail : LazyEvolinciteMail

export declare const EvolinciteMail: (new (init: ModelInit<EvolinciteMail>) => EvolinciteMail) & {
  copyOf(source: EvolinciteMail, mutator: (draft: MutableModel<EvolinciteMail>) => MutableModel<EvolinciteMail> | void): EvolinciteMail;
}

type EagerEvolinciteMailConfiguration = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteMailConfiguration, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly SMTP?: string | null;
  readonly email?: string | null;
  readonly password?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly evolinciteUserID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteMailConfiguration = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteMailConfiguration, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly SMTP?: string | null;
  readonly email?: string | null;
  readonly password?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly evolinciteUserID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteMailConfiguration = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteMailConfiguration : LazyEvolinciteMailConfiguration

export declare const EvolinciteMailConfiguration: (new (init: ModelInit<EvolinciteMailConfiguration>) => EvolinciteMailConfiguration) & {
  copyOf(source: EvolinciteMailConfiguration, mutator: (draft: MutableModel<EvolinciteMailConfiguration>) => MutableModel<EvolinciteMailConfiguration> | void): EvolinciteMailConfiguration;
}

type EagerEvolinciteMailTemplate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteMailTemplate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly destinations?: (string | null)[] | null;
  readonly subject?: string | null;
  readonly content?: string | null;
  readonly files?: (string | null)[] | null;
  readonly transmitter?: string | null;
  readonly meta?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteMailTemplate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteMailTemplate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly destinations?: (string | null)[] | null;
  readonly subject?: string | null;
  readonly content?: string | null;
  readonly files?: (string | null)[] | null;
  readonly transmitter?: string | null;
  readonly meta?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteMailTemplate = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteMailTemplate : LazyEvolinciteMailTemplate

export declare const EvolinciteMailTemplate: (new (init: ModelInit<EvolinciteMailTemplate>) => EvolinciteMailTemplate) & {
  copyOf(source: EvolinciteMailTemplate, mutator: (draft: MutableModel<EvolinciteMailTemplate>) => MutableModel<EvolinciteMailTemplate> | void): EvolinciteMailTemplate;
}

type EagerEvolinciteMailTemplateLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteMailTemplateLog, 'id'>;
  };
  readonly id: string;
  readonly key?: string | null;
  readonly log?: string | null;
  readonly date?: string | null;
  readonly previousLog?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly evolinciteUserID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteMailTemplateLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteMailTemplateLog, 'id'>;
  };
  readonly id: string;
  readonly key?: string | null;
  readonly log?: string | null;
  readonly date?: string | null;
  readonly previousLog?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly evolinciteUserID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteMailTemplateLog = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteMailTemplateLog : LazyEvolinciteMailTemplateLog

export declare const EvolinciteMailTemplateLog: (new (init: ModelInit<EvolinciteMailTemplateLog>) => EvolinciteMailTemplateLog) & {
  copyOf(source: EvolinciteMailTemplateLog, mutator: (draft: MutableModel<EvolinciteMailTemplateLog>) => MutableModel<EvolinciteMailTemplateLog> | void): EvolinciteMailTemplateLog;
}

type EagerEvolincitePackage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolincitePackage, 'id'>;
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly goal?: string | null;
  readonly duration?: number | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly EvolinciteFunctionalities?: (EvolinciteFunctionality | null)[] | null;
  readonly EvolinciteCompanySubscriptions?: (EvolinciteCompanySubscription | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolincitePackage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolincitePackage, 'id'>;
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly goal?: string | null;
  readonly duration?: number | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly EvolinciteFunctionalities: AsyncCollection<EvolinciteFunctionality>;
  readonly EvolinciteCompanySubscriptions: AsyncCollection<EvolinciteCompanySubscription>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolincitePackage = LazyLoading extends LazyLoadingDisabled ? EagerEvolincitePackage : LazyEvolincitePackage

export declare const EvolincitePackage: (new (init: ModelInit<EvolincitePackage>) => EvolincitePackage) & {
  copyOf(source: EvolincitePackage, mutator: (draft: MutableModel<EvolincitePackage>) => MutableModel<EvolincitePackage> | void): EvolincitePackage;
}

type EagerEvolinciteCompanySubscription = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteCompanySubscription, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly price?: number | null;
  readonly dateInitial?: string | null;
  readonly dateFinal?: string | null;
  readonly activatorUser?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolincitePackageID?: string | null;
  readonly EvolincitePackage?: EvolincitePackage | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteCompanySubscription = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteCompanySubscription, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly price?: number | null;
  readonly dateInitial?: string | null;
  readonly dateFinal?: string | null;
  readonly activatorUser?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolincitePackageID?: string | null;
  readonly EvolincitePackage: AsyncItem<EvolincitePackage | undefined>;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteCompanySubscription = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteCompanySubscription : LazyEvolinciteCompanySubscription

export declare const EvolinciteCompanySubscription: (new (init: ModelInit<EvolinciteCompanySubscription>) => EvolinciteCompanySubscription) & {
  copyOf(source: EvolinciteCompanySubscription, mutator: (draft: MutableModel<EvolinciteCompanySubscription>) => MutableModel<EvolinciteCompanySubscription> | void): EvolinciteCompanySubscription;
}

type EagerEvolinciteEmployeeObservation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteEmployeeObservation, 'id'>;
  };
  readonly id: string;
  readonly name?: string | null;
  readonly content?: string | null;
  readonly isPublic?: boolean | null;
  readonly meta?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany?: EvolinciteCompany | null;
  readonly evolinciteUserID?: string | null;
  readonly EvolinciteUser?: EvolinciteUser | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteEmployeeObservation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteEmployeeObservation, 'id'>;
  };
  readonly id: string;
  readonly name?: string | null;
  readonly content?: string | null;
  readonly isPublic?: boolean | null;
  readonly meta?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly EvolinciteCompany: AsyncItem<EvolinciteCompany | undefined>;
  readonly evolinciteUserID?: string | null;
  readonly EvolinciteUser: AsyncItem<EvolinciteUser | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteEmployeeObservation = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteEmployeeObservation : LazyEvolinciteEmployeeObservation

export declare const EvolinciteEmployeeObservation: (new (init: ModelInit<EvolinciteEmployeeObservation>) => EvolinciteEmployeeObservation) & {
  copyOf(source: EvolinciteEmployeeObservation, mutator: (draft: MutableModel<EvolinciteEmployeeObservation>) => MutableModel<EvolinciteEmployeeObservation> | void): EvolinciteEmployeeObservation;
}

type EagerEvolinciteTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteTag, 'id'>;
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly evolinciteUserID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteTag = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteTag, 'id'>;
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly evolinciteUserID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteTag = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteTag : LazyEvolinciteTag

export declare const EvolinciteTag: (new (init: ModelInit<EvolinciteTag>) => EvolinciteTag) & {
  copyOf(source: EvolinciteTag, mutator: (draft: MutableModel<EvolinciteTag>) => MutableModel<EvolinciteTag> | void): EvolinciteTag;
}

type EagerEvolinciteMilestone = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteMilestone, 'id'>;
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly tags?: (string | null)[] | null;
  readonly type?: EvolunciteMilestoneType | keyof typeof EvolunciteMilestoneType | null;
  readonly config?: string | null;
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly employees?: (string | null)[] | null;
  readonly managers?: (string | null)[] | null;
  readonly isClosed?: boolean | null;
  readonly closingNotes?: string | null;
  readonly log?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly evolinciteUserID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteMilestone = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteMilestone, 'id'>;
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly tags?: (string | null)[] | null;
  readonly type?: EvolunciteMilestoneType | keyof typeof EvolunciteMilestoneType | null;
  readonly config?: string | null;
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly employees?: (string | null)[] | null;
  readonly managers?: (string | null)[] | null;
  readonly isClosed?: boolean | null;
  readonly closingNotes?: string | null;
  readonly log?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly evolinciteUserID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteMilestone = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteMilestone : LazyEvolinciteMilestone

export declare const EvolinciteMilestone: (new (init: ModelInit<EvolinciteMilestone>) => EvolinciteMilestone) & {
  copyOf(source: EvolinciteMilestone, mutator: (draft: MutableModel<EvolinciteMilestone>) => MutableModel<EvolinciteMilestone> | void): EvolinciteMilestone;
}

type EagerEvolinciteUserLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteUserLog, 'id'>;
  };
  readonly id: string;
  readonly log?: string | null;
  readonly functionality?: EvolinciteFunctionalities | keyof typeof EvolinciteFunctionalities | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly key?: string | null;
  readonly evolinciteCompanyID?: string | null;
  readonly evolinciteUserID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteUserLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteUserLog, 'id'>;
  };
  readonly id: string;
  readonly log?: string | null;
  readonly functionality?: EvolinciteFunctionalities | keyof typeof EvolinciteFunctionalities | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly key?: string | null;
  readonly evolinciteCompanyID?: string | null;
  readonly evolinciteUserID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteUserLog = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteUserLog : LazyEvolinciteUserLog

export declare const EvolinciteUserLog: (new (init: ModelInit<EvolinciteUserLog>) => EvolinciteUserLog) & {
  copyOf(source: EvolinciteUserLog, mutator: (draft: MutableModel<EvolinciteUserLog>) => MutableModel<EvolinciteUserLog> | void): EvolinciteUserLog;
}

type EagerEvolinciteUserTimeTracking = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteUserTimeTracking, 'id'>;
  };
  readonly id: string;
  readonly time?: number | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly evolinciteUserID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteUserTimeTracking = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteUserTimeTracking, 'id'>;
  };
  readonly id: string;
  readonly time?: number | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly evolinciteUserID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteUserTimeTracking = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteUserTimeTracking : LazyEvolinciteUserTimeTracking

export declare const EvolinciteUserTimeTracking: (new (init: ModelInit<EvolinciteUserTimeTracking>) => EvolinciteUserTimeTracking) & {
  copyOf(source: EvolinciteUserTimeTracking, mutator: (draft: MutableModel<EvolinciteUserTimeTracking>) => MutableModel<EvolinciteUserTimeTracking> | void): EvolinciteUserTimeTracking;
}

type EagerEvolinciteSchedule = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteSchedule, 'id'>;
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly config?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly evolinciteUserID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteSchedule = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteSchedule, 'id'>;
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly config?: string | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly evolinciteUserID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteSchedule = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteSchedule : LazyEvolinciteSchedule

export declare const EvolinciteSchedule: (new (init: ModelInit<EvolinciteSchedule>) => EvolinciteSchedule) & {
  copyOf(source: EvolinciteSchedule, mutator: (draft: MutableModel<EvolinciteSchedule>) => MutableModel<EvolinciteSchedule> | void): EvolinciteSchedule;
}

type EagerEvolinciteTemplateRequest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteTemplateRequest, 'id'>;
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly tags?: (string | null)[] | null;
  readonly questions?: string | null;
  readonly elementType?: EvolunciteRequestType | keyof typeof EvolunciteRequestType | null;
  readonly documents?: (string | null)[] | null;
  readonly meta?: string | null;
  readonly owners?: (string | null)[] | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly evolinciteUserID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteTemplateRequest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteTemplateRequest, 'id'>;
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly tags?: (string | null)[] | null;
  readonly questions?: string | null;
  readonly elementType?: EvolunciteRequestType | keyof typeof EvolunciteRequestType | null;
  readonly documents?: (string | null)[] | null;
  readonly meta?: string | null;
  readonly owners?: (string | null)[] | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly evolinciteUserID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteTemplateRequest = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteTemplateRequest : LazyEvolinciteTemplateRequest

export declare const EvolinciteTemplateRequest: (new (init: ModelInit<EvolinciteTemplateRequest>) => EvolinciteTemplateRequest) & {
  copyOf(source: EvolinciteTemplateRequest, mutator: (draft: MutableModel<EvolinciteTemplateRequest>) => MutableModel<EvolinciteTemplateRequest> | void): EvolinciteTemplateRequest;
}

type EagerEvolinciteRequest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteRequest, 'id'>;
  };
  readonly id: string;
  readonly templateID?: string | null;
  readonly answers?: string | null;
  readonly requester?: string | null;
  readonly priority?: EvolinciteRequestPriority | keyof typeof EvolinciteRequestPriority | null;
  readonly elementID?: (string | null)[] | null;
  readonly elementType?: EvolunciteRequestType | keyof typeof EvolunciteRequestType | null;
  readonly status?: EvolinciteRequestStatus | keyof typeof EvolinciteRequestStatus | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly evolinciteUserID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteRequest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteRequest, 'id'>;
  };
  readonly id: string;
  readonly templateID?: string | null;
  readonly answers?: string | null;
  readonly requester?: string | null;
  readonly priority?: EvolinciteRequestPriority | keyof typeof EvolinciteRequestPriority | null;
  readonly elementID?: (string | null)[] | null;
  readonly elementType?: EvolunciteRequestType | keyof typeof EvolunciteRequestType | null;
  readonly status?: EvolinciteRequestStatus | keyof typeof EvolinciteRequestStatus | null;
  readonly state?: EvolinciteStates | keyof typeof EvolinciteStates | null;
  readonly evolinciteCompanyID?: string | null;
  readonly evolinciteUserID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteRequest = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteRequest : LazyEvolinciteRequest

export declare const EvolinciteRequest: (new (init: ModelInit<EvolinciteRequest>) => EvolinciteRequest) & {
  copyOf(source: EvolinciteRequest, mutator: (draft: MutableModel<EvolinciteRequest>) => MutableModel<EvolinciteRequest> | void): EvolinciteRequest;
}

type EagerEvolinciteActivityEvolinciteUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteActivityEvolinciteUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly evolinciteActivityId?: string | null;
  readonly evolinciteUserId?: string | null;
  readonly evolinciteActivity: EvolinciteActivity;
  readonly evolinciteUser: EvolinciteUser;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteActivityEvolinciteUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteActivityEvolinciteUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly evolinciteActivityId?: string | null;
  readonly evolinciteUserId?: string | null;
  readonly evolinciteActivity: AsyncItem<EvolinciteActivity>;
  readonly evolinciteUser: AsyncItem<EvolinciteUser>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteActivityEvolinciteUser = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteActivityEvolinciteUser : LazyEvolinciteActivityEvolinciteUser

export declare const EvolinciteActivityEvolinciteUser: (new (init: ModelInit<EvolinciteActivityEvolinciteUser>) => EvolinciteActivityEvolinciteUser) & {
  copyOf(source: EvolinciteActivityEvolinciteUser, mutator: (draft: MutableModel<EvolinciteActivityEvolinciteUser>) => MutableModel<EvolinciteActivityEvolinciteUser> | void): EvolinciteActivityEvolinciteUser;
}

type EagerEvolinciteUserEvolinciteCrmNegotiation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteUserEvolinciteCrmNegotiation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly evolinciteCrmNegotiationId?: string | null;
  readonly evolinciteUserId?: string | null;
  readonly evolinciteCrmNegotiation: EvolinciteCrmNegotiation;
  readonly evolinciteUser: EvolinciteUser;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteUserEvolinciteCrmNegotiation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteUserEvolinciteCrmNegotiation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly evolinciteCrmNegotiationId?: string | null;
  readonly evolinciteUserId?: string | null;
  readonly evolinciteCrmNegotiation: AsyncItem<EvolinciteCrmNegotiation>;
  readonly evolinciteUser: AsyncItem<EvolinciteUser>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteUserEvolinciteCrmNegotiation = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteUserEvolinciteCrmNegotiation : LazyEvolinciteUserEvolinciteCrmNegotiation

export declare const EvolinciteUserEvolinciteCrmNegotiation: (new (init: ModelInit<EvolinciteUserEvolinciteCrmNegotiation>) => EvolinciteUserEvolinciteCrmNegotiation) & {
  copyOf(source: EvolinciteUserEvolinciteCrmNegotiation, mutator: (draft: MutableModel<EvolinciteUserEvolinciteCrmNegotiation>) => MutableModel<EvolinciteUserEvolinciteCrmNegotiation> | void): EvolinciteUserEvolinciteCrmNegotiation;
}

type EagerEvolinciteRoomEvolinciteUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteRoomEvolinciteUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly evolinciteRoomId?: string | null;
  readonly evolinciteUserId?: string | null;
  readonly evolinciteRoom: EvolinciteRoom;
  readonly evolinciteUser: EvolinciteUser;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvolinciteRoomEvolinciteUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EvolinciteRoomEvolinciteUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly evolinciteRoomId?: string | null;
  readonly evolinciteUserId?: string | null;
  readonly evolinciteRoom: AsyncItem<EvolinciteRoom>;
  readonly evolinciteUser: AsyncItem<EvolinciteUser>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EvolinciteRoomEvolinciteUser = LazyLoading extends LazyLoadingDisabled ? EagerEvolinciteRoomEvolinciteUser : LazyEvolinciteRoomEvolinciteUser

export declare const EvolinciteRoomEvolinciteUser: (new (init: ModelInit<EvolinciteRoomEvolinciteUser>) => EvolinciteRoomEvolinciteUser) & {
  copyOf(source: EvolinciteRoomEvolinciteUser, mutator: (draft: MutableModel<EvolinciteRoomEvolinciteUser>) => MutableModel<EvolinciteRoomEvolinciteUser> | void): EvolinciteRoomEvolinciteUser;
}