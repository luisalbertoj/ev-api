/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getEvolinciteCompetence = /* GraphQL */ `query GetEvolinciteCompetence($id: ID!) {
  getEvolinciteCompetence(id: $id) {
    id
    name
    description
    content
    application
    state
    EvolinciteSyllabus {
      id
      name
      description
      content
      application
      state
      createdAt
      updatedAt
      evolinciteSyllabusEvolinciteCompetenceId
      __typename
    }
    createdAt
    updatedAt
    evolinciteCompetenceEvolinciteSyllabusId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteCompetenceQueryVariables,
  APITypes.GetEvolinciteCompetenceQuery
>;
export const listEvolinciteCompetences = /* GraphQL */ `query ListEvolinciteCompetences(
  $filter: ModelEvolinciteCompetenceFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteCompetences(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      content
      application
      state
      createdAt
      updatedAt
      evolinciteCompetenceEvolinciteSyllabusId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteCompetencesQueryVariables,
  APITypes.ListEvolinciteCompetencesQuery
>;
export const getEvolinciteCourse = /* GraphQL */ `query GetEvolinciteCourse($id: ID!) {
  getEvolinciteCourse(id: $id) {
    id
    name
    description
    durationUnit
    duration
    objectives
    application
    state
    EvolinciteSyllabus {
      id
      name
      description
      content
      application
      state
      createdAt
      updatedAt
      evolinciteSyllabusEvolinciteCompetenceId
      __typename
    }
    createdAt
    updatedAt
    evolinciteCourseEvolinciteSyllabusId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteCourseQueryVariables,
  APITypes.GetEvolinciteCourseQuery
>;
export const listEvolinciteCourses = /* GraphQL */ `query ListEvolinciteCourses(
  $filter: ModelEvolinciteCourseFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      durationUnit
      duration
      objectives
      application
      state
      createdAt
      updatedAt
      evolinciteCourseEvolinciteSyllabusId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteCoursesQueryVariables,
  APITypes.ListEvolinciteCoursesQuery
>;
export const getEvolinciteSyllabus = /* GraphQL */ `query GetEvolinciteSyllabus($id: ID!) {
  getEvolinciteSyllabus(id: $id) {
    id
    name
    description
    content
    application
    state
    EvolinciteCompetence {
      id
      name
      description
      content
      application
      state
      createdAt
      updatedAt
      evolinciteCompetenceEvolinciteSyllabusId
      __typename
    }
    createdAt
    updatedAt
    evolinciteSyllabusEvolinciteCompetenceId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteSyllabusQueryVariables,
  APITypes.GetEvolinciteSyllabusQuery
>;
export const listEvolinciteSyllabi = /* GraphQL */ `query ListEvolinciteSyllabi(
  $filter: ModelEvolinciteSyllabusFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteSyllabi(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      content
      application
      state
      createdAt
      updatedAt
      evolinciteSyllabusEvolinciteCompetenceId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteSyllabiQueryVariables,
  APITypes.ListEvolinciteSyllabiQuery
>;
export const getEvolinciteUserAnswers = /* GraphQL */ `query GetEvolinciteUserAnswers($id: ID!) {
  getEvolinciteUserAnswers(id: $id) {
    id
    answers
    application
    state
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteSyllabus {
      id
      name
      description
      content
      application
      state
      createdAt
      updatedAt
      evolinciteSyllabusEvolinciteCompetenceId
      __typename
    }
    createdAt
    updatedAt
    evolinciteUserAnswersEvolinciteUserId
    evolinciteUserAnswersEvolinciteSyllabusId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteUserAnswersQueryVariables,
  APITypes.GetEvolinciteUserAnswersQuery
>;
export const listEvolinciteUserAnswers = /* GraphQL */ `query ListEvolinciteUserAnswers(
  $filter: ModelEvolinciteUserAnswersFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteUserAnswers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      answers
      application
      state
      createdAt
      updatedAt
      evolinciteUserAnswersEvolinciteUserId
      evolinciteUserAnswersEvolinciteSyllabusId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteUserAnswersQueryVariables,
  APITypes.ListEvolinciteUserAnswersQuery
>;
export const getEvolinciteProcessType = /* GraphQL */ `query GetEvolinciteProcessType($id: ID!) {
  getEvolinciteProcessType(id: $id) {
    id
    name
    order
    sellerCommission
    referrerCommission
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiations {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteProcessTypeQueryVariables,
  APITypes.GetEvolinciteProcessTypeQuery
>;
export const listEvolinciteProcessTypes = /* GraphQL */ `query ListEvolinciteProcessTypes(
  $filter: ModelEvolinciteProcessTypeFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteProcessTypes(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      order
      sellerCommission
      referrerCommission
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteProcessTypesQueryVariables,
  APITypes.ListEvolinciteProcessTypesQuery
>;
export const evolinciteProcessTypesByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteProcessTypesByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteProcessTypeFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteProcessTypesByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      order
      sellerCommission
      referrerCommission
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteProcessTypesByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteProcessTypesByEvolinciteCompanyIDQuery
>;
export const getEvolinciteExpenseType = /* GraphQL */ `query GetEvolinciteExpenseType($id: ID!) {
  getEvolinciteExpenseType(id: $id) {
    id
    name
    type
    setting
    state
    EvolinciteExpenses {
      nextToken
      __typename
    }
    evolinciteCompanyID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteExpenseTypeQueryVariables,
  APITypes.GetEvolinciteExpenseTypeQuery
>;
export const listEvolinciteExpenseTypes = /* GraphQL */ `query ListEvolinciteExpenseTypes(
  $filter: ModelEvolinciteExpenseTypeFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteExpenseTypes(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      type
      setting
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteExpenseTypesQueryVariables,
  APITypes.ListEvolinciteExpenseTypesQuery
>;
export const evolinciteExpenseTypesByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteExpenseTypesByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteExpenseTypeFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteExpenseTypesByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      type
      setting
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteExpenseTypesByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteExpenseTypesByEvolinciteCompanyIDQuery
>;
export const getEvolinciteExpense = /* GraphQL */ `query GetEvolinciteExpense($id: ID!) {
  getEvolinciteExpense(id: $id) {
    id
    amount
    process
    expenseState
    expenseDate
    observations
    voucher
    transactionType
    reference
    state
    evolinciteExpenseTypeID
    EvolinciteExpenseType {
      id
      name
      type
      setting
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    evolinciteCrmNegotiationID
    EvolinciteCrmNegotiation {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    evolinciteCompanyID
    EvolinciteExpenseLogs {
      nextToken
      __typename
    }
    evolinciteUserID
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserResponsibleID
    EvolinciteUserResponsible {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteExpenseQueryVariables,
  APITypes.GetEvolinciteExpenseQuery
>;
export const listEvolinciteExpenses = /* GraphQL */ `query ListEvolinciteExpenses(
  $filter: ModelEvolinciteExpenseFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteExpenses(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      amount
      process
      expenseState
      expenseDate
      observations
      voucher
      transactionType
      reference
      state
      evolinciteExpenseTypeID
      evolinciteCrmNegotiationID
      evolinciteCompanyID
      evolinciteUserID
      evolinciteUserResponsibleID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteExpensesQueryVariables,
  APITypes.ListEvolinciteExpensesQuery
>;
export const evolinciteExpensesByEvolinciteExpenseTypeID = /* GraphQL */ `query EvolinciteExpensesByEvolinciteExpenseTypeID(
  $evolinciteExpenseTypeID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteExpenseFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteExpensesByEvolinciteExpenseTypeID(
    evolinciteExpenseTypeID: $evolinciteExpenseTypeID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      amount
      process
      expenseState
      expenseDate
      observations
      voucher
      transactionType
      reference
      state
      evolinciteExpenseTypeID
      evolinciteCrmNegotiationID
      evolinciteCompanyID
      evolinciteUserID
      evolinciteUserResponsibleID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteExpensesByEvolinciteExpenseTypeIDQueryVariables,
  APITypes.EvolinciteExpensesByEvolinciteExpenseTypeIDQuery
>;
export const evolinciteExpensesByEvolinciteCrmNegotiationID = /* GraphQL */ `query EvolinciteExpensesByEvolinciteCrmNegotiationID(
  $evolinciteCrmNegotiationID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteExpenseFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteExpensesByEvolinciteCrmNegotiationID(
    evolinciteCrmNegotiationID: $evolinciteCrmNegotiationID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      amount
      process
      expenseState
      expenseDate
      observations
      voucher
      transactionType
      reference
      state
      evolinciteExpenseTypeID
      evolinciteCrmNegotiationID
      evolinciteCompanyID
      evolinciteUserID
      evolinciteUserResponsibleID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteExpensesByEvolinciteCrmNegotiationIDQueryVariables,
  APITypes.EvolinciteExpensesByEvolinciteCrmNegotiationIDQuery
>;
export const evolinciteExpensesByEvolinciteCompanyIDAndCreatedAt = /* GraphQL */ `query EvolinciteExpensesByEvolinciteCompanyIDAndCreatedAt(
  $evolinciteCompanyID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteExpenseFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteExpensesByEvolinciteCompanyIDAndCreatedAt(
    evolinciteCompanyID: $evolinciteCompanyID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      amount
      process
      expenseState
      expenseDate
      observations
      voucher
      transactionType
      reference
      state
      evolinciteExpenseTypeID
      evolinciteCrmNegotiationID
      evolinciteCompanyID
      evolinciteUserID
      evolinciteUserResponsibleID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteExpensesByEvolinciteCompanyIDAndCreatedAtQueryVariables,
  APITypes.EvolinciteExpensesByEvolinciteCompanyIDAndCreatedAtQuery
>;
export const evolinciteExpensesByEvolinciteUserID = /* GraphQL */ `query EvolinciteExpensesByEvolinciteUserID(
  $evolinciteUserID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteExpenseFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteExpensesByEvolinciteUserID(
    evolinciteUserID: $evolinciteUserID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      amount
      process
      expenseState
      expenseDate
      observations
      voucher
      transactionType
      reference
      state
      evolinciteExpenseTypeID
      evolinciteCrmNegotiationID
      evolinciteCompanyID
      evolinciteUserID
      evolinciteUserResponsibleID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteExpensesByEvolinciteUserIDQueryVariables,
  APITypes.EvolinciteExpensesByEvolinciteUserIDQuery
>;
export const evolinciteExpensesByEvolinciteUserResponsibleIDAndCreatedAt = /* GraphQL */ `query EvolinciteExpensesByEvolinciteUserResponsibleIDAndCreatedAt(
  $evolinciteUserResponsibleID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteExpenseFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteExpensesByEvolinciteUserResponsibleIDAndCreatedAt(
    evolinciteUserResponsibleID: $evolinciteUserResponsibleID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      amount
      process
      expenseState
      expenseDate
      observations
      voucher
      transactionType
      reference
      state
      evolinciteExpenseTypeID
      evolinciteCrmNegotiationID
      evolinciteCompanyID
      evolinciteUserID
      evolinciteUserResponsibleID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteExpensesByEvolinciteUserResponsibleIDAndCreatedAtQueryVariables,
  APITypes.EvolinciteExpensesByEvolinciteUserResponsibleIDAndCreatedAtQuery
>;
export const getEvolinciteUserEvolinciteJobTitle = /* GraphQL */ `query GetEvolinciteUserEvolinciteJobTitle($id: ID!) {
  getEvolinciteUserEvolinciteJobTitle(id: $id) {
    id
    state
    evolinciteJobTitleID
    EvolinciteJobTitle {
      id
      name
      salary
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserID
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteUserEvolinciteJobTitleQueryVariables,
  APITypes.GetEvolinciteUserEvolinciteJobTitleQuery
>;
export const listEvolinciteUserEvolinciteJobTitles = /* GraphQL */ `query ListEvolinciteUserEvolinciteJobTitles(
  $filter: ModelEvolinciteUserEvolinciteJobTitleFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteUserEvolinciteJobTitles(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      evolinciteJobTitleID
      evolinciteUserID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteUserEvolinciteJobTitlesQueryVariables,
  APITypes.ListEvolinciteUserEvolinciteJobTitlesQuery
>;
export const evolinciteUserEvolinciteJobTitlesByEvolinciteJobTitleID = /* GraphQL */ `query EvolinciteUserEvolinciteJobTitlesByEvolinciteJobTitleID(
  $evolinciteJobTitleID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteUserEvolinciteJobTitleFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteUserEvolinciteJobTitlesByEvolinciteJobTitleID(
    evolinciteJobTitleID: $evolinciteJobTitleID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      evolinciteJobTitleID
      evolinciteUserID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteUserEvolinciteJobTitlesByEvolinciteJobTitleIDQueryVariables,
  APITypes.EvolinciteUserEvolinciteJobTitlesByEvolinciteJobTitleIDQuery
>;
export const evolinciteUserEvolinciteJobTitlesByEvolinciteUserID = /* GraphQL */ `query EvolinciteUserEvolinciteJobTitlesByEvolinciteUserID(
  $evolinciteUserID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteUserEvolinciteJobTitleFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteUserEvolinciteJobTitlesByEvolinciteUserID(
    evolinciteUserID: $evolinciteUserID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      evolinciteJobTitleID
      evolinciteUserID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteUserEvolinciteJobTitlesByEvolinciteUserIDQueryVariables,
  APITypes.EvolinciteUserEvolinciteJobTitlesByEvolinciteUserIDQuery
>;
export const evolinciteUserEvolinciteJobTitlesByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteUserEvolinciteJobTitlesByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteUserEvolinciteJobTitleFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteUserEvolinciteJobTitlesByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      evolinciteJobTitleID
      evolinciteUserID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteUserEvolinciteJobTitlesByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteUserEvolinciteJobTitlesByEvolinciteCompanyIDQuery
>;
export const getEvolinciteJobTitle = /* GraphQL */ `query GetEvolinciteJobTitle($id: ID!) {
  getEvolinciteJobTitle(id: $id) {
    id
    name
    salary
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUserEvolinciteJobTitle {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteJobTitleQueryVariables,
  APITypes.GetEvolinciteJobTitleQuery
>;
export const listEvolinciteJobTitles = /* GraphQL */ `query ListEvolinciteJobTitles(
  $filter: ModelEvolinciteJobTitleFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteJobTitles(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      salary
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteJobTitlesQueryVariables,
  APITypes.ListEvolinciteJobTitlesQuery
>;
export const evolinciteJobTitlesByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteJobTitlesByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteJobTitleFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteJobTitlesByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      salary
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteJobTitlesByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteJobTitlesByEvolinciteCompanyIDQuery
>;
export const getEvolinciteWalletPayment = /* GraphQL */ `query GetEvolinciteWalletPayment($id: ID!) {
  getEvolinciteWalletPayment(id: $id) {
    id
    amount
    scheduledDate
    datePayment
    paymentStatus
    prePayment
    postPayment
    observations
    voucher
    transactionType
    reference
    amountInterest
    amountCollection
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserReferrerID
    EvolinciteUserReferrer {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserSellerID
    EvolinciteUserSeller {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteCrmNegotiationID
    EvolinciteCrmNegotiation {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    evolinciteCustomerID
    EvolinciteCustomer {
      id
      name
      lastName
      documentType
      documentNumber
      phone
      optionalPhone
      email
      picture
      birthDate
      municipality
      documents
      address
      meta
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteWalletPaymentLogs {
      nextToken
      __typename
    }
    evolinciteUserResponsibleID
    EvolinciteUserResponsible {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteWalletPaymentQueryVariables,
  APITypes.GetEvolinciteWalletPaymentQuery
>;
export const listEvolinciteWalletPayments = /* GraphQL */ `query ListEvolinciteWalletPayments(
  $filter: ModelEvolinciteWalletPaymentFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteWalletPayments(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      amount
      scheduledDate
      datePayment
      paymentStatus
      prePayment
      postPayment
      observations
      voucher
      transactionType
      reference
      amountInterest
      amountCollection
      state
      evolinciteCompanyID
      evolinciteUserReferrerID
      evolinciteUserSellerID
      evolinciteCrmNegotiationID
      evolinciteCustomerID
      evolinciteUserResponsibleID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteWalletPaymentsQueryVariables,
  APITypes.ListEvolinciteWalletPaymentsQuery
>;
export const evolinciteWalletPaymentsByEvolinciteCompanyIDAndCreatedAt = /* GraphQL */ `query EvolinciteWalletPaymentsByEvolinciteCompanyIDAndCreatedAt(
  $evolinciteCompanyID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteWalletPaymentFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteWalletPaymentsByEvolinciteCompanyIDAndCreatedAt(
    evolinciteCompanyID: $evolinciteCompanyID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      amount
      scheduledDate
      datePayment
      paymentStatus
      prePayment
      postPayment
      observations
      voucher
      transactionType
      reference
      amountInterest
      amountCollection
      state
      evolinciteCompanyID
      evolinciteUserReferrerID
      evolinciteUserSellerID
      evolinciteCrmNegotiationID
      evolinciteCustomerID
      evolinciteUserResponsibleID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteWalletPaymentsByEvolinciteCompanyIDAndCreatedAtQueryVariables,
  APITypes.EvolinciteWalletPaymentsByEvolinciteCompanyIDAndCreatedAtQuery
>;
export const evolinciteWalletPaymentsByEvolinciteUserReferrerID = /* GraphQL */ `query EvolinciteWalletPaymentsByEvolinciteUserReferrerID(
  $evolinciteUserReferrerID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteWalletPaymentFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteWalletPaymentsByEvolinciteUserReferrerID(
    evolinciteUserReferrerID: $evolinciteUserReferrerID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      amount
      scheduledDate
      datePayment
      paymentStatus
      prePayment
      postPayment
      observations
      voucher
      transactionType
      reference
      amountInterest
      amountCollection
      state
      evolinciteCompanyID
      evolinciteUserReferrerID
      evolinciteUserSellerID
      evolinciteCrmNegotiationID
      evolinciteCustomerID
      evolinciteUserResponsibleID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteWalletPaymentsByEvolinciteUserReferrerIDQueryVariables,
  APITypes.EvolinciteWalletPaymentsByEvolinciteUserReferrerIDQuery
>;
export const evolinciteWalletPaymentsByEvolinciteUserSellerID = /* GraphQL */ `query EvolinciteWalletPaymentsByEvolinciteUserSellerID(
  $evolinciteUserSellerID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteWalletPaymentFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteWalletPaymentsByEvolinciteUserSellerID(
    evolinciteUserSellerID: $evolinciteUserSellerID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      amount
      scheduledDate
      datePayment
      paymentStatus
      prePayment
      postPayment
      observations
      voucher
      transactionType
      reference
      amountInterest
      amountCollection
      state
      evolinciteCompanyID
      evolinciteUserReferrerID
      evolinciteUserSellerID
      evolinciteCrmNegotiationID
      evolinciteCustomerID
      evolinciteUserResponsibleID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteWalletPaymentsByEvolinciteUserSellerIDQueryVariables,
  APITypes.EvolinciteWalletPaymentsByEvolinciteUserSellerIDQuery
>;
export const evolinciteWalletPaymentsByEvolinciteCrmNegotiationID = /* GraphQL */ `query EvolinciteWalletPaymentsByEvolinciteCrmNegotiationID(
  $evolinciteCrmNegotiationID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteWalletPaymentFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteWalletPaymentsByEvolinciteCrmNegotiationID(
    evolinciteCrmNegotiationID: $evolinciteCrmNegotiationID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      amount
      scheduledDate
      datePayment
      paymentStatus
      prePayment
      postPayment
      observations
      voucher
      transactionType
      reference
      amountInterest
      amountCollection
      state
      evolinciteCompanyID
      evolinciteUserReferrerID
      evolinciteUserSellerID
      evolinciteCrmNegotiationID
      evolinciteCustomerID
      evolinciteUserResponsibleID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteWalletPaymentsByEvolinciteCrmNegotiationIDQueryVariables,
  APITypes.EvolinciteWalletPaymentsByEvolinciteCrmNegotiationIDQuery
>;
export const evolinciteWalletPaymentsByEvolinciteCustomerID = /* GraphQL */ `query EvolinciteWalletPaymentsByEvolinciteCustomerID(
  $evolinciteCustomerID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteWalletPaymentFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteWalletPaymentsByEvolinciteCustomerID(
    evolinciteCustomerID: $evolinciteCustomerID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      amount
      scheduledDate
      datePayment
      paymentStatus
      prePayment
      postPayment
      observations
      voucher
      transactionType
      reference
      amountInterest
      amountCollection
      state
      evolinciteCompanyID
      evolinciteUserReferrerID
      evolinciteUserSellerID
      evolinciteCrmNegotiationID
      evolinciteCustomerID
      evolinciteUserResponsibleID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteWalletPaymentsByEvolinciteCustomerIDQueryVariables,
  APITypes.EvolinciteWalletPaymentsByEvolinciteCustomerIDQuery
>;
export const evolinciteWalletPaymentsByEvolinciteUserResponsibleIDAndCreatedAt = /* GraphQL */ `query EvolinciteWalletPaymentsByEvolinciteUserResponsibleIDAndCreatedAt(
  $evolinciteUserResponsibleID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteWalletPaymentFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteWalletPaymentsByEvolinciteUserResponsibleIDAndCreatedAt(
    evolinciteUserResponsibleID: $evolinciteUserResponsibleID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      amount
      scheduledDate
      datePayment
      paymentStatus
      prePayment
      postPayment
      observations
      voucher
      transactionType
      reference
      amountInterest
      amountCollection
      state
      evolinciteCompanyID
      evolinciteUserReferrerID
      evolinciteUserSellerID
      evolinciteCrmNegotiationID
      evolinciteCustomerID
      evolinciteUserResponsibleID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteWalletPaymentsByEvolinciteUserResponsibleIDAndCreatedAtQueryVariables,
  APITypes.EvolinciteWalletPaymentsByEvolinciteUserResponsibleIDAndCreatedAtQuery
>;
export const getEvolinciteCrmNegotiationField = /* GraphQL */ `query GetEvolinciteCrmNegotiationField($id: ID!) {
  getEvolinciteCrmNegotiationField(id: $id) {
    id
    field
    type
    required
    order
    state
    meta
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiationFieldValues {
      nextToken
      __typename
    }
    evolinciteCrmNegotiationSectionID
    EvolinciteCrmNegotiationSection {
      id
      name
      order
      meta
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteCrmNegotiationFieldQueryVariables,
  APITypes.GetEvolinciteCrmNegotiationFieldQuery
>;
export const listEvolinciteCrmNegotiationFields = /* GraphQL */ `query ListEvolinciteCrmNegotiationFields(
  $filter: ModelEvolinciteCrmNegotiationFieldFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteCrmNegotiationFields(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      field
      type
      required
      order
      state
      meta
      evolinciteCompanyID
      evolinciteCrmNegotiationSectionID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteCrmNegotiationFieldsQueryVariables,
  APITypes.ListEvolinciteCrmNegotiationFieldsQuery
>;
export const evolinciteCrmNegotiationFieldsByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteCrmNegotiationFieldsByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteCrmNegotiationFieldFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteCrmNegotiationFieldsByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      field
      type
      required
      order
      state
      meta
      evolinciteCompanyID
      evolinciteCrmNegotiationSectionID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteCrmNegotiationFieldsByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteCrmNegotiationFieldsByEvolinciteCompanyIDQuery
>;
export const evolinciteCrmNegotiationFieldsByEvolinciteCrmNegotiationSectionID = /* GraphQL */ `query EvolinciteCrmNegotiationFieldsByEvolinciteCrmNegotiationSectionID(
  $evolinciteCrmNegotiationSectionID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteCrmNegotiationFieldFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteCrmNegotiationFieldsByEvolinciteCrmNegotiationSectionID(
    evolinciteCrmNegotiationSectionID: $evolinciteCrmNegotiationSectionID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      field
      type
      required
      order
      state
      meta
      evolinciteCompanyID
      evolinciteCrmNegotiationSectionID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteCrmNegotiationFieldsByEvolinciteCrmNegotiationSectionIDQueryVariables,
  APITypes.EvolinciteCrmNegotiationFieldsByEvolinciteCrmNegotiationSectionIDQuery
>;
export const getEvolinciteCrmNegotiationSection = /* GraphQL */ `query GetEvolinciteCrmNegotiationSection($id: ID!) {
  getEvolinciteCrmNegotiationSection(id: $id) {
    id
    name
    order
    meta
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiationFields {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteCrmNegotiationSectionQueryVariables,
  APITypes.GetEvolinciteCrmNegotiationSectionQuery
>;
export const listEvolinciteCrmNegotiationSections = /* GraphQL */ `query ListEvolinciteCrmNegotiationSections(
  $filter: ModelEvolinciteCrmNegotiationSectionFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteCrmNegotiationSections(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      order
      meta
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteCrmNegotiationSectionsQueryVariables,
  APITypes.ListEvolinciteCrmNegotiationSectionsQuery
>;
export const evolinciteCrmNegotiationSectionsByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteCrmNegotiationSectionsByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteCrmNegotiationSectionFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteCrmNegotiationSectionsByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      order
      meta
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteCrmNegotiationSectionsByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteCrmNegotiationSectionsByEvolinciteCompanyIDQuery
>;
export const getEvolinciteCrmAutomation = /* GraphQL */ `query GetEvolinciteCrmAutomation($id: ID!) {
  getEvolinciteCrmAutomation(id: $id) {
    id
    name
    rule
    setting
    order
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    evolinciteCrmStateID
    EvolinciteCrmState {
      id
      name
      description
      publicDescription
      color
      order
      state
      evolinciteCompanyID
      evolinciteCrmPipelineID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteCrmAutomationQueryVariables,
  APITypes.GetEvolinciteCrmAutomationQuery
>;
export const listEvolinciteCrmAutomations = /* GraphQL */ `query ListEvolinciteCrmAutomations(
  $filter: ModelEvolinciteCrmAutomationFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteCrmAutomations(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      rule
      setting
      order
      state
      evolinciteCompanyID
      evolinciteCrmStateID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteCrmAutomationsQueryVariables,
  APITypes.ListEvolinciteCrmAutomationsQuery
>;
export const evolinciteCrmAutomationsByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteCrmAutomationsByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteCrmAutomationFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteCrmAutomationsByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      rule
      setting
      order
      state
      evolinciteCompanyID
      evolinciteCrmStateID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteCrmAutomationsByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteCrmAutomationsByEvolinciteCompanyIDQuery
>;
export const evolinciteCrmAutomationsByEvolinciteCrmStateIDAndOrder = /* GraphQL */ `query EvolinciteCrmAutomationsByEvolinciteCrmStateIDAndOrder(
  $evolinciteCrmStateID: ID!
  $order: ModelFloatKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteCrmAutomationFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteCrmAutomationsByEvolinciteCrmStateIDAndOrder(
    evolinciteCrmStateID: $evolinciteCrmStateID
    order: $order
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      rule
      setting
      order
      state
      evolinciteCompanyID
      evolinciteCrmStateID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteCrmAutomationsByEvolinciteCrmStateIDAndOrderQueryVariables,
  APITypes.EvolinciteCrmAutomationsByEvolinciteCrmStateIDAndOrderQuery
>;
export const getEvolinciteComment = /* GraphQL */ `query GetEvolinciteComment($id: ID!) {
  getEvolinciteComment(id: $id) {
    id
    files
    content
    pinned
    state
    evolinciteUserID
    evolinciteCrmNegotiationID
    EvolinciteCrmNegotiation {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteCommentQueryVariables,
  APITypes.GetEvolinciteCommentQuery
>;
export const listEvolinciteComments = /* GraphQL */ `query ListEvolinciteComments(
  $filter: ModelEvolinciteCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteComments(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      files
      content
      pinned
      state
      evolinciteUserID
      evolinciteCrmNegotiationID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteCommentsQueryVariables,
  APITypes.ListEvolinciteCommentsQuery
>;
export const evolinciteCommentsByEvolinciteUserID = /* GraphQL */ `query EvolinciteCommentsByEvolinciteUserID(
  $evolinciteUserID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteCommentsByEvolinciteUserID(
    evolinciteUserID: $evolinciteUserID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      files
      content
      pinned
      state
      evolinciteUserID
      evolinciteCrmNegotiationID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteCommentsByEvolinciteUserIDQueryVariables,
  APITypes.EvolinciteCommentsByEvolinciteUserIDQuery
>;
export const evolinciteCommentsByEvolinciteCrmNegotiationIDAndCreatedAt = /* GraphQL */ `query EvolinciteCommentsByEvolinciteCrmNegotiationIDAndCreatedAt(
  $evolinciteCrmNegotiationID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteCommentsByEvolinciteCrmNegotiationIDAndCreatedAt(
    evolinciteCrmNegotiationID: $evolinciteCrmNegotiationID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      files
      content
      pinned
      state
      evolinciteUserID
      evolinciteCrmNegotiationID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteCommentsByEvolinciteCrmNegotiationIDAndCreatedAtQueryVariables,
  APITypes.EvolinciteCommentsByEvolinciteCrmNegotiationIDAndCreatedAtQuery
>;
export const getEvolinciteActivity = /* GraphQL */ `query GetEvolinciteActivity($id: ID!) {
  getEvolinciteActivity(id: $id) {
    id
    name
    description
    startDate
    endDate
    color
    type
    priority
    meta
    taskState
    documents
    state
    evolinciteUserID
    EvolinciteUserOwner {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    Participants {
      nextToken
      __typename
    }
    evolinciteCompanyID
    evolinciteCrmNegotiationID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiation {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteActivityQueryVariables,
  APITypes.GetEvolinciteActivityQuery
>;
export const listEvolinciteActivities = /* GraphQL */ `query ListEvolinciteActivities(
  $filter: ModelEvolinciteActivityFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteActivities(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      startDate
      endDate
      color
      type
      priority
      meta
      taskState
      documents
      state
      evolinciteUserID
      evolinciteCompanyID
      evolinciteCrmNegotiationID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteActivitiesQueryVariables,
  APITypes.ListEvolinciteActivitiesQuery
>;
export const evolinciteActivitiesByEvolinciteUserIDAndEndDate = /* GraphQL */ `query EvolinciteActivitiesByEvolinciteUserIDAndEndDate(
  $evolinciteUserID: ID!
  $endDate: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteActivityFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteActivitiesByEvolinciteUserIDAndEndDate(
    evolinciteUserID: $evolinciteUserID
    endDate: $endDate
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      startDate
      endDate
      color
      type
      priority
      meta
      taskState
      documents
      state
      evolinciteUserID
      evolinciteCompanyID
      evolinciteCrmNegotiationID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteActivitiesByEvolinciteUserIDAndEndDateQueryVariables,
  APITypes.EvolinciteActivitiesByEvolinciteUserIDAndEndDateQuery
>;
export const evolinciteActivitiesByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteActivitiesByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteActivityFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteActivitiesByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      startDate
      endDate
      color
      type
      priority
      meta
      taskState
      documents
      state
      evolinciteUserID
      evolinciteCompanyID
      evolinciteCrmNegotiationID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteActivitiesByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteActivitiesByEvolinciteCompanyIDQuery
>;
export const evolinciteActivitiesByEvolinciteCrmNegotiationID = /* GraphQL */ `query EvolinciteActivitiesByEvolinciteCrmNegotiationID(
  $evolinciteCrmNegotiationID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteActivityFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteActivitiesByEvolinciteCrmNegotiationID(
    evolinciteCrmNegotiationID: $evolinciteCrmNegotiationID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      startDate
      endDate
      color
      type
      priority
      meta
      taskState
      documents
      state
      evolinciteUserID
      evolinciteCompanyID
      evolinciteCrmNegotiationID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteActivitiesByEvolinciteCrmNegotiationIDQueryVariables,
  APITypes.EvolinciteActivitiesByEvolinciteCrmNegotiationIDQuery
>;
export const getEvolincitePermissions = /* GraphQL */ `query GetEvolincitePermissions($id: ID!) {
  getEvolincitePermissions(id: $id) {
    id
    state
    evolinciteCompanyID
    evolinciteUserID
    evolinciteDepartmentID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteDepartment {
      id
      name
      parent
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    evolinciteRolID
    EvolinciteRol {
      id
      name
      permissions
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolincitePermissionsQueryVariables,
  APITypes.GetEvolincitePermissionsQuery
>;
export const listEvolincitePermissions = /* GraphQL */ `query ListEvolincitePermissions(
  $filter: ModelEvolincitePermissionsFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolincitePermissions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      evolinciteCompanyID
      evolinciteUserID
      evolinciteDepartmentID
      evolinciteRolID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolincitePermissionsQueryVariables,
  APITypes.ListEvolincitePermissionsQuery
>;
export const evolincitePermissionsByEvolinciteCompanyID = /* GraphQL */ `query EvolincitePermissionsByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolincitePermissionsFilterInput
  $limit: Int
  $nextToken: String
) {
  evolincitePermissionsByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      evolinciteCompanyID
      evolinciteUserID
      evolinciteDepartmentID
      evolinciteRolID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolincitePermissionsByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolincitePermissionsByEvolinciteCompanyIDQuery
>;
export const evolincitePermissionsByEvolinciteUserID = /* GraphQL */ `query EvolincitePermissionsByEvolinciteUserID(
  $evolinciteUserID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolincitePermissionsFilterInput
  $limit: Int
  $nextToken: String
) {
  evolincitePermissionsByEvolinciteUserID(
    evolinciteUserID: $evolinciteUserID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      evolinciteCompanyID
      evolinciteUserID
      evolinciteDepartmentID
      evolinciteRolID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolincitePermissionsByEvolinciteUserIDQueryVariables,
  APITypes.EvolincitePermissionsByEvolinciteUserIDQuery
>;
export const evolincitePermissionsByEvolinciteDepartmentID = /* GraphQL */ `query EvolincitePermissionsByEvolinciteDepartmentID(
  $evolinciteDepartmentID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolincitePermissionsFilterInput
  $limit: Int
  $nextToken: String
) {
  evolincitePermissionsByEvolinciteDepartmentID(
    evolinciteDepartmentID: $evolinciteDepartmentID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      evolinciteCompanyID
      evolinciteUserID
      evolinciteDepartmentID
      evolinciteRolID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolincitePermissionsByEvolinciteDepartmentIDQueryVariables,
  APITypes.EvolincitePermissionsByEvolinciteDepartmentIDQuery
>;
export const evolincitePermissionsByEvolinciteRolID = /* GraphQL */ `query EvolincitePermissionsByEvolinciteRolID(
  $evolinciteRolID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolincitePermissionsFilterInput
  $limit: Int
  $nextToken: String
) {
  evolincitePermissionsByEvolinciteRolID(
    evolinciteRolID: $evolinciteRolID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      evolinciteCompanyID
      evolinciteUserID
      evolinciteDepartmentID
      evolinciteRolID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolincitePermissionsByEvolinciteRolIDQueryVariables,
  APITypes.EvolincitePermissionsByEvolinciteRolIDQuery
>;
export const getEvolinciteDepartment = /* GraphQL */ `query GetEvolinciteDepartment($id: ID!) {
  getEvolinciteDepartment(id: $id) {
    id
    name
    parent
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolincitePermissions {
      nextToken
      __typename
    }
    EvolinciteUserDepartments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteDepartmentQueryVariables,
  APITypes.GetEvolinciteDepartmentQuery
>;
export const listEvolinciteDepartments = /* GraphQL */ `query ListEvolinciteDepartments(
  $filter: ModelEvolinciteDepartmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteDepartments(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      parent
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteDepartmentsQueryVariables,
  APITypes.ListEvolinciteDepartmentsQuery
>;
export const evolinciteDepartmentsByEvolinciteCompanyIDAndCreatedAt = /* GraphQL */ `query EvolinciteDepartmentsByEvolinciteCompanyIDAndCreatedAt(
  $evolinciteCompanyID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteDepartmentFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteDepartmentsByEvolinciteCompanyIDAndCreatedAt(
    evolinciteCompanyID: $evolinciteCompanyID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      parent
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteDepartmentsByEvolinciteCompanyIDAndCreatedAtQueryVariables,
  APITypes.EvolinciteDepartmentsByEvolinciteCompanyIDAndCreatedAtQuery
>;
export const getEvolinciteSubscription = /* GraphQL */ `query GetEvolinciteSubscription($id: ID!) {
  getEvolinciteSubscription(id: $id) {
    id
    name
    price
    dateInitial
    dateFinal
    state
    EvolinciteCompanies {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteSubscriptionQueryVariables,
  APITypes.GetEvolinciteSubscriptionQuery
>;
export const listEvolinciteSubscriptions = /* GraphQL */ `query ListEvolinciteSubscriptions(
  $filter: ModelEvolinciteSubscriptionFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteSubscriptions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      price
      dateInitial
      dateFinal
      state
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteSubscriptionsQueryVariables,
  APITypes.ListEvolinciteSubscriptionsQuery
>;
export const getEvolinciteModule = /* GraphQL */ `query GetEvolinciteModule($id: ID!) {
  getEvolinciteModule(id: $id) {
    id
    name
    state
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteModuleQueryVariables,
  APITypes.GetEvolinciteModuleQuery
>;
export const listEvolinciteModules = /* GraphQL */ `query ListEvolinciteModules(
  $filter: ModelEvolinciteModuleFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteModules(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      state
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteModulesQueryVariables,
  APITypes.ListEvolinciteModulesQuery
>;
export const getEvolinciteFunctionality = /* GraphQL */ `query GetEvolinciteFunctionality($id: ID!) {
  getEvolinciteFunctionality(id: $id) {
    id
    name
    functionalities
    state
    evolincitePackageID
    EvolincitePackage {
      id
      name
      description
      goal
      duration
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteFunctionalityQueryVariables,
  APITypes.GetEvolinciteFunctionalityQuery
>;
export const listEvolinciteFunctionalities = /* GraphQL */ `query ListEvolinciteFunctionalities(
  $filter: ModelEvolinciteFunctionalityFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteFunctionalities(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      functionalities
      state
      evolincitePackageID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteFunctionalitiesQueryVariables,
  APITypes.ListEvolinciteFunctionalitiesQuery
>;
export const evolinciteFunctionalitiesByEvolincitePackageID = /* GraphQL */ `query EvolinciteFunctionalitiesByEvolincitePackageID(
  $evolincitePackageID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteFunctionalityFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteFunctionalitiesByEvolincitePackageID(
    evolincitePackageID: $evolincitePackageID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      functionalities
      state
      evolincitePackageID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteFunctionalitiesByEvolincitePackageIDQueryVariables,
  APITypes.EvolinciteFunctionalitiesByEvolincitePackageIDQuery
>;
export const getEvolinciteRol = /* GraphQL */ `query GetEvolinciteRol($id: ID!) {
  getEvolinciteRol(id: $id) {
    id
    name
    permissions
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolincitePermissions {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteRolQueryVariables,
  APITypes.GetEvolinciteRolQuery
>;
export const listEvolinciteRols = /* GraphQL */ `query ListEvolinciteRols(
  $filter: ModelEvolinciteRolFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteRols(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      permissions
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteRolsQueryVariables,
  APITypes.ListEvolinciteRolsQuery
>;
export const evolinciteRolsByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteRolsByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteRolFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteRolsByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      permissions
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteRolsByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteRolsByEvolinciteCompanyIDQuery
>;
export const getEvolinciteCustomer = /* GraphQL */ `query GetEvolinciteCustomer($id: ID!) {
  getEvolinciteCustomer(id: $id) {
    id
    name
    lastName
    documentType
    documentNumber
    phone
    optionalPhone
    email
    picture
    birthDate
    municipality
    documents
    address
    meta
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiations {
      nextToken
      __typename
    }
    EvolinciteWalletPayments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteCustomerQueryVariables,
  APITypes.GetEvolinciteCustomerQuery
>;
export const listEvolinciteCustomers = /* GraphQL */ `query ListEvolinciteCustomers(
  $filter: ModelEvolinciteCustomerFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteCustomers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      lastName
      documentType
      documentNumber
      phone
      optionalPhone
      email
      picture
      birthDate
      municipality
      documents
      address
      meta
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteCustomersQueryVariables,
  APITypes.ListEvolinciteCustomersQuery
>;
export const evolinciteCustomersByDocumentNumber = /* GraphQL */ `query EvolinciteCustomersByDocumentNumber(
  $documentNumber: String!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteCustomerFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteCustomersByDocumentNumber(
    documentNumber: $documentNumber
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      lastName
      documentType
      documentNumber
      phone
      optionalPhone
      email
      picture
      birthDate
      municipality
      documents
      address
      meta
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteCustomersByDocumentNumberQueryVariables,
  APITypes.EvolinciteCustomersByDocumentNumberQuery
>;
export const evolinciteCustomersByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteCustomersByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteCustomerFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteCustomersByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      lastName
      documentType
      documentNumber
      phone
      optionalPhone
      email
      picture
      birthDate
      municipality
      documents
      address
      meta
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteCustomersByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteCustomersByEvolinciteCompanyIDQuery
>;
export const getEvolinciteUserSettings = /* GraphQL */ `query GetEvolinciteUserSettings($id: ID!) {
  getEvolinciteUserSettings(id: $id) {
    id
    settings
    state
    evolinciteUserID
    evolinciteCompanyID
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteUserSettingsQueryVariables,
  APITypes.GetEvolinciteUserSettingsQuery
>;
export const listEvolinciteUserSettings = /* GraphQL */ `query ListEvolinciteUserSettings(
  $filter: ModelEvolinciteUserSettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteUserSettings(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      settings
      state
      evolinciteUserID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteUserSettingsQueryVariables,
  APITypes.ListEvolinciteUserSettingsQuery
>;
export const evolinciteUserSettingsByEvolinciteUserID = /* GraphQL */ `query EvolinciteUserSettingsByEvolinciteUserID(
  $evolinciteUserID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteUserSettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteUserSettingsByEvolinciteUserID(
    evolinciteUserID: $evolinciteUserID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      settings
      state
      evolinciteUserID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteUserSettingsByEvolinciteUserIDQueryVariables,
  APITypes.EvolinciteUserSettingsByEvolinciteUserIDQuery
>;
export const evolinciteUserSettingsByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteUserSettingsByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteUserSettingsFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteUserSettingsByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      settings
      state
      evolinciteUserID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteUserSettingsByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteUserSettingsByEvolinciteCompanyIDQuery
>;
export const getEvolinciteCrmPipeline = /* GraphQL */ `query GetEvolinciteCrmPipeline($id: ID!) {
  getEvolinciteCrmPipeline(id: $id) {
    id
    name
    description
    publicDescription
    order
    state
    meta
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmStates {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteCrmPipelineQueryVariables,
  APITypes.GetEvolinciteCrmPipelineQuery
>;
export const listEvolinciteCrmPipelines = /* GraphQL */ `query ListEvolinciteCrmPipelines(
  $filter: ModelEvolinciteCrmPipelineFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteCrmPipelines(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      publicDescription
      order
      state
      meta
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteCrmPipelinesQueryVariables,
  APITypes.ListEvolinciteCrmPipelinesQuery
>;
export const evolinciteCrmPipelinesByEvolinciteCompanyIDAndOrder = /* GraphQL */ `query EvolinciteCrmPipelinesByEvolinciteCompanyIDAndOrder(
  $evolinciteCompanyID: ID!
  $order: ModelFloatKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteCrmPipelineFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteCrmPipelinesByEvolinciteCompanyIDAndOrder(
    evolinciteCompanyID: $evolinciteCompanyID
    order: $order
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      publicDescription
      order
      state
      meta
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteCrmPipelinesByEvolinciteCompanyIDAndOrderQueryVariables,
  APITypes.EvolinciteCrmPipelinesByEvolinciteCompanyIDAndOrderQuery
>;
export const getEvolinciteCrmState = /* GraphQL */ `query GetEvolinciteCrmState($id: ID!) {
  getEvolinciteCrmState(id: $id) {
    id
    name
    description
    publicDescription
    color
    order
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiations {
      nextToken
      __typename
    }
    EvolinciteCrmAutomations {
      nextToken
      __typename
    }
    evolinciteCrmPipelineID
    EvolinciteCrmPipeline {
      id
      name
      description
      publicDescription
      order
      state
      meta
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteCrmStateQueryVariables,
  APITypes.GetEvolinciteCrmStateQuery
>;
export const listEvolinciteCrmStates = /* GraphQL */ `query ListEvolinciteCrmStates(
  $filter: ModelEvolinciteCrmStateFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteCrmStates(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      publicDescription
      color
      order
      state
      evolinciteCompanyID
      evolinciteCrmPipelineID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteCrmStatesQueryVariables,
  APITypes.ListEvolinciteCrmStatesQuery
>;
export const evolinciteCrmStatesByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteCrmStatesByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteCrmStateFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteCrmStatesByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      publicDescription
      color
      order
      state
      evolinciteCompanyID
      evolinciteCrmPipelineID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteCrmStatesByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteCrmStatesByEvolinciteCompanyIDQuery
>;
export const evolinciteCrmStatesByEvolinciteCrmPipelineIDAndOrder = /* GraphQL */ `query EvolinciteCrmStatesByEvolinciteCrmPipelineIDAndOrder(
  $evolinciteCrmPipelineID: ID!
  $order: ModelFloatKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteCrmStateFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteCrmStatesByEvolinciteCrmPipelineIDAndOrder(
    evolinciteCrmPipelineID: $evolinciteCrmPipelineID
    order: $order
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      publicDescription
      color
      order
      state
      evolinciteCompanyID
      evolinciteCrmPipelineID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteCrmStatesByEvolinciteCrmPipelineIDAndOrderQueryVariables,
  APITypes.EvolinciteCrmStatesByEvolinciteCrmPipelineIDAndOrderQuery
>;
export const getEvolinciteCrmNegotiationLog = /* GraphQL */ `query GetEvolinciteCrmNegotiationLog($id: ID!) {
  getEvolinciteCrmNegotiationLog(id: $id) {
    id
    log
    state
    evolinciteUserID
    evolinciteCompanyID
    evolinciteCrmNegotiationID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiation {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteCrmNegotiationLogQueryVariables,
  APITypes.GetEvolinciteCrmNegotiationLogQuery
>;
export const listEvolinciteCrmNegotiationLogs = /* GraphQL */ `query ListEvolinciteCrmNegotiationLogs(
  $filter: ModelEvolinciteCrmNegotiationLogFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteCrmNegotiationLogs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      log
      state
      evolinciteUserID
      evolinciteCompanyID
      evolinciteCrmNegotiationID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteCrmNegotiationLogsQueryVariables,
  APITypes.ListEvolinciteCrmNegotiationLogsQuery
>;
export const evolinciteCrmNegotiationLogsByEvolinciteUserID = /* GraphQL */ `query EvolinciteCrmNegotiationLogsByEvolinciteUserID(
  $evolinciteUserID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteCrmNegotiationLogFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteCrmNegotiationLogsByEvolinciteUserID(
    evolinciteUserID: $evolinciteUserID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      log
      state
      evolinciteUserID
      evolinciteCompanyID
      evolinciteCrmNegotiationID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteCrmNegotiationLogsByEvolinciteUserIDQueryVariables,
  APITypes.EvolinciteCrmNegotiationLogsByEvolinciteUserIDQuery
>;
export const evolinciteCrmNegotiationLogsByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteCrmNegotiationLogsByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteCrmNegotiationLogFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteCrmNegotiationLogsByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      log
      state
      evolinciteUserID
      evolinciteCompanyID
      evolinciteCrmNegotiationID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteCrmNegotiationLogsByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteCrmNegotiationLogsByEvolinciteCompanyIDQuery
>;
export const evolinciteCrmNegotiationLogsByEvolinciteCrmNegotiationIDAndCreatedAt = /* GraphQL */ `query EvolinciteCrmNegotiationLogsByEvolinciteCrmNegotiationIDAndCreatedAt(
  $evolinciteCrmNegotiationID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteCrmNegotiationLogFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteCrmNegotiationLogsByEvolinciteCrmNegotiationIDAndCreatedAt(
    evolinciteCrmNegotiationID: $evolinciteCrmNegotiationID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      log
      state
      evolinciteUserID
      evolinciteCompanyID
      evolinciteCrmNegotiationID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteCrmNegotiationLogsByEvolinciteCrmNegotiationIDAndCreatedAtQueryVariables,
  APITypes.EvolinciteCrmNegotiationLogsByEvolinciteCrmNegotiationIDAndCreatedAtQuery
>;
export const getEvolinciteCrmNegotiation = /* GraphQL */ `query GetEvolinciteCrmNegotiation($id: ID!) {
  getEvolinciteCrmNegotiation(id: $id) {
    id
    name
    value
    due
    parent
    date
    documents
    meta
    frozen
    valueInterest
    valueCollection
    observers
    exitDate
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserSellerID
    EvolinciteUserSeller {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserReferrerID
    EvolinciteUserReferrer {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserOwnerID
    EvolinciteUserOwner {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiationFieldValues {
      nextToken
      __typename
    }
    evolinciteCrmStateID
    EvolinciteCrmState {
      id
      name
      description
      publicDescription
      color
      order
      state
      evolinciteCompanyID
      evolinciteCrmPipelineID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteWalletPayments {
      nextToken
      __typename
    }
    evolinciteCustomerID
    EvolinciteCustomer {
      id
      name
      lastName
      documentType
      documentNumber
      phone
      optionalPhone
      email
      picture
      birthDate
      municipality
      documents
      address
      meta
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiationLogs {
      nextToken
      __typename
    }
    EvolinciteComments {
      nextToken
      __typename
    }
    EvolinciteActivities {
      nextToken
      __typename
    }
    EvolinciteUsersObserver {
      nextToken
      __typename
    }
    EvolinciteExpenses {
      nextToken
      __typename
    }
    evolinciteProcessTypeID
    EvolinciteProcessType {
      id
      name
      order
      sellerCommission
      referrerCommission
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    initialGoalID
    InitialGoal {
      id
      name
      description
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    finalGoalID
    FinalGoal {
      id
      name
      description
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteCrmNegotiationQueryVariables,
  APITypes.GetEvolinciteCrmNegotiationQuery
>;
export const listEvolinciteCrmNegotiations = /* GraphQL */ `query ListEvolinciteCrmNegotiations(
  $filter: ModelEvolinciteCrmNegotiationFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteCrmNegotiations(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteCrmNegotiationsQueryVariables,
  APITypes.ListEvolinciteCrmNegotiationsQuery
>;
export const evolinciteCrmNegotiationsByParent = /* GraphQL */ `query EvolinciteCrmNegotiationsByParent(
  $parent: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteCrmNegotiationFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteCrmNegotiationsByParent(
    parent: $parent
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteCrmNegotiationsByParentQueryVariables,
  APITypes.EvolinciteCrmNegotiationsByParentQuery
>;
export const evolinciteCrmNegotiationsByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteCrmNegotiationsByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteCrmNegotiationFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteCrmNegotiationsByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteCrmNegotiationsByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteCrmNegotiationsByEvolinciteCompanyIDQuery
>;
export const evolinciteCrmNegotiationsByEvolinciteUserSellerID = /* GraphQL */ `query EvolinciteCrmNegotiationsByEvolinciteUserSellerID(
  $evolinciteUserSellerID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteCrmNegotiationFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteCrmNegotiationsByEvolinciteUserSellerID(
    evolinciteUserSellerID: $evolinciteUserSellerID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteCrmNegotiationsByEvolinciteUserSellerIDQueryVariables,
  APITypes.EvolinciteCrmNegotiationsByEvolinciteUserSellerIDQuery
>;
export const evolinciteCrmNegotiationsByEvolinciteUserReferrerID = /* GraphQL */ `query EvolinciteCrmNegotiationsByEvolinciteUserReferrerID(
  $evolinciteUserReferrerID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteCrmNegotiationFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteCrmNegotiationsByEvolinciteUserReferrerID(
    evolinciteUserReferrerID: $evolinciteUserReferrerID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteCrmNegotiationsByEvolinciteUserReferrerIDQueryVariables,
  APITypes.EvolinciteCrmNegotiationsByEvolinciteUserReferrerIDQuery
>;
export const evolinciteCrmNegotiationsByEvolinciteUserOwnerID = /* GraphQL */ `query EvolinciteCrmNegotiationsByEvolinciteUserOwnerID(
  $evolinciteUserOwnerID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteCrmNegotiationFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteCrmNegotiationsByEvolinciteUserOwnerID(
    evolinciteUserOwnerID: $evolinciteUserOwnerID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteCrmNegotiationsByEvolinciteUserOwnerIDQueryVariables,
  APITypes.EvolinciteCrmNegotiationsByEvolinciteUserOwnerIDQuery
>;
export const evolinciteCrmNegotiationsByEvolinciteCrmStateIDAndCreatedAt = /* GraphQL */ `query EvolinciteCrmNegotiationsByEvolinciteCrmStateIDAndCreatedAt(
  $evolinciteCrmStateID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteCrmNegotiationFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteCrmNegotiationsByEvolinciteCrmStateIDAndCreatedAt(
    evolinciteCrmStateID: $evolinciteCrmStateID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteCrmNegotiationsByEvolinciteCrmStateIDAndCreatedAtQueryVariables,
  APITypes.EvolinciteCrmNegotiationsByEvolinciteCrmStateIDAndCreatedAtQuery
>;
export const evolinciteCrmNegotiationsByEvolinciteCustomerID = /* GraphQL */ `query EvolinciteCrmNegotiationsByEvolinciteCustomerID(
  $evolinciteCustomerID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteCrmNegotiationFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteCrmNegotiationsByEvolinciteCustomerID(
    evolinciteCustomerID: $evolinciteCustomerID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteCrmNegotiationsByEvolinciteCustomerIDQueryVariables,
  APITypes.EvolinciteCrmNegotiationsByEvolinciteCustomerIDQuery
>;
export const evolinciteCrmNegotiationsByEvolinciteProcessTypeID = /* GraphQL */ `query EvolinciteCrmNegotiationsByEvolinciteProcessTypeID(
  $evolinciteProcessTypeID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteCrmNegotiationFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteCrmNegotiationsByEvolinciteProcessTypeID(
    evolinciteProcessTypeID: $evolinciteProcessTypeID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteCrmNegotiationsByEvolinciteProcessTypeIDQueryVariables,
  APITypes.EvolinciteCrmNegotiationsByEvolinciteProcessTypeIDQuery
>;
export const evolinciteCrmNegotiationsByInitialGoalID = /* GraphQL */ `query EvolinciteCrmNegotiationsByInitialGoalID(
  $initialGoalID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteCrmNegotiationFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteCrmNegotiationsByInitialGoalID(
    initialGoalID: $initialGoalID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteCrmNegotiationsByInitialGoalIDQueryVariables,
  APITypes.EvolinciteCrmNegotiationsByInitialGoalIDQuery
>;
export const evolinciteCrmNegotiationsByFinalGoalID = /* GraphQL */ `query EvolinciteCrmNegotiationsByFinalGoalID(
  $finalGoalID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteCrmNegotiationFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteCrmNegotiationsByFinalGoalID(
    finalGoalID: $finalGoalID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteCrmNegotiationsByFinalGoalIDQueryVariables,
  APITypes.EvolinciteCrmNegotiationsByFinalGoalIDQuery
>;
export const getEvolinciteRoom = /* GraphQL */ `query GetEvolinciteRoom($id: ID!) {
  getEvolinciteRoom(id: $id) {
    id
    Key
    name
    state
    meta
    EvolinciteUsers {
      nextToken
      __typename
    }
    EvolinciteMessages {
      nextToken
      __typename
    }
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteRoomQueryVariables,
  APITypes.GetEvolinciteRoomQuery
>;
export const listEvolinciteRooms = /* GraphQL */ `query ListEvolinciteRooms(
  $filter: ModelEvolinciteRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      Key
      name
      state
      meta
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteRoomsQueryVariables,
  APITypes.ListEvolinciteRoomsQuery
>;
export const evolinciteRoomsByKey = /* GraphQL */ `query EvolinciteRoomsByKey(
  $Key: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteRoomsByKey(
    Key: $Key
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      Key
      name
      state
      meta
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteRoomsByKeyQueryVariables,
  APITypes.EvolinciteRoomsByKeyQuery
>;
export const evolinciteRoomsByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteRoomsByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteRoomsByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      Key
      name
      state
      meta
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteRoomsByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteRoomsByEvolinciteCompanyIDQuery
>;
export const getEvolinciteMessage = /* GraphQL */ `query GetEvolinciteMessage($id: ID!) {
  getEvolinciteMessage(id: $id) {
    id
    content
    type
    state
    createdAt
    updatedAt
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserID
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteRoomID
    EvolinciteRoom {
      id
      Key
      name
      state
      meta
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteMessageQueryVariables,
  APITypes.GetEvolinciteMessageQuery
>;
export const listEvolinciteMessages = /* GraphQL */ `query ListEvolinciteMessages(
  $filter: ModelEvolinciteMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteMessages(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      content
      type
      state
      createdAt
      updatedAt
      evolinciteCompanyID
      evolinciteUserID
      evolinciteRoomID
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteMessagesQueryVariables,
  APITypes.ListEvolinciteMessagesQuery
>;
export const evolinciteMessagesByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteMessagesByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteMessagesByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      content
      type
      state
      createdAt
      updatedAt
      evolinciteCompanyID
      evolinciteUserID
      evolinciteRoomID
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteMessagesByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteMessagesByEvolinciteCompanyIDQuery
>;
export const evolinciteMessagesByEvolinciteUserID = /* GraphQL */ `query EvolinciteMessagesByEvolinciteUserID(
  $evolinciteUserID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteMessagesByEvolinciteUserID(
    evolinciteUserID: $evolinciteUserID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      content
      type
      state
      createdAt
      updatedAt
      evolinciteCompanyID
      evolinciteUserID
      evolinciteRoomID
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteMessagesByEvolinciteUserIDQueryVariables,
  APITypes.EvolinciteMessagesByEvolinciteUserIDQuery
>;
export const evolinciteMessagesByEvolinciteRoomIDAndCreatedAt = /* GraphQL */ `query EvolinciteMessagesByEvolinciteRoomIDAndCreatedAt(
  $evolinciteRoomID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteMessageFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteMessagesByEvolinciteRoomIDAndCreatedAt(
    evolinciteRoomID: $evolinciteRoomID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      content
      type
      state
      createdAt
      updatedAt
      evolinciteCompanyID
      evolinciteUserID
      evolinciteRoomID
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteMessagesByEvolinciteRoomIDAndCreatedAtQueryVariables,
  APITypes.EvolinciteMessagesByEvolinciteRoomIDAndCreatedAtQuery
>;
export const getEvolinciteCrmNegotiationFieldValue = /* GraphQL */ `query GetEvolinciteCrmNegotiationFieldValue($id: ID!) {
  getEvolinciteCrmNegotiationFieldValue(id: $id) {
    id
    value
    state
    evolinciteCrmNegotiationFieldID
    EvolinciteCrmNegotiationField {
      id
      field
      type
      required
      order
      state
      meta
      evolinciteCompanyID
      evolinciteCrmNegotiationSectionID
      createdAt
      updatedAt
      __typename
    }
    evolinciteCrmNegotiationID
    EvolinciteCrmNegotiation {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteCrmNegotiationFieldValueQueryVariables,
  APITypes.GetEvolinciteCrmNegotiationFieldValueQuery
>;
export const listEvolinciteCrmNegotiationFieldValues = /* GraphQL */ `query ListEvolinciteCrmNegotiationFieldValues(
  $filter: ModelEvolinciteCrmNegotiationFieldValueFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteCrmNegotiationFieldValues(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      value
      state
      evolinciteCrmNegotiationFieldID
      evolinciteCrmNegotiationID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteCrmNegotiationFieldValuesQueryVariables,
  APITypes.ListEvolinciteCrmNegotiationFieldValuesQuery
>;
export const evolinciteCrmNegotiationFieldValuesByEvolinciteCrmNegotiationFieldID = /* GraphQL */ `query EvolinciteCrmNegotiationFieldValuesByEvolinciteCrmNegotiationFieldID(
  $evolinciteCrmNegotiationFieldID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteCrmNegotiationFieldValueFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteCrmNegotiationFieldValuesByEvolinciteCrmNegotiationFieldID(
    evolinciteCrmNegotiationFieldID: $evolinciteCrmNegotiationFieldID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      value
      state
      evolinciteCrmNegotiationFieldID
      evolinciteCrmNegotiationID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteCrmNegotiationFieldValuesByEvolinciteCrmNegotiationFieldIDQueryVariables,
  APITypes.EvolinciteCrmNegotiationFieldValuesByEvolinciteCrmNegotiationFieldIDQuery
>;
export const evolinciteCrmNegotiationFieldValuesByEvolinciteCrmNegotiationID = /* GraphQL */ `query EvolinciteCrmNegotiationFieldValuesByEvolinciteCrmNegotiationID(
  $evolinciteCrmNegotiationID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteCrmNegotiationFieldValueFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteCrmNegotiationFieldValuesByEvolinciteCrmNegotiationID(
    evolinciteCrmNegotiationID: $evolinciteCrmNegotiationID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      value
      state
      evolinciteCrmNegotiationFieldID
      evolinciteCrmNegotiationID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteCrmNegotiationFieldValuesByEvolinciteCrmNegotiationIDQueryVariables,
  APITypes.EvolinciteCrmNegotiationFieldValuesByEvolinciteCrmNegotiationIDQuery
>;
export const getEvolinciteEmail = /* GraphQL */ `query GetEvolinciteEmail($id: ID!) {
  getEvolinciteEmail(id: $id) {
    id
    from
    to
    content
    subject
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteEmailQueryVariables,
  APITypes.GetEvolinciteEmailQuery
>;
export const listEvolinciteEmails = /* GraphQL */ `query ListEvolinciteEmails(
  $filter: ModelEvolinciteEmailFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteEmails(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      from
      to
      content
      subject
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteEmailsQueryVariables,
  APITypes.ListEvolinciteEmailsQuery
>;
export const evolinciteEmailsByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteEmailsByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteEmailFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteEmailsByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      from
      to
      content
      subject
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteEmailsByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteEmailsByEvolinciteCompanyIDQuery
>;
export const getEvolinciteEmailTemplate = /* GraphQL */ `query GetEvolinciteEmailTemplate($id: ID!) {
  getEvolinciteEmailTemplate(id: $id) {
    id
    content
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteEmailTemplateQueryVariables,
  APITypes.GetEvolinciteEmailTemplateQuery
>;
export const listEvolinciteEmailTemplates = /* GraphQL */ `query ListEvolinciteEmailTemplates(
  $filter: ModelEvolinciteEmailTemplateFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteEmailTemplates(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      content
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteEmailTemplatesQueryVariables,
  APITypes.ListEvolinciteEmailTemplatesQuery
>;
export const evolinciteEmailTemplatesByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteEmailTemplatesByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteEmailTemplateFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteEmailTemplatesByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      content
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteEmailTemplatesByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteEmailTemplatesByEvolinciteCompanyIDQuery
>;
export const getEvolinciteNotification = /* GraphQL */ `query GetEvolinciteNotification($id: ID!) {
  getEvolinciteNotification(id: $id) {
    id
    content
    title
    priority
    type
    meta
    state
    evolinciteUserID
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteNotificationQueryVariables,
  APITypes.GetEvolinciteNotificationQuery
>;
export const listEvolinciteNotifications = /* GraphQL */ `query ListEvolinciteNotifications(
  $filter: ModelEvolinciteNotificationFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteNotifications(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      content
      title
      priority
      type
      meta
      state
      evolinciteUserID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteNotificationsQueryVariables,
  APITypes.ListEvolinciteNotificationsQuery
>;
export const evolinciteNotificationsByEvolinciteUserIDAndCreatedAt = /* GraphQL */ `query EvolinciteNotificationsByEvolinciteUserIDAndCreatedAt(
  $evolinciteUserID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteNotificationFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteNotificationsByEvolinciteUserIDAndCreatedAt(
    evolinciteUserID: $evolinciteUserID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      content
      title
      priority
      type
      meta
      state
      evolinciteUserID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteNotificationsByEvolinciteUserIDAndCreatedAtQueryVariables,
  APITypes.EvolinciteNotificationsByEvolinciteUserIDAndCreatedAtQuery
>;
export const evolinciteNotificationsByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteNotificationsByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteNotificationFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteNotificationsByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      content
      title
      priority
      type
      meta
      state
      evolinciteUserID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteNotificationsByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteNotificationsByEvolinciteCompanyIDQuery
>;
export const getEvolinciteUserDepartment = /* GraphQL */ `query GetEvolinciteUserDepartment($id: ID!) {
  getEvolinciteUserDepartment(id: $id) {
    id
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserID
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteDepartmentID
    EvolinciteDepartment {
      id
      name
      parent
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteUserDepartmentQueryVariables,
  APITypes.GetEvolinciteUserDepartmentQuery
>;
export const listEvolinciteUserDepartments = /* GraphQL */ `query ListEvolinciteUserDepartments(
  $filter: ModelEvolinciteUserDepartmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteUserDepartments(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      evolinciteCompanyID
      evolinciteUserID
      evolinciteDepartmentID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteUserDepartmentsQueryVariables,
  APITypes.ListEvolinciteUserDepartmentsQuery
>;
export const evolinciteUserDepartmentsByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteUserDepartmentsByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteUserDepartmentFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteUserDepartmentsByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      evolinciteCompanyID
      evolinciteUserID
      evolinciteDepartmentID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteUserDepartmentsByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteUserDepartmentsByEvolinciteCompanyIDQuery
>;
export const evolinciteUserDepartmentsByEvolinciteUserID = /* GraphQL */ `query EvolinciteUserDepartmentsByEvolinciteUserID(
  $evolinciteUserID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteUserDepartmentFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteUserDepartmentsByEvolinciteUserID(
    evolinciteUserID: $evolinciteUserID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      evolinciteCompanyID
      evolinciteUserID
      evolinciteDepartmentID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteUserDepartmentsByEvolinciteUserIDQueryVariables,
  APITypes.EvolinciteUserDepartmentsByEvolinciteUserIDQuery
>;
export const evolinciteUserDepartmentsByEvolinciteDepartmentID = /* GraphQL */ `query EvolinciteUserDepartmentsByEvolinciteDepartmentID(
  $evolinciteDepartmentID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteUserDepartmentFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteUserDepartmentsByEvolinciteDepartmentID(
    evolinciteDepartmentID: $evolinciteDepartmentID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      evolinciteCompanyID
      evolinciteUserID
      evolinciteDepartmentID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteUserDepartmentsByEvolinciteDepartmentIDQueryVariables,
  APITypes.EvolinciteUserDepartmentsByEvolinciteDepartmentIDQuery
>;
export const getEvolinciteUserEvolinciteCompany = /* GraphQL */ `query GetEvolinciteUserEvolinciteCompany($id: ID!) {
  getEvolinciteUserEvolinciteCompany(id: $id) {
    id
    state
    evolinciteUserID
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteUserEvolinciteCompanyQueryVariables,
  APITypes.GetEvolinciteUserEvolinciteCompanyQuery
>;
export const listEvolinciteUserEvolinciteCompanies = /* GraphQL */ `query ListEvolinciteUserEvolinciteCompanies(
  $filter: ModelEvolinciteUserEvolinciteCompanyFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteUserEvolinciteCompanies(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      evolinciteUserID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteUserEvolinciteCompaniesQueryVariables,
  APITypes.ListEvolinciteUserEvolinciteCompaniesQuery
>;
export const evolinciteUserEvolinciteCompaniesByEvolinciteUserID = /* GraphQL */ `query EvolinciteUserEvolinciteCompaniesByEvolinciteUserID(
  $evolinciteUserID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteUserEvolinciteCompanyFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteUserEvolinciteCompaniesByEvolinciteUserID(
    evolinciteUserID: $evolinciteUserID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      evolinciteUserID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteUserEvolinciteCompaniesByEvolinciteUserIDQueryVariables,
  APITypes.EvolinciteUserEvolinciteCompaniesByEvolinciteUserIDQuery
>;
export const evolinciteUserEvolinciteCompaniesByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteUserEvolinciteCompaniesByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteUserEvolinciteCompanyFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteUserEvolinciteCompaniesByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      state
      evolinciteUserID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteUserEvolinciteCompaniesByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteUserEvolinciteCompaniesByEvolinciteCompanyIDQuery
>;
export const getEvolinciteUser = /* GraphQL */ `query GetEvolinciteUser($id: ID!) {
  getEvolinciteUser(id: $id) {
    id
    name
    nit
    phone
    picture
    email
    sub
    meta
    cv
    contract
    memos
    personalMail
    personalPhone
    state
    EvolinciteUserEvolinciteCompanies {
      nextToken
      __typename
    }
    EvolinciteActivitiesOwner {
      nextToken
      __typename
    }
    EvolinciteActivitiesParticipants {
      nextToken
      __typename
    }
    EvolinciteRooms {
      nextToken
      __typename
    }
    EvolinciteUserDepartments {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiationsOwner {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiationsReferrer {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiationsSeller {
      nextToken
      __typename
    }
    EvolincitePaymentsUserSeller {
      nextToken
      __typename
    }
    EvolincitePaymentsUserReferrer {
      nextToken
      __typename
    }
    EvolinciteNotifications {
      nextToken
      __typename
    }
    EvolinciteMessages {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiationLogs {
      nextToken
      __typename
    }
    EvolinciteComments {
      nextToken
      __typename
    }
    EvolincitePermissions {
      nextToken
      __typename
    }
    EvolinciteUserSettings {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiationsObserver {
      nextToken
      __typename
    }
    EvolinciteUserEvolinciteJobTitle {
      nextToken
      __typename
    }
    EvolinciteWalletPaymentLogs {
      nextToken
      __typename
    }
    EvolinciteExpenseLogs {
      nextToken
      __typename
    }
    EvolinciteExpenses {
      nextToken
      __typename
    }
    EvolinciteTicket {
      nextToken
      __typename
    }
    EvolinciteTicketLogs {
      nextToken
      __typename
    }
    EvolinciteFiles {
      nextToken
      __typename
    }
    EvolinciteFolders {
      nextToken
      __typename
    }
    EvolinciteArticles {
      nextToken
      __typename
    }
    EvolinciteArticleComments {
      nextToken
      __typename
    }
    EvolinciteFoldersOwner {
      nextToken
      __typename
    }
    EvolinciteFormConfigurations {
      nextToken
      __typename
    }
    EvolinciteFormAnswers {
      nextToken
      __typename
    }
    EvolinciteMails {
      nextToken
      __typename
    }
    EvolinciteEmployeeObservations {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteUserQueryVariables,
  APITypes.GetEvolinciteUserQuery
>;
export const listEvolinciteUsers = /* GraphQL */ `query ListEvolinciteUsers(
  $filter: ModelEvolinciteUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteUsersQueryVariables,
  APITypes.ListEvolinciteUsersQuery
>;
export const getEvolinciteCompany = /* GraphQL */ `query GetEvolinciteCompany($id: ID!) {
  getEvolinciteCompany(id: $id) {
    id
    name
    nit
    picture
    meta
    state
    EvolinciteUserEvolinciteCompanies {
      nextToken
      __typename
    }
    evolinciteSubscriptionID
    EvolinciteSubscription {
      id
      name
      price
      dateInitial
      dateFinal
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteWalletPayments {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiationFields {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiationSections {
      nextToken
      __typename
    }
    EvolinciteCrmAutomations {
      nextToken
      __typename
    }
    EvolinciteUserDepartments {
      nextToken
      __typename
    }
    EvolinciteDepartments {
      nextToken
      __typename
    }
    EvolinciteCustomers {
      nextToken
      __typename
    }
    EvolinciteCrmPipelines {
      nextToken
      __typename
    }
    EvolinciteCrmStates {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiations {
      nextToken
      __typename
    }
    EvolinciteJobTitles {
      nextToken
      __typename
    }
    EvolinciteNotifications {
      nextToken
      __typename
    }
    EvolinciteEmailTemplates {
      nextToken
      __typename
    }
    EvolinciteEmails {
      nextToken
      __typename
    }
    EvolinciteMessages {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiationLogs {
      nextToken
      __typename
    }
    EvolinciteActivities {
      nextToken
      __typename
    }
    EvolincitePermissions {
      nextToken
      __typename
    }
    EvolinciteRoles {
      nextToken
      __typename
    }
    EvolinciteUserSettings {
      nextToken
      __typename
    }
    EvolinciteRooms {
      nextToken
      __typename
    }
    EvolinciteUserEvolinciteJobTitle {
      nextToken
      __typename
    }
    EvolinciteExpenseTypes {
      nextToken
      __typename
    }
    EvolinciteExpenses {
      nextToken
      __typename
    }
    EvolinciteProcessTypes {
      nextToken
      __typename
    }
    EvolinciteGoal {
      nextToken
      __typename
    }
    EvolinciteWalletPaymentLogs {
      nextToken
      __typename
    }
    EvolinciteExpenseLogs {
      nextToken
      __typename
    }
    EvolinciteTicketOwner {
      nextToken
      __typename
    }
    EvolinciteTicketOrigin {
      nextToken
      __typename
    }
    EvolinciteTicketLogs {
      nextToken
      __typename
    }
    EvolinciteFiles {
      nextToken
      __typename
    }
    EvolinciteFolders {
      nextToken
      __typename
    }
    EvolinciteArticles {
      nextToken
      __typename
    }
    EvolinciteFormConfigurations {
      nextToken
      __typename
    }
    EvolincitePaymentAutomations {
      nextToken
      __typename
    }
    EvolinciteMails {
      nextToken
      __typename
    }
    EvolinciteMailTemplates {
      nextToken
      __typename
    }
    EvolinciteCompanySubscriptions {
      nextToken
      __typename
    }
    EvolinciteFormAnswers {
      nextToken
      __typename
    }
    EvolinciteEmployeeObservations {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteCompanyQueryVariables,
  APITypes.GetEvolinciteCompanyQuery
>;
export const listEvolinciteCompanies = /* GraphQL */ `query ListEvolinciteCompanies(
  $filter: ModelEvolinciteCompanyFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteCompanies(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteCompaniesQueryVariables,
  APITypes.ListEvolinciteCompaniesQuery
>;
export const evolinciteCompaniesByNit = /* GraphQL */ `query EvolinciteCompaniesByNit(
  $nit: String!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteCompanyFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteCompaniesByNit(
    nit: $nit
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteCompaniesByNitQueryVariables,
  APITypes.EvolinciteCompaniesByNitQuery
>;
export const evolinciteCompaniesByEvolinciteSubscriptionID = /* GraphQL */ `query EvolinciteCompaniesByEvolinciteSubscriptionID(
  $evolinciteSubscriptionID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteCompanyFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteCompaniesByEvolinciteSubscriptionID(
    evolinciteSubscriptionID: $evolinciteSubscriptionID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteCompaniesByEvolinciteSubscriptionIDQueryVariables,
  APITypes.EvolinciteCompaniesByEvolinciteSubscriptionIDQuery
>;
export const getEvolinciteGoal = /* GraphQL */ `query GetEvolinciteGoal($id: ID!) {
  getEvolinciteGoal(id: $id) {
    id
    name
    description
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCrmNegotiationsInitial {
      nextToken
      __typename
    }
    EvolinciteCrmNegotiationsFinal {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteGoalQueryVariables,
  APITypes.GetEvolinciteGoalQuery
>;
export const listEvolinciteGoals = /* GraphQL */ `query ListEvolinciteGoals(
  $filter: ModelEvolinciteGoalFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteGoals(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteGoalsQueryVariables,
  APITypes.ListEvolinciteGoalsQuery
>;
export const evolinciteGoalsByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteGoalsByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteGoalFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteGoalsByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteGoalsByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteGoalsByEvolinciteCompanyIDQuery
>;
export const getEvolinciteWalletPaymentLog = /* GraphQL */ `query GetEvolinciteWalletPaymentLog($id: ID!) {
  getEvolinciteWalletPaymentLog(id: $id) {
    id
    log
    state
    evolinciteUserID
    evolinciteCompanyID
    evolinciteWalletPaymentID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteWalletPayment {
      id
      amount
      scheduledDate
      datePayment
      paymentStatus
      prePayment
      postPayment
      observations
      voucher
      transactionType
      reference
      amountInterest
      amountCollection
      state
      evolinciteCompanyID
      evolinciteUserReferrerID
      evolinciteUserSellerID
      evolinciteCrmNegotiationID
      evolinciteCustomerID
      evolinciteUserResponsibleID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteWalletPaymentLogQueryVariables,
  APITypes.GetEvolinciteWalletPaymentLogQuery
>;
export const listEvolinciteWalletPaymentLogs = /* GraphQL */ `query ListEvolinciteWalletPaymentLogs(
  $filter: ModelEvolinciteWalletPaymentLogFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteWalletPaymentLogs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      log
      state
      evolinciteUserID
      evolinciteCompanyID
      evolinciteWalletPaymentID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteWalletPaymentLogsQueryVariables,
  APITypes.ListEvolinciteWalletPaymentLogsQuery
>;
export const evolinciteWalletPaymentLogsByEvolinciteUserID = /* GraphQL */ `query EvolinciteWalletPaymentLogsByEvolinciteUserID(
  $evolinciteUserID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteWalletPaymentLogFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteWalletPaymentLogsByEvolinciteUserID(
    evolinciteUserID: $evolinciteUserID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      log
      state
      evolinciteUserID
      evolinciteCompanyID
      evolinciteWalletPaymentID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteWalletPaymentLogsByEvolinciteUserIDQueryVariables,
  APITypes.EvolinciteWalletPaymentLogsByEvolinciteUserIDQuery
>;
export const evolinciteWalletPaymentLogsByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteWalletPaymentLogsByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteWalletPaymentLogFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteWalletPaymentLogsByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      log
      state
      evolinciteUserID
      evolinciteCompanyID
      evolinciteWalletPaymentID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteWalletPaymentLogsByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteWalletPaymentLogsByEvolinciteCompanyIDQuery
>;
export const evolinciteWalletPaymentLogsByEvolinciteWalletPaymentIDAndCreatedAt = /* GraphQL */ `query EvolinciteWalletPaymentLogsByEvolinciteWalletPaymentIDAndCreatedAt(
  $evolinciteWalletPaymentID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteWalletPaymentLogFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteWalletPaymentLogsByEvolinciteWalletPaymentIDAndCreatedAt(
    evolinciteWalletPaymentID: $evolinciteWalletPaymentID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      log
      state
      evolinciteUserID
      evolinciteCompanyID
      evolinciteWalletPaymentID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteWalletPaymentLogsByEvolinciteWalletPaymentIDAndCreatedAtQueryVariables,
  APITypes.EvolinciteWalletPaymentLogsByEvolinciteWalletPaymentIDAndCreatedAtQuery
>;
export const getEvolinciteExpenseLog = /* GraphQL */ `query GetEvolinciteExpenseLog($id: ID!) {
  getEvolinciteExpenseLog(id: $id) {
    id
    log
    state
    evolinciteUserID
    evolinciteCompanyID
    evolinciteExpenseID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteExpense {
      id
      amount
      process
      expenseState
      expenseDate
      observations
      voucher
      transactionType
      reference
      state
      evolinciteExpenseTypeID
      evolinciteCrmNegotiationID
      evolinciteCompanyID
      evolinciteUserID
      evolinciteUserResponsibleID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteExpenseLogQueryVariables,
  APITypes.GetEvolinciteExpenseLogQuery
>;
export const listEvolinciteExpenseLogs = /* GraphQL */ `query ListEvolinciteExpenseLogs(
  $filter: ModelEvolinciteExpenseLogFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteExpenseLogs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      log
      state
      evolinciteUserID
      evolinciteCompanyID
      evolinciteExpenseID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteExpenseLogsQueryVariables,
  APITypes.ListEvolinciteExpenseLogsQuery
>;
export const evolinciteExpenseLogsByEvolinciteUserID = /* GraphQL */ `query EvolinciteExpenseLogsByEvolinciteUserID(
  $evolinciteUserID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteExpenseLogFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteExpenseLogsByEvolinciteUserID(
    evolinciteUserID: $evolinciteUserID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      log
      state
      evolinciteUserID
      evolinciteCompanyID
      evolinciteExpenseID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteExpenseLogsByEvolinciteUserIDQueryVariables,
  APITypes.EvolinciteExpenseLogsByEvolinciteUserIDQuery
>;
export const evolinciteExpenseLogsByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteExpenseLogsByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteExpenseLogFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteExpenseLogsByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      log
      state
      evolinciteUserID
      evolinciteCompanyID
      evolinciteExpenseID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteExpenseLogsByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteExpenseLogsByEvolinciteCompanyIDQuery
>;
export const evolinciteExpenseLogsByEvolinciteExpenseIDAndCreatedAt = /* GraphQL */ `query EvolinciteExpenseLogsByEvolinciteExpenseIDAndCreatedAt(
  $evolinciteExpenseID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteExpenseLogFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteExpenseLogsByEvolinciteExpenseIDAndCreatedAt(
    evolinciteExpenseID: $evolinciteExpenseID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      log
      state
      evolinciteUserID
      evolinciteCompanyID
      evolinciteExpenseID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteExpenseLogsByEvolinciteExpenseIDAndCreatedAtQueryVariables,
  APITypes.EvolinciteExpenseLogsByEvolinciteExpenseIDAndCreatedAtQuery
>;
export const getEvolinciteTicket = /* GraphQL */ `query GetEvolinciteTicket($id: ID!) {
  getEvolinciteTicket(id: $id) {
    id
    name
    description
    documents
    meta
    ticketState
    state
    evolinciteUserID
    evolinciteCompanyOwnerID
    evolinciteCompanyOriginID
    EvolinciteCompanyOwner {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteCompanyOrigin {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteTicketLogs {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteTicketQueryVariables,
  APITypes.GetEvolinciteTicketQuery
>;
export const listEvolinciteTickets = /* GraphQL */ `query ListEvolinciteTickets(
  $filter: ModelEvolinciteTicketFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      documents
      meta
      ticketState
      state
      evolinciteUserID
      evolinciteCompanyOwnerID
      evolinciteCompanyOriginID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteTicketsQueryVariables,
  APITypes.ListEvolinciteTicketsQuery
>;
export const evolinciteTicketsByEvolinciteUserID = /* GraphQL */ `query EvolinciteTicketsByEvolinciteUserID(
  $evolinciteUserID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteTicketFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteTicketsByEvolinciteUserID(
    evolinciteUserID: $evolinciteUserID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      documents
      meta
      ticketState
      state
      evolinciteUserID
      evolinciteCompanyOwnerID
      evolinciteCompanyOriginID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteTicketsByEvolinciteUserIDQueryVariables,
  APITypes.EvolinciteTicketsByEvolinciteUserIDQuery
>;
export const evolinciteTicketsByEvolinciteCompanyOwnerID = /* GraphQL */ `query EvolinciteTicketsByEvolinciteCompanyOwnerID(
  $evolinciteCompanyOwnerID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteTicketFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteTicketsByEvolinciteCompanyOwnerID(
    evolinciteCompanyOwnerID: $evolinciteCompanyOwnerID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      documents
      meta
      ticketState
      state
      evolinciteUserID
      evolinciteCompanyOwnerID
      evolinciteCompanyOriginID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteTicketsByEvolinciteCompanyOwnerIDQueryVariables,
  APITypes.EvolinciteTicketsByEvolinciteCompanyOwnerIDQuery
>;
export const evolinciteTicketsByEvolinciteCompanyOriginID = /* GraphQL */ `query EvolinciteTicketsByEvolinciteCompanyOriginID(
  $evolinciteCompanyOriginID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteTicketFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteTicketsByEvolinciteCompanyOriginID(
    evolinciteCompanyOriginID: $evolinciteCompanyOriginID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      documents
      meta
      ticketState
      state
      evolinciteUserID
      evolinciteCompanyOwnerID
      evolinciteCompanyOriginID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteTicketsByEvolinciteCompanyOriginIDQueryVariables,
  APITypes.EvolinciteTicketsByEvolinciteCompanyOriginIDQuery
>;
export const getEvolinciteTicketLog = /* GraphQL */ `query GetEvolinciteTicketLog($id: ID!) {
  getEvolinciteTicketLog(id: $id) {
    id
    log
    state
    evolinciteUserID
    evolinciteCompanyID
    evolinciteTicketID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteTicket {
      id
      name
      description
      documents
      meta
      ticketState
      state
      evolinciteUserID
      evolinciteCompanyOwnerID
      evolinciteCompanyOriginID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteTicketLogQueryVariables,
  APITypes.GetEvolinciteTicketLogQuery
>;
export const listEvolinciteTicketLogs = /* GraphQL */ `query ListEvolinciteTicketLogs(
  $filter: ModelEvolinciteTicketLogFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteTicketLogs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      log
      state
      evolinciteUserID
      evolinciteCompanyID
      evolinciteTicketID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteTicketLogsQueryVariables,
  APITypes.ListEvolinciteTicketLogsQuery
>;
export const evolinciteTicketLogsByEvolinciteUserID = /* GraphQL */ `query EvolinciteTicketLogsByEvolinciteUserID(
  $evolinciteUserID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteTicketLogFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteTicketLogsByEvolinciteUserID(
    evolinciteUserID: $evolinciteUserID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      log
      state
      evolinciteUserID
      evolinciteCompanyID
      evolinciteTicketID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteTicketLogsByEvolinciteUserIDQueryVariables,
  APITypes.EvolinciteTicketLogsByEvolinciteUserIDQuery
>;
export const evolinciteTicketLogsByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteTicketLogsByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteTicketLogFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteTicketLogsByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      log
      state
      evolinciteUserID
      evolinciteCompanyID
      evolinciteTicketID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteTicketLogsByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteTicketLogsByEvolinciteCompanyIDQuery
>;
export const evolinciteTicketLogsByEvolinciteTicketIDAndCreatedAt = /* GraphQL */ `query EvolinciteTicketLogsByEvolinciteTicketIDAndCreatedAt(
  $evolinciteTicketID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteTicketLogFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteTicketLogsByEvolinciteTicketIDAndCreatedAt(
    evolinciteTicketID: $evolinciteTicketID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      log
      state
      evolinciteUserID
      evolinciteCompanyID
      evolinciteTicketID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteTicketLogsByEvolinciteTicketIDAndCreatedAtQueryVariables,
  APITypes.EvolinciteTicketLogsByEvolinciteTicketIDAndCreatedAtQuery
>;
export const getEvolinciteFile = /* GraphQL */ `query GetEvolinciteFile($id: ID!) {
  getEvolinciteFile(id: $id) {
    id
    name
    size
    meta
    state
    evolinciteUserID
    evolinciteCompanyID
    evolinciteFolderID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteFolder {
      id
      parent
      name
      meta
      state
      evolinciteUserID
      evolinciteUserOwnerID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteFileQueryVariables,
  APITypes.GetEvolinciteFileQuery
>;
export const listEvolinciteFiles = /* GraphQL */ `query ListEvolinciteFiles(
  $filter: ModelEvolinciteFileFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteFiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      size
      meta
      state
      evolinciteUserID
      evolinciteCompanyID
      evolinciteFolderID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteFilesQueryVariables,
  APITypes.ListEvolinciteFilesQuery
>;
export const evolinciteFilesByEvolinciteUserID = /* GraphQL */ `query EvolinciteFilesByEvolinciteUserID(
  $evolinciteUserID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteFileFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteFilesByEvolinciteUserID(
    evolinciteUserID: $evolinciteUserID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      size
      meta
      state
      evolinciteUserID
      evolinciteCompanyID
      evolinciteFolderID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteFilesByEvolinciteUserIDQueryVariables,
  APITypes.EvolinciteFilesByEvolinciteUserIDQuery
>;
export const evolinciteFilesByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteFilesByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteFileFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteFilesByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      size
      meta
      state
      evolinciteUserID
      evolinciteCompanyID
      evolinciteFolderID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteFilesByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteFilesByEvolinciteCompanyIDQuery
>;
export const evolinciteFilesByEvolinciteFolderIDAndUpdatedAt = /* GraphQL */ `query EvolinciteFilesByEvolinciteFolderIDAndUpdatedAt(
  $evolinciteFolderID: ID!
  $updatedAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteFileFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteFilesByEvolinciteFolderIDAndUpdatedAt(
    evolinciteFolderID: $evolinciteFolderID
    updatedAt: $updatedAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      size
      meta
      state
      evolinciteUserID
      evolinciteCompanyID
      evolinciteFolderID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteFilesByEvolinciteFolderIDAndUpdatedAtQueryVariables,
  APITypes.EvolinciteFilesByEvolinciteFolderIDAndUpdatedAtQuery
>;
export const getEvolinciteFolder = /* GraphQL */ `query GetEvolinciteFolder($id: ID!) {
  getEvolinciteFolder(id: $id) {
    id
    parent
    name
    meta
    state
    evolinciteUserID
    evolinciteUserOwnerID
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUserOwner {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteFiles {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteFolderQueryVariables,
  APITypes.GetEvolinciteFolderQuery
>;
export const listEvolinciteFolders = /* GraphQL */ `query ListEvolinciteFolders(
  $filter: ModelEvolinciteFolderFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteFolders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      parent
      name
      meta
      state
      evolinciteUserID
      evolinciteUserOwnerID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteFoldersQueryVariables,
  APITypes.ListEvolinciteFoldersQuery
>;
export const evolinciteFoldersByParent = /* GraphQL */ `query EvolinciteFoldersByParent(
  $parent: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteFolderFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteFoldersByParent(
    parent: $parent
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      parent
      name
      meta
      state
      evolinciteUserID
      evolinciteUserOwnerID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteFoldersByParentQueryVariables,
  APITypes.EvolinciteFoldersByParentQuery
>;
export const evolinciteFoldersByEvolinciteUserID = /* GraphQL */ `query EvolinciteFoldersByEvolinciteUserID(
  $evolinciteUserID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteFolderFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteFoldersByEvolinciteUserID(
    evolinciteUserID: $evolinciteUserID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      parent
      name
      meta
      state
      evolinciteUserID
      evolinciteUserOwnerID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteFoldersByEvolinciteUserIDQueryVariables,
  APITypes.EvolinciteFoldersByEvolinciteUserIDQuery
>;
export const evolinciteFoldersByEvolinciteUserOwnerID = /* GraphQL */ `query EvolinciteFoldersByEvolinciteUserOwnerID(
  $evolinciteUserOwnerID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteFolderFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteFoldersByEvolinciteUserOwnerID(
    evolinciteUserOwnerID: $evolinciteUserOwnerID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      parent
      name
      meta
      state
      evolinciteUserID
      evolinciteUserOwnerID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteFoldersByEvolinciteUserOwnerIDQueryVariables,
  APITypes.EvolinciteFoldersByEvolinciteUserOwnerIDQuery
>;
export const evolinciteFoldersByEvolinciteCompanyIDAndCreatedAt = /* GraphQL */ `query EvolinciteFoldersByEvolinciteCompanyIDAndCreatedAt(
  $evolinciteCompanyID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteFolderFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteFoldersByEvolinciteCompanyIDAndCreatedAt(
    evolinciteCompanyID: $evolinciteCompanyID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      parent
      name
      meta
      state
      evolinciteUserID
      evolinciteUserOwnerID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteFoldersByEvolinciteCompanyIDAndCreatedAtQueryVariables,
  APITypes.EvolinciteFoldersByEvolinciteCompanyIDAndCreatedAtQuery
>;
export const getEvolinciteArticle = /* GraphQL */ `query GetEvolinciteArticle($id: ID!) {
  getEvolinciteArticle(id: $id) {
    id
    front
    cover
    title
    content
    articleState
    visibility
    publicationDate
    meta
    files
    state
    evolinciteUserID
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteArticleComments {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteArticleQueryVariables,
  APITypes.GetEvolinciteArticleQuery
>;
export const listEvolinciteArticles = /* GraphQL */ `query ListEvolinciteArticles(
  $filter: ModelEvolinciteArticleFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteArticles(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      front
      cover
      title
      content
      articleState
      visibility
      publicationDate
      meta
      files
      state
      evolinciteUserID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteArticlesQueryVariables,
  APITypes.ListEvolinciteArticlesQuery
>;
export const evolinciteArticlesByEvolinciteUserID = /* GraphQL */ `query EvolinciteArticlesByEvolinciteUserID(
  $evolinciteUserID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteArticleFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteArticlesByEvolinciteUserID(
    evolinciteUserID: $evolinciteUserID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      front
      cover
      title
      content
      articleState
      visibility
      publicationDate
      meta
      files
      state
      evolinciteUserID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteArticlesByEvolinciteUserIDQueryVariables,
  APITypes.EvolinciteArticlesByEvolinciteUserIDQuery
>;
export const evolinciteArticlesByEvolinciteCompanyIDAndCreatedAt = /* GraphQL */ `query EvolinciteArticlesByEvolinciteCompanyIDAndCreatedAt(
  $evolinciteCompanyID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteArticleFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteArticlesByEvolinciteCompanyIDAndCreatedAt(
    evolinciteCompanyID: $evolinciteCompanyID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      front
      cover
      title
      content
      articleState
      visibility
      publicationDate
      meta
      files
      state
      evolinciteUserID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteArticlesByEvolinciteCompanyIDAndCreatedAtQueryVariables,
  APITypes.EvolinciteArticlesByEvolinciteCompanyIDAndCreatedAtQuery
>;
export const getEvolinciteArticleComment = /* GraphQL */ `query GetEvolinciteArticleComment($id: ID!) {
  getEvolinciteArticleComment(id: $id) {
    id
    content
    state
    evolinciteUserID
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteArticleID
    EvolinciteArticle {
      id
      front
      cover
      title
      content
      articleState
      visibility
      publicationDate
      meta
      files
      state
      evolinciteUserID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteArticleCommentQueryVariables,
  APITypes.GetEvolinciteArticleCommentQuery
>;
export const listEvolinciteArticleComments = /* GraphQL */ `query ListEvolinciteArticleComments(
  $filter: ModelEvolinciteArticleCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteArticleComments(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      content
      state
      evolinciteUserID
      evolinciteArticleID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteArticleCommentsQueryVariables,
  APITypes.ListEvolinciteArticleCommentsQuery
>;
export const evolinciteArticleCommentsByEvolinciteUserID = /* GraphQL */ `query EvolinciteArticleCommentsByEvolinciteUserID(
  $evolinciteUserID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteArticleCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteArticleCommentsByEvolinciteUserID(
    evolinciteUserID: $evolinciteUserID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      content
      state
      evolinciteUserID
      evolinciteArticleID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteArticleCommentsByEvolinciteUserIDQueryVariables,
  APITypes.EvolinciteArticleCommentsByEvolinciteUserIDQuery
>;
export const evolinciteArticleCommentsByEvolinciteArticleIDAndCreatedAt = /* GraphQL */ `query EvolinciteArticleCommentsByEvolinciteArticleIDAndCreatedAt(
  $evolinciteArticleID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteArticleCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteArticleCommentsByEvolinciteArticleIDAndCreatedAt(
    evolinciteArticleID: $evolinciteArticleID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      content
      state
      evolinciteUserID
      evolinciteArticleID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteArticleCommentsByEvolinciteArticleIDAndCreatedAtQueryVariables,
  APITypes.EvolinciteArticleCommentsByEvolinciteArticleIDAndCreatedAtQuery
>;
export const getEvolinciteFormConfiguration = /* GraphQL */ `query GetEvolinciteFormConfiguration($id: ID!) {
  getEvolinciteFormConfiguration(id: $id) {
    id
    key
    name
    config
    meta
    title
    description
    observations
    front
    state
    evolinciteUserID
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    EvolinciteFormAnswers {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteFormConfigurationQueryVariables,
  APITypes.GetEvolinciteFormConfigurationQuery
>;
export const listEvolinciteFormConfigurations = /* GraphQL */ `query ListEvolinciteFormConfigurations(
  $filter: ModelEvolinciteFormConfigurationFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteFormConfigurations(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      key
      name
      config
      meta
      title
      description
      observations
      front
      state
      evolinciteUserID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteFormConfigurationsQueryVariables,
  APITypes.ListEvolinciteFormConfigurationsQuery
>;
export const evolinciteFormConfigurationsByKey = /* GraphQL */ `query EvolinciteFormConfigurationsByKey(
  $key: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteFormConfigurationFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteFormConfigurationsByKey(
    key: $key
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      key
      name
      config
      meta
      title
      description
      observations
      front
      state
      evolinciteUserID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteFormConfigurationsByKeyQueryVariables,
  APITypes.EvolinciteFormConfigurationsByKeyQuery
>;
export const evolinciteFormConfigurationsByEvolinciteUserID = /* GraphQL */ `query EvolinciteFormConfigurationsByEvolinciteUserID(
  $evolinciteUserID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteFormConfigurationFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteFormConfigurationsByEvolinciteUserID(
    evolinciteUserID: $evolinciteUserID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      key
      name
      config
      meta
      title
      description
      observations
      front
      state
      evolinciteUserID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteFormConfigurationsByEvolinciteUserIDQueryVariables,
  APITypes.EvolinciteFormConfigurationsByEvolinciteUserIDQuery
>;
export const evolinciteFormConfigurationsByEvolinciteCompanyIDAndCreatedAt = /* GraphQL */ `query EvolinciteFormConfigurationsByEvolinciteCompanyIDAndCreatedAt(
  $evolinciteCompanyID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteFormConfigurationFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteFormConfigurationsByEvolinciteCompanyIDAndCreatedAt(
    evolinciteCompanyID: $evolinciteCompanyID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      key
      name
      config
      meta
      title
      description
      observations
      front
      state
      evolinciteUserID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteFormConfigurationsByEvolinciteCompanyIDAndCreatedAtQueryVariables,
  APITypes.EvolinciteFormConfigurationsByEvolinciteCompanyIDAndCreatedAtQuery
>;
export const getEvolinciteFormAnswer = /* GraphQL */ `query GetEvolinciteFormAnswer($id: ID!) {
  getEvolinciteFormAnswer(id: $id) {
    id
    meta
    answerState
    state
    evolinciteUserID
    evolinciteFormConfigurationID
    EvolinciteFormConfiguration {
      id
      key
      name
      config
      meta
      title
      description
      observations
      front
      state
      evolinciteUserID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteFormAnswerQueryVariables,
  APITypes.GetEvolinciteFormAnswerQuery
>;
export const listEvolinciteFormAnswers = /* GraphQL */ `query ListEvolinciteFormAnswers(
  $filter: ModelEvolinciteFormAnswerFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteFormAnswers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      meta
      answerState
      state
      evolinciteUserID
      evolinciteFormConfigurationID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteFormAnswersQueryVariables,
  APITypes.ListEvolinciteFormAnswersQuery
>;
export const evolinciteFormAnswersByEvolinciteUserID = /* GraphQL */ `query EvolinciteFormAnswersByEvolinciteUserID(
  $evolinciteUserID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteFormAnswerFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteFormAnswersByEvolinciteUserID(
    evolinciteUserID: $evolinciteUserID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      meta
      answerState
      state
      evolinciteUserID
      evolinciteFormConfigurationID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteFormAnswersByEvolinciteUserIDQueryVariables,
  APITypes.EvolinciteFormAnswersByEvolinciteUserIDQuery
>;
export const evolinciteFormAnswersByEvolinciteFormConfigurationIDAndCreatedAt = /* GraphQL */ `query EvolinciteFormAnswersByEvolinciteFormConfigurationIDAndCreatedAt(
  $evolinciteFormConfigurationID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteFormAnswerFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteFormAnswersByEvolinciteFormConfigurationIDAndCreatedAt(
    evolinciteFormConfigurationID: $evolinciteFormConfigurationID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      meta
      answerState
      state
      evolinciteUserID
      evolinciteFormConfigurationID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteFormAnswersByEvolinciteFormConfigurationIDAndCreatedAtQueryVariables,
  APITypes.EvolinciteFormAnswersByEvolinciteFormConfigurationIDAndCreatedAtQuery
>;
export const evolinciteFormAnswersByEvolinciteCompanyIDAndCreatedAt = /* GraphQL */ `query EvolinciteFormAnswersByEvolinciteCompanyIDAndCreatedAt(
  $evolinciteCompanyID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteFormAnswerFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteFormAnswersByEvolinciteCompanyIDAndCreatedAt(
    evolinciteCompanyID: $evolinciteCompanyID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      meta
      answerState
      state
      evolinciteUserID
      evolinciteFormConfigurationID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteFormAnswersByEvolinciteCompanyIDAndCreatedAtQueryVariables,
  APITypes.EvolinciteFormAnswersByEvolinciteCompanyIDAndCreatedAtQuery
>;
export const getEvolincitePaymentAutomation = /* GraphQL */ `query GetEvolincitePaymentAutomation($id: ID!) {
  getEvolincitePaymentAutomation(id: $id) {
    id
    name
    setting
    order
    repeat
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolincitePaymentAutomationQueryVariables,
  APITypes.GetEvolincitePaymentAutomationQuery
>;
export const listEvolincitePaymentAutomations = /* GraphQL */ `query ListEvolincitePaymentAutomations(
  $filter: ModelEvolincitePaymentAutomationFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolincitePaymentAutomations(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      setting
      order
      repeat
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolincitePaymentAutomationsQueryVariables,
  APITypes.ListEvolincitePaymentAutomationsQuery
>;
export const evolincitePaymentAutomationsByEvolinciteCompanyID = /* GraphQL */ `query EvolincitePaymentAutomationsByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolincitePaymentAutomationFilterInput
  $limit: Int
  $nextToken: String
) {
  evolincitePaymentAutomationsByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      setting
      order
      repeat
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolincitePaymentAutomationsByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolincitePaymentAutomationsByEvolinciteCompanyIDQuery
>;
export const getEvolinciteMail = /* GraphQL */ `query GetEvolinciteMail($id: ID!) {
  getEvolinciteMail(id: $id) {
    id
    destinations
    subject
    content
    submissionStatus
    setting
    response
    files
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserID
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteMailQueryVariables,
  APITypes.GetEvolinciteMailQuery
>;
export const listEvolinciteMails = /* GraphQL */ `query ListEvolinciteMails(
  $filter: ModelEvolinciteMailFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteMails(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      destinations
      subject
      content
      submissionStatus
      setting
      response
      files
      state
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteMailsQueryVariables,
  APITypes.ListEvolinciteMailsQuery
>;
export const evolinciteMailsByEvolinciteCompanyIDAndCreatedAt = /* GraphQL */ `query EvolinciteMailsByEvolinciteCompanyIDAndCreatedAt(
  $evolinciteCompanyID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteMailFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteMailsByEvolinciteCompanyIDAndCreatedAt(
    evolinciteCompanyID: $evolinciteCompanyID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      destinations
      subject
      content
      submissionStatus
      setting
      response
      files
      state
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteMailsByEvolinciteCompanyIDAndCreatedAtQueryVariables,
  APITypes.EvolinciteMailsByEvolinciteCompanyIDAndCreatedAtQuery
>;
export const evolinciteMailsByEvolinciteUserIDAndCreatedAt = /* GraphQL */ `query EvolinciteMailsByEvolinciteUserIDAndCreatedAt(
  $evolinciteUserID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteMailFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteMailsByEvolinciteUserIDAndCreatedAt(
    evolinciteUserID: $evolinciteUserID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      destinations
      subject
      content
      submissionStatus
      setting
      response
      files
      state
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteMailsByEvolinciteUserIDAndCreatedAtQueryVariables,
  APITypes.EvolinciteMailsByEvolinciteUserIDAndCreatedAtQuery
>;
export const getEvolinciteMailConfiguration = /* GraphQL */ `query GetEvolinciteMailConfiguration($id: ID!) {
  getEvolinciteMailConfiguration(id: $id) {
    id
    SMTP
    email
    password
    state
    evolinciteCompanyID
    evolinciteUserID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteMailConfigurationQueryVariables,
  APITypes.GetEvolinciteMailConfigurationQuery
>;
export const listEvolinciteMailConfigurations = /* GraphQL */ `query ListEvolinciteMailConfigurations(
  $filter: ModelEvolinciteMailConfigurationFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteMailConfigurations(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      SMTP
      email
      password
      state
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteMailConfigurationsQueryVariables,
  APITypes.ListEvolinciteMailConfigurationsQuery
>;
export const evolinciteMailConfigurationsByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteMailConfigurationsByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteMailConfigurationFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteMailConfigurationsByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      SMTP
      email
      password
      state
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteMailConfigurationsByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteMailConfigurationsByEvolinciteCompanyIDQuery
>;
export const evolinciteMailConfigurationsByEvolinciteUserID = /* GraphQL */ `query EvolinciteMailConfigurationsByEvolinciteUserID(
  $evolinciteUserID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteMailConfigurationFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteMailConfigurationsByEvolinciteUserID(
    evolinciteUserID: $evolinciteUserID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      SMTP
      email
      password
      state
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteMailConfigurationsByEvolinciteUserIDQueryVariables,
  APITypes.EvolinciteMailConfigurationsByEvolinciteUserIDQuery
>;
export const getEvolinciteMailTemplate = /* GraphQL */ `query GetEvolinciteMailTemplate($id: ID!) {
  getEvolinciteMailTemplate(id: $id) {
    id
    destinations
    subject
    content
    files
    transmitter
    meta
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteMailTemplateQueryVariables,
  APITypes.GetEvolinciteMailTemplateQuery
>;
export const listEvolinciteMailTemplates = /* GraphQL */ `query ListEvolinciteMailTemplates(
  $filter: ModelEvolinciteMailTemplateFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteMailTemplates(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      destinations
      subject
      content
      files
      transmitter
      meta
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteMailTemplatesQueryVariables,
  APITypes.ListEvolinciteMailTemplatesQuery
>;
export const evolinciteMailTemplatesByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteMailTemplatesByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteMailTemplateFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteMailTemplatesByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      destinations
      subject
      content
      files
      transmitter
      meta
      state
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteMailTemplatesByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteMailTemplatesByEvolinciteCompanyIDQuery
>;
export const getEvolinciteMailTemplateLog = /* GraphQL */ `query GetEvolinciteMailTemplateLog($id: ID!) {
  getEvolinciteMailTemplateLog(id: $id) {
    id
    key
    log
    date
    previousLog
    state
    evolinciteCompanyID
    evolinciteUserID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteMailTemplateLogQueryVariables,
  APITypes.GetEvolinciteMailTemplateLogQuery
>;
export const listEvolinciteMailTemplateLogs = /* GraphQL */ `query ListEvolinciteMailTemplateLogs(
  $filter: ModelEvolinciteMailTemplateLogFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteMailTemplateLogs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      key
      log
      date
      previousLog
      state
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteMailTemplateLogsQueryVariables,
  APITypes.ListEvolinciteMailTemplateLogsQuery
>;
export const evolinciteMailTemplateLogsByKey = /* GraphQL */ `query EvolinciteMailTemplateLogsByKey(
  $key: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteMailTemplateLogFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteMailTemplateLogsByKey(
    key: $key
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      key
      log
      date
      previousLog
      state
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteMailTemplateLogsByKeyQueryVariables,
  APITypes.EvolinciteMailTemplateLogsByKeyQuery
>;
export const evolinciteMailTemplateLogsByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteMailTemplateLogsByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteMailTemplateLogFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteMailTemplateLogsByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      key
      log
      date
      previousLog
      state
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteMailTemplateLogsByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteMailTemplateLogsByEvolinciteCompanyIDQuery
>;
export const evolinciteMailTemplateLogsByEvolinciteUserID = /* GraphQL */ `query EvolinciteMailTemplateLogsByEvolinciteUserID(
  $evolinciteUserID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteMailTemplateLogFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteMailTemplateLogsByEvolinciteUserID(
    evolinciteUserID: $evolinciteUserID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      key
      log
      date
      previousLog
      state
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteMailTemplateLogsByEvolinciteUserIDQueryVariables,
  APITypes.EvolinciteMailTemplateLogsByEvolinciteUserIDQuery
>;
export const getEvolincitePackage = /* GraphQL */ `query GetEvolincitePackage($id: ID!) {
  getEvolincitePackage(id: $id) {
    id
    name
    description
    goal
    duration
    state
    EvolinciteFunctionalities {
      nextToken
      __typename
    }
    EvolinciteCompanySubscriptions {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolincitePackageQueryVariables,
  APITypes.GetEvolincitePackageQuery
>;
export const listEvolincitePackages = /* GraphQL */ `query ListEvolincitePackages(
  $filter: ModelEvolincitePackageFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolincitePackages(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      goal
      duration
      state
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolincitePackagesQueryVariables,
  APITypes.ListEvolincitePackagesQuery
>;
export const getEvolinciteCompanySubscription = /* GraphQL */ `query GetEvolinciteCompanySubscription($id: ID!) {
  getEvolinciteCompanySubscription(id: $id) {
    id
    name
    price
    dateInitial
    dateFinal
    activatorUser
    state
    evolincitePackageID
    EvolincitePackage {
      id
      name
      description
      goal
      duration
      state
      createdAt
      updatedAt
      __typename
    }
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteCompanySubscriptionQueryVariables,
  APITypes.GetEvolinciteCompanySubscriptionQuery
>;
export const listEvolinciteCompanySubscriptions = /* GraphQL */ `query ListEvolinciteCompanySubscriptions(
  $filter: ModelEvolinciteCompanySubscriptionFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteCompanySubscriptions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      price
      dateInitial
      dateFinal
      activatorUser
      state
      evolincitePackageID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteCompanySubscriptionsQueryVariables,
  APITypes.ListEvolinciteCompanySubscriptionsQuery
>;
export const evolinciteCompanySubscriptionsByEvolincitePackageID = /* GraphQL */ `query EvolinciteCompanySubscriptionsByEvolincitePackageID(
  $evolincitePackageID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteCompanySubscriptionFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteCompanySubscriptionsByEvolincitePackageID(
    evolincitePackageID: $evolincitePackageID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      price
      dateInitial
      dateFinal
      activatorUser
      state
      evolincitePackageID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteCompanySubscriptionsByEvolincitePackageIDQueryVariables,
  APITypes.EvolinciteCompanySubscriptionsByEvolincitePackageIDQuery
>;
export const evolinciteCompanySubscriptionsByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteCompanySubscriptionsByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteCompanySubscriptionFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteCompanySubscriptionsByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      price
      dateInitial
      dateFinal
      activatorUser
      state
      evolincitePackageID
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteCompanySubscriptionsByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteCompanySubscriptionsByEvolinciteCompanyIDQuery
>;
export const getEvolinciteEmployeeObservation = /* GraphQL */ `query GetEvolinciteEmployeeObservation($id: ID!) {
  getEvolinciteEmployeeObservation(id: $id) {
    id
    name
    content
    isPublic
    meta
    state
    evolinciteCompanyID
    EvolinciteCompany {
      id
      name
      nit
      picture
      meta
      state
      evolinciteSubscriptionID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUserID
    EvolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteEmployeeObservationQueryVariables,
  APITypes.GetEvolinciteEmployeeObservationQuery
>;
export const listEvolinciteEmployeeObservations = /* GraphQL */ `query ListEvolinciteEmployeeObservations(
  $filter: ModelEvolinciteEmployeeObservationFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteEmployeeObservations(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      content
      isPublic
      meta
      state
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteEmployeeObservationsQueryVariables,
  APITypes.ListEvolinciteEmployeeObservationsQuery
>;
export const evolinciteEmployeeObservationsByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteEmployeeObservationsByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteEmployeeObservationFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteEmployeeObservationsByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      content
      isPublic
      meta
      state
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteEmployeeObservationsByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteEmployeeObservationsByEvolinciteCompanyIDQuery
>;
export const evolinciteEmployeeObservationsByEvolinciteUserIDAndCreatedAt = /* GraphQL */ `query EvolinciteEmployeeObservationsByEvolinciteUserIDAndCreatedAt(
  $evolinciteUserID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteEmployeeObservationFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteEmployeeObservationsByEvolinciteUserIDAndCreatedAt(
    evolinciteUserID: $evolinciteUserID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      content
      isPublic
      meta
      state
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteEmployeeObservationsByEvolinciteUserIDAndCreatedAtQueryVariables,
  APITypes.EvolinciteEmployeeObservationsByEvolinciteUserIDAndCreatedAtQuery
>;
export const getEvolinciteTag = /* GraphQL */ `query GetEvolinciteTag($id: ID!) {
  getEvolinciteTag(id: $id) {
    id
    name
    description
    state
    evolinciteCompanyID
    evolinciteUserID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteTagQueryVariables,
  APITypes.GetEvolinciteTagQuery
>;
export const listEvolinciteTags = /* GraphQL */ `query ListEvolinciteTags(
  $filter: ModelEvolinciteTagFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      state
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteTagsQueryVariables,
  APITypes.ListEvolinciteTagsQuery
>;
export const evolinciteTagsByName = /* GraphQL */ `query EvolinciteTagsByName(
  $name: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteTagFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteTagsByName(
    name: $name
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      state
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteTagsByNameQueryVariables,
  APITypes.EvolinciteTagsByNameQuery
>;
export const evolinciteTagsByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteTagsByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteTagFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteTagsByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      state
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteTagsByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteTagsByEvolinciteCompanyIDQuery
>;
export const evolinciteTagsByEvolinciteUserIDAndCreatedAt = /* GraphQL */ `query EvolinciteTagsByEvolinciteUserIDAndCreatedAt(
  $evolinciteUserID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteTagFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteTagsByEvolinciteUserIDAndCreatedAt(
    evolinciteUserID: $evolinciteUserID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      state
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteTagsByEvolinciteUserIDAndCreatedAtQueryVariables,
  APITypes.EvolinciteTagsByEvolinciteUserIDAndCreatedAtQuery
>;
export const getEvolinciteMilestone = /* GraphQL */ `query GetEvolinciteMilestone($id: ID!) {
  getEvolinciteMilestone(id: $id) {
    name
    description
    tags
    type
    config
    startDate
    endDate
    employees
    managers
    isClosed
    closingNotes
    log
    state
    evolinciteCompanyID
    evolinciteUserID
    createdAt
    updatedAt
    id
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteMilestoneQueryVariables,
  APITypes.GetEvolinciteMilestoneQuery
>;
export const listEvolinciteMilestones = /* GraphQL */ `query ListEvolinciteMilestones(
  $filter: ModelEvolinciteMilestoneFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteMilestones(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      name
      description
      tags
      type
      config
      startDate
      endDate
      employees
      managers
      isClosed
      closingNotes
      log
      state
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      id
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteMilestonesQueryVariables,
  APITypes.ListEvolinciteMilestonesQuery
>;
export const evolinciteMilestonesByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteMilestonesByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteMilestoneFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteMilestonesByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      name
      description
      tags
      type
      config
      startDate
      endDate
      employees
      managers
      isClosed
      closingNotes
      log
      state
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      id
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteMilestonesByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteMilestonesByEvolinciteCompanyIDQuery
>;
export const evolinciteMilestonesByEvolinciteUserIDAndCreatedAt = /* GraphQL */ `query EvolinciteMilestonesByEvolinciteUserIDAndCreatedAt(
  $evolinciteUserID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteMilestoneFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteMilestonesByEvolinciteUserIDAndCreatedAt(
    evolinciteUserID: $evolinciteUserID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      name
      description
      tags
      type
      config
      startDate
      endDate
      employees
      managers
      isClosed
      closingNotes
      log
      state
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      id
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteMilestonesByEvolinciteUserIDAndCreatedAtQueryVariables,
  APITypes.EvolinciteMilestonesByEvolinciteUserIDAndCreatedAtQuery
>;
export const getEvolinciteUserLog = /* GraphQL */ `query GetEvolinciteUserLog($id: ID!) {
  getEvolinciteUserLog(id: $id) {
    id
    log
    functionality
    state
    key
    evolinciteCompanyID
    evolinciteUserID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteUserLogQueryVariables,
  APITypes.GetEvolinciteUserLogQuery
>;
export const listEvolinciteUserLogs = /* GraphQL */ `query ListEvolinciteUserLogs(
  $filter: ModelEvolinciteUserLogFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteUserLogs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      log
      functionality
      state
      key
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteUserLogsQueryVariables,
  APITypes.ListEvolinciteUserLogsQuery
>;
export const evolinciteUserLogsByKey = /* GraphQL */ `query EvolinciteUserLogsByKey(
  $key: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteUserLogFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteUserLogsByKey(
    key: $key
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      log
      functionality
      state
      key
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteUserLogsByKeyQueryVariables,
  APITypes.EvolinciteUserLogsByKeyQuery
>;
export const evolinciteUserLogsByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteUserLogsByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteUserLogFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteUserLogsByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      log
      functionality
      state
      key
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteUserLogsByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteUserLogsByEvolinciteCompanyIDQuery
>;
export const evolinciteUserLogsByEvolinciteUserIDAndCreatedAt = /* GraphQL */ `query EvolinciteUserLogsByEvolinciteUserIDAndCreatedAt(
  $evolinciteUserID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteUserLogFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteUserLogsByEvolinciteUserIDAndCreatedAt(
    evolinciteUserID: $evolinciteUserID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      log
      functionality
      state
      key
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteUserLogsByEvolinciteUserIDAndCreatedAtQueryVariables,
  APITypes.EvolinciteUserLogsByEvolinciteUserIDAndCreatedAtQuery
>;
export const getEvolinciteUserTimeTracking = /* GraphQL */ `query GetEvolinciteUserTimeTracking($id: ID!) {
  getEvolinciteUserTimeTracking(id: $id) {
    id
    time
    state
    evolinciteCompanyID
    evolinciteUserID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteUserTimeTrackingQueryVariables,
  APITypes.GetEvolinciteUserTimeTrackingQuery
>;
export const listEvolinciteUserTimeTrackings = /* GraphQL */ `query ListEvolinciteUserTimeTrackings(
  $filter: ModelEvolinciteUserTimeTrackingFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteUserTimeTrackings(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      time
      state
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteUserTimeTrackingsQueryVariables,
  APITypes.ListEvolinciteUserTimeTrackingsQuery
>;
export const evolinciteUserTimeTrackingsByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteUserTimeTrackingsByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteUserTimeTrackingFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteUserTimeTrackingsByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      time
      state
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteUserTimeTrackingsByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteUserTimeTrackingsByEvolinciteCompanyIDQuery
>;
export const evolinciteUserTimeTrackingsByEvolinciteUserIDAndCreatedAt = /* GraphQL */ `query EvolinciteUserTimeTrackingsByEvolinciteUserIDAndCreatedAt(
  $evolinciteUserID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteUserTimeTrackingFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteUserTimeTrackingsByEvolinciteUserIDAndCreatedAt(
    evolinciteUserID: $evolinciteUserID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      time
      state
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteUserTimeTrackingsByEvolinciteUserIDAndCreatedAtQueryVariables,
  APITypes.EvolinciteUserTimeTrackingsByEvolinciteUserIDAndCreatedAtQuery
>;
export const getEvolinciteSchedule = /* GraphQL */ `query GetEvolinciteSchedule($id: ID!) {
  getEvolinciteSchedule(id: $id) {
    id
    name
    description
    config
    state
    evolinciteCompanyID
    evolinciteUserID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteScheduleQueryVariables,
  APITypes.GetEvolinciteScheduleQuery
>;
export const listEvolinciteSchedules = /* GraphQL */ `query ListEvolinciteSchedules(
  $filter: ModelEvolinciteScheduleFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteSchedules(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      config
      state
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteSchedulesQueryVariables,
  APITypes.ListEvolinciteSchedulesQuery
>;
export const evolinciteSchedulesByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteSchedulesByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteScheduleFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteSchedulesByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      config
      state
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteSchedulesByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteSchedulesByEvolinciteCompanyIDQuery
>;
export const evolinciteSchedulesByEvolinciteUserIDAndCreatedAt = /* GraphQL */ `query EvolinciteSchedulesByEvolinciteUserIDAndCreatedAt(
  $evolinciteUserID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteScheduleFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteSchedulesByEvolinciteUserIDAndCreatedAt(
    evolinciteUserID: $evolinciteUserID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      config
      state
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteSchedulesByEvolinciteUserIDAndCreatedAtQueryVariables,
  APITypes.EvolinciteSchedulesByEvolinciteUserIDAndCreatedAtQuery
>;
export const getEvolinciteTemplateRequest = /* GraphQL */ `query GetEvolinciteTemplateRequest($id: ID!) {
  getEvolinciteTemplateRequest(id: $id) {
    id
    name
    description
    tags
    questions
    elementType
    documents
    meta
    owners
    state
    evolinciteCompanyID
    evolinciteUserID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteTemplateRequestQueryVariables,
  APITypes.GetEvolinciteTemplateRequestQuery
>;
export const listEvolinciteTemplateRequests = /* GraphQL */ `query ListEvolinciteTemplateRequests(
  $filter: ModelEvolinciteTemplateRequestFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteTemplateRequests(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      tags
      questions
      elementType
      documents
      meta
      owners
      state
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteTemplateRequestsQueryVariables,
  APITypes.ListEvolinciteTemplateRequestsQuery
>;
export const evolinciteTemplateRequestsByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteTemplateRequestsByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteTemplateRequestFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteTemplateRequestsByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      tags
      questions
      elementType
      documents
      meta
      owners
      state
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteTemplateRequestsByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteTemplateRequestsByEvolinciteCompanyIDQuery
>;
export const evolinciteTemplateRequestsByEvolinciteUserIDAndCreatedAt = /* GraphQL */ `query EvolinciteTemplateRequestsByEvolinciteUserIDAndCreatedAt(
  $evolinciteUserID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteTemplateRequestFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteTemplateRequestsByEvolinciteUserIDAndCreatedAt(
    evolinciteUserID: $evolinciteUserID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      tags
      questions
      elementType
      documents
      meta
      owners
      state
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteTemplateRequestsByEvolinciteUserIDAndCreatedAtQueryVariables,
  APITypes.EvolinciteTemplateRequestsByEvolinciteUserIDAndCreatedAtQuery
>;
export const getEvolinciteRequest = /* GraphQL */ `query GetEvolinciteRequest($id: ID!) {
  getEvolinciteRequest(id: $id) {
    id
    templateID
    answers
    requester
    priority
    elementID
    elementType
    status
    state
    evolinciteCompanyID
    evolinciteUserID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteRequestQueryVariables,
  APITypes.GetEvolinciteRequestQuery
>;
export const listEvolinciteRequests = /* GraphQL */ `query ListEvolinciteRequests(
  $filter: ModelEvolinciteRequestFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteRequests(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      templateID
      answers
      requester
      priority
      elementID
      elementType
      status
      state
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteRequestsQueryVariables,
  APITypes.ListEvolinciteRequestsQuery
>;
export const evolinciteRequestsByTemplateID = /* GraphQL */ `query EvolinciteRequestsByTemplateID(
  $templateID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteRequestFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteRequestsByTemplateID(
    templateID: $templateID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      templateID
      answers
      requester
      priority
      elementID
      elementType
      status
      state
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteRequestsByTemplateIDQueryVariables,
  APITypes.EvolinciteRequestsByTemplateIDQuery
>;
export const evolinciteRequestsByRequester = /* GraphQL */ `query EvolinciteRequestsByRequester(
  $requester: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteRequestFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteRequestsByRequester(
    requester: $requester
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      templateID
      answers
      requester
      priority
      elementID
      elementType
      status
      state
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteRequestsByRequesterQueryVariables,
  APITypes.EvolinciteRequestsByRequesterQuery
>;
export const evolinciteRequestsByEvolinciteCompanyID = /* GraphQL */ `query EvolinciteRequestsByEvolinciteCompanyID(
  $evolinciteCompanyID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteRequestFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteRequestsByEvolinciteCompanyID(
    evolinciteCompanyID: $evolinciteCompanyID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      templateID
      answers
      requester
      priority
      elementID
      elementType
      status
      state
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteRequestsByEvolinciteCompanyIDQueryVariables,
  APITypes.EvolinciteRequestsByEvolinciteCompanyIDQuery
>;
export const evolinciteRequestsByEvolinciteUserIDAndCreatedAt = /* GraphQL */ `query EvolinciteRequestsByEvolinciteUserIDAndCreatedAt(
  $evolinciteUserID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteRequestFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteRequestsByEvolinciteUserIDAndCreatedAt(
    evolinciteUserID: $evolinciteUserID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      templateID
      answers
      requester
      priority
      elementID
      elementType
      status
      state
      evolinciteCompanyID
      evolinciteUserID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteRequestsByEvolinciteUserIDAndCreatedAtQueryVariables,
  APITypes.EvolinciteRequestsByEvolinciteUserIDAndCreatedAtQuery
>;
export const getEvolinciteActivityEvolinciteUser = /* GraphQL */ `query GetEvolinciteActivityEvolinciteUser($id: ID!) {
  getEvolinciteActivityEvolinciteUser(id: $id) {
    id
    evolinciteActivityId
    evolinciteUserId
    evolinciteActivity {
      id
      name
      description
      startDate
      endDate
      color
      type
      priority
      meta
      taskState
      documents
      state
      evolinciteUserID
      evolinciteCompanyID
      evolinciteCrmNegotiationID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteActivityEvolinciteUserQueryVariables,
  APITypes.GetEvolinciteActivityEvolinciteUserQuery
>;
export const listEvolinciteActivityEvolinciteUsers = /* GraphQL */ `query ListEvolinciteActivityEvolinciteUsers(
  $filter: ModelEvolinciteActivityEvolinciteUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteActivityEvolinciteUsers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      evolinciteActivityId
      evolinciteUserId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteActivityEvolinciteUsersQueryVariables,
  APITypes.ListEvolinciteActivityEvolinciteUsersQuery
>;
export const evolinciteActivityEvolinciteUsersByEvolinciteActivityId = /* GraphQL */ `query EvolinciteActivityEvolinciteUsersByEvolinciteActivityId(
  $evolinciteActivityId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteActivityEvolinciteUserFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteActivityEvolinciteUsersByEvolinciteActivityId(
    evolinciteActivityId: $evolinciteActivityId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      evolinciteActivityId
      evolinciteUserId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteActivityEvolinciteUsersByEvolinciteActivityIdQueryVariables,
  APITypes.EvolinciteActivityEvolinciteUsersByEvolinciteActivityIdQuery
>;
export const evolinciteActivityEvolinciteUsersByEvolinciteUserId = /* GraphQL */ `query EvolinciteActivityEvolinciteUsersByEvolinciteUserId(
  $evolinciteUserId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteActivityEvolinciteUserFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteActivityEvolinciteUsersByEvolinciteUserId(
    evolinciteUserId: $evolinciteUserId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      evolinciteActivityId
      evolinciteUserId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteActivityEvolinciteUsersByEvolinciteUserIdQueryVariables,
  APITypes.EvolinciteActivityEvolinciteUsersByEvolinciteUserIdQuery
>;
export const getEvolinciteUserEvolinciteCrmNegotiation = /* GraphQL */ `query GetEvolinciteUserEvolinciteCrmNegotiation($id: ID!) {
  getEvolinciteUserEvolinciteCrmNegotiation(id: $id) {
    id
    evolinciteCrmNegotiationId
    evolinciteUserId
    evolinciteCrmNegotiation {
      id
      name
      value
      due
      parent
      date
      documents
      meta
      frozen
      valueInterest
      valueCollection
      observers
      exitDate
      state
      evolinciteCompanyID
      evolinciteUserSellerID
      evolinciteUserReferrerID
      evolinciteUserOwnerID
      evolinciteCrmStateID
      evolinciteCustomerID
      evolinciteProcessTypeID
      initialGoalID
      finalGoalID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteUserEvolinciteCrmNegotiationQueryVariables,
  APITypes.GetEvolinciteUserEvolinciteCrmNegotiationQuery
>;
export const listEvolinciteUserEvolinciteCrmNegotiations = /* GraphQL */ `query ListEvolinciteUserEvolinciteCrmNegotiations(
  $filter: ModelEvolinciteUserEvolinciteCrmNegotiationFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteUserEvolinciteCrmNegotiations(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      evolinciteCrmNegotiationId
      evolinciteUserId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteUserEvolinciteCrmNegotiationsQueryVariables,
  APITypes.ListEvolinciteUserEvolinciteCrmNegotiationsQuery
>;
export const evolinciteUserEvolinciteCrmNegotiationsByEvolinciteCrmNegotiationId = /* GraphQL */ `query EvolinciteUserEvolinciteCrmNegotiationsByEvolinciteCrmNegotiationId(
  $evolinciteCrmNegotiationId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteUserEvolinciteCrmNegotiationFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteUserEvolinciteCrmNegotiationsByEvolinciteCrmNegotiationId(
    evolinciteCrmNegotiationId: $evolinciteCrmNegotiationId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      evolinciteCrmNegotiationId
      evolinciteUserId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteUserEvolinciteCrmNegotiationsByEvolinciteCrmNegotiationIdQueryVariables,
  APITypes.EvolinciteUserEvolinciteCrmNegotiationsByEvolinciteCrmNegotiationIdQuery
>;
export const evolinciteUserEvolinciteCrmNegotiationsByEvolinciteUserId = /* GraphQL */ `query EvolinciteUserEvolinciteCrmNegotiationsByEvolinciteUserId(
  $evolinciteUserId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteUserEvolinciteCrmNegotiationFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteUserEvolinciteCrmNegotiationsByEvolinciteUserId(
    evolinciteUserId: $evolinciteUserId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      evolinciteCrmNegotiationId
      evolinciteUserId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteUserEvolinciteCrmNegotiationsByEvolinciteUserIdQueryVariables,
  APITypes.EvolinciteUserEvolinciteCrmNegotiationsByEvolinciteUserIdQuery
>;
export const getEvolinciteRoomEvolinciteUser = /* GraphQL */ `query GetEvolinciteRoomEvolinciteUser($id: ID!) {
  getEvolinciteRoomEvolinciteUser(id: $id) {
    id
    evolinciteRoomId
    evolinciteUserId
    evolinciteRoom {
      id
      Key
      name
      state
      meta
      evolinciteCompanyID
      createdAt
      updatedAt
      __typename
    }
    evolinciteUser {
      id
      name
      nit
      phone
      picture
      email
      sub
      meta
      cv
      contract
      memos
      personalMail
      personalPhone
      state
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEvolinciteRoomEvolinciteUserQueryVariables,
  APITypes.GetEvolinciteRoomEvolinciteUserQuery
>;
export const listEvolinciteRoomEvolinciteUsers = /* GraphQL */ `query ListEvolinciteRoomEvolinciteUsers(
  $filter: ModelEvolinciteRoomEvolinciteUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvolinciteRoomEvolinciteUsers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      evolinciteRoomId
      evolinciteUserId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEvolinciteRoomEvolinciteUsersQueryVariables,
  APITypes.ListEvolinciteRoomEvolinciteUsersQuery
>;
export const evolinciteRoomEvolinciteUsersByEvolinciteRoomId = /* GraphQL */ `query EvolinciteRoomEvolinciteUsersByEvolinciteRoomId(
  $evolinciteRoomId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteRoomEvolinciteUserFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteRoomEvolinciteUsersByEvolinciteRoomId(
    evolinciteRoomId: $evolinciteRoomId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      evolinciteRoomId
      evolinciteUserId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteRoomEvolinciteUsersByEvolinciteRoomIdQueryVariables,
  APITypes.EvolinciteRoomEvolinciteUsersByEvolinciteRoomIdQuery
>;
export const evolinciteRoomEvolinciteUsersByEvolinciteUserId = /* GraphQL */ `query EvolinciteRoomEvolinciteUsersByEvolinciteUserId(
  $evolinciteUserId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelEvolinciteRoomEvolinciteUserFilterInput
  $limit: Int
  $nextToken: String
) {
  evolinciteRoomEvolinciteUsersByEvolinciteUserId(
    evolinciteUserId: $evolinciteUserId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      evolinciteRoomId
      evolinciteUserId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.EvolinciteRoomEvolinciteUsersByEvolinciteUserIdQueryVariables,
  APITypes.EvolinciteRoomEvolinciteUsersByEvolinciteUserIdQuery
>;
