/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateEvolinciteCompetence = /* GraphQL */ `subscription OnCreateEvolinciteCompetence(
  $filter: ModelSubscriptionEvolinciteCompetenceFilterInput
) {
  onCreateEvolinciteCompetence(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteCompetenceSubscriptionVariables,
  APITypes.OnCreateEvolinciteCompetenceSubscription
>;
export const onUpdateEvolinciteCompetence = /* GraphQL */ `subscription OnUpdateEvolinciteCompetence(
  $filter: ModelSubscriptionEvolinciteCompetenceFilterInput
) {
  onUpdateEvolinciteCompetence(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteCompetenceSubscriptionVariables,
  APITypes.OnUpdateEvolinciteCompetenceSubscription
>;
export const onDeleteEvolinciteCompetence = /* GraphQL */ `subscription OnDeleteEvolinciteCompetence(
  $filter: ModelSubscriptionEvolinciteCompetenceFilterInput
) {
  onDeleteEvolinciteCompetence(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteCompetenceSubscriptionVariables,
  APITypes.OnDeleteEvolinciteCompetenceSubscription
>;
export const onCreateEvolinciteCourse = /* GraphQL */ `subscription OnCreateEvolinciteCourse(
  $filter: ModelSubscriptionEvolinciteCourseFilterInput
) {
  onCreateEvolinciteCourse(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteCourseSubscriptionVariables,
  APITypes.OnCreateEvolinciteCourseSubscription
>;
export const onUpdateEvolinciteCourse = /* GraphQL */ `subscription OnUpdateEvolinciteCourse(
  $filter: ModelSubscriptionEvolinciteCourseFilterInput
) {
  onUpdateEvolinciteCourse(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteCourseSubscriptionVariables,
  APITypes.OnUpdateEvolinciteCourseSubscription
>;
export const onDeleteEvolinciteCourse = /* GraphQL */ `subscription OnDeleteEvolinciteCourse(
  $filter: ModelSubscriptionEvolinciteCourseFilterInput
) {
  onDeleteEvolinciteCourse(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteCourseSubscriptionVariables,
  APITypes.OnDeleteEvolinciteCourseSubscription
>;
export const onCreateEvolinciteSyllabus = /* GraphQL */ `subscription OnCreateEvolinciteSyllabus(
  $filter: ModelSubscriptionEvolinciteSyllabusFilterInput
) {
  onCreateEvolinciteSyllabus(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteSyllabusSubscriptionVariables,
  APITypes.OnCreateEvolinciteSyllabusSubscription
>;
export const onUpdateEvolinciteSyllabus = /* GraphQL */ `subscription OnUpdateEvolinciteSyllabus(
  $filter: ModelSubscriptionEvolinciteSyllabusFilterInput
) {
  onUpdateEvolinciteSyllabus(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteSyllabusSubscriptionVariables,
  APITypes.OnUpdateEvolinciteSyllabusSubscription
>;
export const onDeleteEvolinciteSyllabus = /* GraphQL */ `subscription OnDeleteEvolinciteSyllabus(
  $filter: ModelSubscriptionEvolinciteSyllabusFilterInput
) {
  onDeleteEvolinciteSyllabus(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteSyllabusSubscriptionVariables,
  APITypes.OnDeleteEvolinciteSyllabusSubscription
>;
export const onCreateEvolinciteUserAnswers = /* GraphQL */ `subscription OnCreateEvolinciteUserAnswers(
  $filter: ModelSubscriptionEvolinciteUserAnswersFilterInput
) {
  onCreateEvolinciteUserAnswers(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteUserAnswersSubscriptionVariables,
  APITypes.OnCreateEvolinciteUserAnswersSubscription
>;
export const onUpdateEvolinciteUserAnswers = /* GraphQL */ `subscription OnUpdateEvolinciteUserAnswers(
  $filter: ModelSubscriptionEvolinciteUserAnswersFilterInput
) {
  onUpdateEvolinciteUserAnswers(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteUserAnswersSubscriptionVariables,
  APITypes.OnUpdateEvolinciteUserAnswersSubscription
>;
export const onDeleteEvolinciteUserAnswers = /* GraphQL */ `subscription OnDeleteEvolinciteUserAnswers(
  $filter: ModelSubscriptionEvolinciteUserAnswersFilterInput
) {
  onDeleteEvolinciteUserAnswers(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteUserAnswersSubscriptionVariables,
  APITypes.OnDeleteEvolinciteUserAnswersSubscription
>;
export const onCreateEvolinciteProcessType = /* GraphQL */ `subscription OnCreateEvolinciteProcessType(
  $filter: ModelSubscriptionEvolinciteProcessTypeFilterInput
) {
  onCreateEvolinciteProcessType(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteProcessTypeSubscriptionVariables,
  APITypes.OnCreateEvolinciteProcessTypeSubscription
>;
export const onUpdateEvolinciteProcessType = /* GraphQL */ `subscription OnUpdateEvolinciteProcessType(
  $filter: ModelSubscriptionEvolinciteProcessTypeFilterInput
) {
  onUpdateEvolinciteProcessType(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteProcessTypeSubscriptionVariables,
  APITypes.OnUpdateEvolinciteProcessTypeSubscription
>;
export const onDeleteEvolinciteProcessType = /* GraphQL */ `subscription OnDeleteEvolinciteProcessType(
  $filter: ModelSubscriptionEvolinciteProcessTypeFilterInput
) {
  onDeleteEvolinciteProcessType(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteProcessTypeSubscriptionVariables,
  APITypes.OnDeleteEvolinciteProcessTypeSubscription
>;
export const onCreateEvolinciteExpenseType = /* GraphQL */ `subscription OnCreateEvolinciteExpenseType(
  $filter: ModelSubscriptionEvolinciteExpenseTypeFilterInput
) {
  onCreateEvolinciteExpenseType(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteExpenseTypeSubscriptionVariables,
  APITypes.OnCreateEvolinciteExpenseTypeSubscription
>;
export const onUpdateEvolinciteExpenseType = /* GraphQL */ `subscription OnUpdateEvolinciteExpenseType(
  $filter: ModelSubscriptionEvolinciteExpenseTypeFilterInput
) {
  onUpdateEvolinciteExpenseType(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteExpenseTypeSubscriptionVariables,
  APITypes.OnUpdateEvolinciteExpenseTypeSubscription
>;
export const onDeleteEvolinciteExpenseType = /* GraphQL */ `subscription OnDeleteEvolinciteExpenseType(
  $filter: ModelSubscriptionEvolinciteExpenseTypeFilterInput
) {
  onDeleteEvolinciteExpenseType(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteExpenseTypeSubscriptionVariables,
  APITypes.OnDeleteEvolinciteExpenseTypeSubscription
>;
export const onCreateEvolinciteExpense = /* GraphQL */ `subscription OnCreateEvolinciteExpense(
  $filter: ModelSubscriptionEvolinciteExpenseFilterInput
) {
  onCreateEvolinciteExpense(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteExpenseSubscriptionVariables,
  APITypes.OnCreateEvolinciteExpenseSubscription
>;
export const onUpdateEvolinciteExpense = /* GraphQL */ `subscription OnUpdateEvolinciteExpense(
  $filter: ModelSubscriptionEvolinciteExpenseFilterInput
) {
  onUpdateEvolinciteExpense(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteExpenseSubscriptionVariables,
  APITypes.OnUpdateEvolinciteExpenseSubscription
>;
export const onDeleteEvolinciteExpense = /* GraphQL */ `subscription OnDeleteEvolinciteExpense(
  $filter: ModelSubscriptionEvolinciteExpenseFilterInput
) {
  onDeleteEvolinciteExpense(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteExpenseSubscriptionVariables,
  APITypes.OnDeleteEvolinciteExpenseSubscription
>;
export const onCreateEvolinciteUserEvolinciteJobTitle = /* GraphQL */ `subscription OnCreateEvolinciteUserEvolinciteJobTitle(
  $filter: ModelSubscriptionEvolinciteUserEvolinciteJobTitleFilterInput
) {
  onCreateEvolinciteUserEvolinciteJobTitle(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteUserEvolinciteJobTitleSubscriptionVariables,
  APITypes.OnCreateEvolinciteUserEvolinciteJobTitleSubscription
>;
export const onUpdateEvolinciteUserEvolinciteJobTitle = /* GraphQL */ `subscription OnUpdateEvolinciteUserEvolinciteJobTitle(
  $filter: ModelSubscriptionEvolinciteUserEvolinciteJobTitleFilterInput
) {
  onUpdateEvolinciteUserEvolinciteJobTitle(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteUserEvolinciteJobTitleSubscriptionVariables,
  APITypes.OnUpdateEvolinciteUserEvolinciteJobTitleSubscription
>;
export const onDeleteEvolinciteUserEvolinciteJobTitle = /* GraphQL */ `subscription OnDeleteEvolinciteUserEvolinciteJobTitle(
  $filter: ModelSubscriptionEvolinciteUserEvolinciteJobTitleFilterInput
) {
  onDeleteEvolinciteUserEvolinciteJobTitle(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteUserEvolinciteJobTitleSubscriptionVariables,
  APITypes.OnDeleteEvolinciteUserEvolinciteJobTitleSubscription
>;
export const onCreateEvolinciteJobTitle = /* GraphQL */ `subscription OnCreateEvolinciteJobTitle(
  $filter: ModelSubscriptionEvolinciteJobTitleFilterInput
) {
  onCreateEvolinciteJobTitle(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteJobTitleSubscriptionVariables,
  APITypes.OnCreateEvolinciteJobTitleSubscription
>;
export const onUpdateEvolinciteJobTitle = /* GraphQL */ `subscription OnUpdateEvolinciteJobTitle(
  $filter: ModelSubscriptionEvolinciteJobTitleFilterInput
) {
  onUpdateEvolinciteJobTitle(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteJobTitleSubscriptionVariables,
  APITypes.OnUpdateEvolinciteJobTitleSubscription
>;
export const onDeleteEvolinciteJobTitle = /* GraphQL */ `subscription OnDeleteEvolinciteJobTitle(
  $filter: ModelSubscriptionEvolinciteJobTitleFilterInput
) {
  onDeleteEvolinciteJobTitle(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteJobTitleSubscriptionVariables,
  APITypes.OnDeleteEvolinciteJobTitleSubscription
>;
export const onCreateEvolinciteWalletPayment = /* GraphQL */ `subscription OnCreateEvolinciteWalletPayment(
  $filter: ModelSubscriptionEvolinciteWalletPaymentFilterInput
) {
  onCreateEvolinciteWalletPayment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteWalletPaymentSubscriptionVariables,
  APITypes.OnCreateEvolinciteWalletPaymentSubscription
>;
export const onUpdateEvolinciteWalletPayment = /* GraphQL */ `subscription OnUpdateEvolinciteWalletPayment(
  $filter: ModelSubscriptionEvolinciteWalletPaymentFilterInput
) {
  onUpdateEvolinciteWalletPayment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteWalletPaymentSubscriptionVariables,
  APITypes.OnUpdateEvolinciteWalletPaymentSubscription
>;
export const onDeleteEvolinciteWalletPayment = /* GraphQL */ `subscription OnDeleteEvolinciteWalletPayment(
  $filter: ModelSubscriptionEvolinciteWalletPaymentFilterInput
) {
  onDeleteEvolinciteWalletPayment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteWalletPaymentSubscriptionVariables,
  APITypes.OnDeleteEvolinciteWalletPaymentSubscription
>;
export const onCreateEvolinciteCrmNegotiationField = /* GraphQL */ `subscription OnCreateEvolinciteCrmNegotiationField(
  $filter: ModelSubscriptionEvolinciteCrmNegotiationFieldFilterInput
) {
  onCreateEvolinciteCrmNegotiationField(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteCrmNegotiationFieldSubscriptionVariables,
  APITypes.OnCreateEvolinciteCrmNegotiationFieldSubscription
>;
export const onUpdateEvolinciteCrmNegotiationField = /* GraphQL */ `subscription OnUpdateEvolinciteCrmNegotiationField(
  $filter: ModelSubscriptionEvolinciteCrmNegotiationFieldFilterInput
) {
  onUpdateEvolinciteCrmNegotiationField(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteCrmNegotiationFieldSubscriptionVariables,
  APITypes.OnUpdateEvolinciteCrmNegotiationFieldSubscription
>;
export const onDeleteEvolinciteCrmNegotiationField = /* GraphQL */ `subscription OnDeleteEvolinciteCrmNegotiationField(
  $filter: ModelSubscriptionEvolinciteCrmNegotiationFieldFilterInput
) {
  onDeleteEvolinciteCrmNegotiationField(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteCrmNegotiationFieldSubscriptionVariables,
  APITypes.OnDeleteEvolinciteCrmNegotiationFieldSubscription
>;
export const onCreateEvolinciteCrmNegotiationSection = /* GraphQL */ `subscription OnCreateEvolinciteCrmNegotiationSection(
  $filter: ModelSubscriptionEvolinciteCrmNegotiationSectionFilterInput
) {
  onCreateEvolinciteCrmNegotiationSection(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteCrmNegotiationSectionSubscriptionVariables,
  APITypes.OnCreateEvolinciteCrmNegotiationSectionSubscription
>;
export const onUpdateEvolinciteCrmNegotiationSection = /* GraphQL */ `subscription OnUpdateEvolinciteCrmNegotiationSection(
  $filter: ModelSubscriptionEvolinciteCrmNegotiationSectionFilterInput
) {
  onUpdateEvolinciteCrmNegotiationSection(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteCrmNegotiationSectionSubscriptionVariables,
  APITypes.OnUpdateEvolinciteCrmNegotiationSectionSubscription
>;
export const onDeleteEvolinciteCrmNegotiationSection = /* GraphQL */ `subscription OnDeleteEvolinciteCrmNegotiationSection(
  $filter: ModelSubscriptionEvolinciteCrmNegotiationSectionFilterInput
) {
  onDeleteEvolinciteCrmNegotiationSection(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteCrmNegotiationSectionSubscriptionVariables,
  APITypes.OnDeleteEvolinciteCrmNegotiationSectionSubscription
>;
export const onCreateEvolinciteCrmAutomation = /* GraphQL */ `subscription OnCreateEvolinciteCrmAutomation(
  $filter: ModelSubscriptionEvolinciteCrmAutomationFilterInput
) {
  onCreateEvolinciteCrmAutomation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteCrmAutomationSubscriptionVariables,
  APITypes.OnCreateEvolinciteCrmAutomationSubscription
>;
export const onUpdateEvolinciteCrmAutomation = /* GraphQL */ `subscription OnUpdateEvolinciteCrmAutomation(
  $filter: ModelSubscriptionEvolinciteCrmAutomationFilterInput
) {
  onUpdateEvolinciteCrmAutomation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteCrmAutomationSubscriptionVariables,
  APITypes.OnUpdateEvolinciteCrmAutomationSubscription
>;
export const onDeleteEvolinciteCrmAutomation = /* GraphQL */ `subscription OnDeleteEvolinciteCrmAutomation(
  $filter: ModelSubscriptionEvolinciteCrmAutomationFilterInput
) {
  onDeleteEvolinciteCrmAutomation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteCrmAutomationSubscriptionVariables,
  APITypes.OnDeleteEvolinciteCrmAutomationSubscription
>;
export const onCreateEvolinciteComment = /* GraphQL */ `subscription OnCreateEvolinciteComment(
  $filter: ModelSubscriptionEvolinciteCommentFilterInput
) {
  onCreateEvolinciteComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteCommentSubscriptionVariables,
  APITypes.OnCreateEvolinciteCommentSubscription
>;
export const onUpdateEvolinciteComment = /* GraphQL */ `subscription OnUpdateEvolinciteComment(
  $filter: ModelSubscriptionEvolinciteCommentFilterInput
) {
  onUpdateEvolinciteComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteCommentSubscriptionVariables,
  APITypes.OnUpdateEvolinciteCommentSubscription
>;
export const onDeleteEvolinciteComment = /* GraphQL */ `subscription OnDeleteEvolinciteComment(
  $filter: ModelSubscriptionEvolinciteCommentFilterInput
) {
  onDeleteEvolinciteComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteCommentSubscriptionVariables,
  APITypes.OnDeleteEvolinciteCommentSubscription
>;
export const onCreateEvolinciteActivity = /* GraphQL */ `subscription OnCreateEvolinciteActivity(
  $filter: ModelSubscriptionEvolinciteActivityFilterInput
) {
  onCreateEvolinciteActivity(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteActivitySubscriptionVariables,
  APITypes.OnCreateEvolinciteActivitySubscription
>;
export const onUpdateEvolinciteActivity = /* GraphQL */ `subscription OnUpdateEvolinciteActivity(
  $filter: ModelSubscriptionEvolinciteActivityFilterInput
) {
  onUpdateEvolinciteActivity(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteActivitySubscriptionVariables,
  APITypes.OnUpdateEvolinciteActivitySubscription
>;
export const onDeleteEvolinciteActivity = /* GraphQL */ `subscription OnDeleteEvolinciteActivity(
  $filter: ModelSubscriptionEvolinciteActivityFilterInput
) {
  onDeleteEvolinciteActivity(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteActivitySubscriptionVariables,
  APITypes.OnDeleteEvolinciteActivitySubscription
>;
export const onCreateEvolincitePermissions = /* GraphQL */ `subscription OnCreateEvolincitePermissions(
  $filter: ModelSubscriptionEvolincitePermissionsFilterInput
) {
  onCreateEvolincitePermissions(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolincitePermissionsSubscriptionVariables,
  APITypes.OnCreateEvolincitePermissionsSubscription
>;
export const onUpdateEvolincitePermissions = /* GraphQL */ `subscription OnUpdateEvolincitePermissions(
  $filter: ModelSubscriptionEvolincitePermissionsFilterInput
) {
  onUpdateEvolincitePermissions(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolincitePermissionsSubscriptionVariables,
  APITypes.OnUpdateEvolincitePermissionsSubscription
>;
export const onDeleteEvolincitePermissions = /* GraphQL */ `subscription OnDeleteEvolincitePermissions(
  $filter: ModelSubscriptionEvolincitePermissionsFilterInput
) {
  onDeleteEvolincitePermissions(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolincitePermissionsSubscriptionVariables,
  APITypes.OnDeleteEvolincitePermissionsSubscription
>;
export const onCreateEvolinciteDepartment = /* GraphQL */ `subscription OnCreateEvolinciteDepartment(
  $filter: ModelSubscriptionEvolinciteDepartmentFilterInput
) {
  onCreateEvolinciteDepartment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteDepartmentSubscriptionVariables,
  APITypes.OnCreateEvolinciteDepartmentSubscription
>;
export const onUpdateEvolinciteDepartment = /* GraphQL */ `subscription OnUpdateEvolinciteDepartment(
  $filter: ModelSubscriptionEvolinciteDepartmentFilterInput
) {
  onUpdateEvolinciteDepartment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteDepartmentSubscriptionVariables,
  APITypes.OnUpdateEvolinciteDepartmentSubscription
>;
export const onDeleteEvolinciteDepartment = /* GraphQL */ `subscription OnDeleteEvolinciteDepartment(
  $filter: ModelSubscriptionEvolinciteDepartmentFilterInput
) {
  onDeleteEvolinciteDepartment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteDepartmentSubscriptionVariables,
  APITypes.OnDeleteEvolinciteDepartmentSubscription
>;
export const onCreateEvolinciteSubscription = /* GraphQL */ `subscription OnCreateEvolinciteSubscription(
  $filter: ModelSubscriptionEvolinciteSubscriptionFilterInput
) {
  onCreateEvolinciteSubscription(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteSubscriptionSubscriptionVariables,
  APITypes.OnCreateEvolinciteSubscriptionSubscription
>;
export const onUpdateEvolinciteSubscription = /* GraphQL */ `subscription OnUpdateEvolinciteSubscription(
  $filter: ModelSubscriptionEvolinciteSubscriptionFilterInput
) {
  onUpdateEvolinciteSubscription(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteSubscriptionSubscriptionVariables,
  APITypes.OnUpdateEvolinciteSubscriptionSubscription
>;
export const onDeleteEvolinciteSubscription = /* GraphQL */ `subscription OnDeleteEvolinciteSubscription(
  $filter: ModelSubscriptionEvolinciteSubscriptionFilterInput
) {
  onDeleteEvolinciteSubscription(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteSubscriptionSubscriptionVariables,
  APITypes.OnDeleteEvolinciteSubscriptionSubscription
>;
export const onCreateEvolinciteModule = /* GraphQL */ `subscription OnCreateEvolinciteModule(
  $filter: ModelSubscriptionEvolinciteModuleFilterInput
) {
  onCreateEvolinciteModule(filter: $filter) {
    id
    name
    state
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteModuleSubscriptionVariables,
  APITypes.OnCreateEvolinciteModuleSubscription
>;
export const onUpdateEvolinciteModule = /* GraphQL */ `subscription OnUpdateEvolinciteModule(
  $filter: ModelSubscriptionEvolinciteModuleFilterInput
) {
  onUpdateEvolinciteModule(filter: $filter) {
    id
    name
    state
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteModuleSubscriptionVariables,
  APITypes.OnUpdateEvolinciteModuleSubscription
>;
export const onDeleteEvolinciteModule = /* GraphQL */ `subscription OnDeleteEvolinciteModule(
  $filter: ModelSubscriptionEvolinciteModuleFilterInput
) {
  onDeleteEvolinciteModule(filter: $filter) {
    id
    name
    state
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteModuleSubscriptionVariables,
  APITypes.OnDeleteEvolinciteModuleSubscription
>;
export const onCreateEvolinciteFunctionality = /* GraphQL */ `subscription OnCreateEvolinciteFunctionality(
  $filter: ModelSubscriptionEvolinciteFunctionalityFilterInput
) {
  onCreateEvolinciteFunctionality(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteFunctionalitySubscriptionVariables,
  APITypes.OnCreateEvolinciteFunctionalitySubscription
>;
export const onUpdateEvolinciteFunctionality = /* GraphQL */ `subscription OnUpdateEvolinciteFunctionality(
  $filter: ModelSubscriptionEvolinciteFunctionalityFilterInput
) {
  onUpdateEvolinciteFunctionality(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteFunctionalitySubscriptionVariables,
  APITypes.OnUpdateEvolinciteFunctionalitySubscription
>;
export const onDeleteEvolinciteFunctionality = /* GraphQL */ `subscription OnDeleteEvolinciteFunctionality(
  $filter: ModelSubscriptionEvolinciteFunctionalityFilterInput
) {
  onDeleteEvolinciteFunctionality(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteFunctionalitySubscriptionVariables,
  APITypes.OnDeleteEvolinciteFunctionalitySubscription
>;
export const onCreateEvolinciteRol = /* GraphQL */ `subscription OnCreateEvolinciteRol(
  $filter: ModelSubscriptionEvolinciteRolFilterInput
) {
  onCreateEvolinciteRol(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteRolSubscriptionVariables,
  APITypes.OnCreateEvolinciteRolSubscription
>;
export const onUpdateEvolinciteRol = /* GraphQL */ `subscription OnUpdateEvolinciteRol(
  $filter: ModelSubscriptionEvolinciteRolFilterInput
) {
  onUpdateEvolinciteRol(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteRolSubscriptionVariables,
  APITypes.OnUpdateEvolinciteRolSubscription
>;
export const onDeleteEvolinciteRol = /* GraphQL */ `subscription OnDeleteEvolinciteRol(
  $filter: ModelSubscriptionEvolinciteRolFilterInput
) {
  onDeleteEvolinciteRol(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteRolSubscriptionVariables,
  APITypes.OnDeleteEvolinciteRolSubscription
>;
export const onCreateEvolinciteCustomer = /* GraphQL */ `subscription OnCreateEvolinciteCustomer(
  $filter: ModelSubscriptionEvolinciteCustomerFilterInput
) {
  onCreateEvolinciteCustomer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteCustomerSubscriptionVariables,
  APITypes.OnCreateEvolinciteCustomerSubscription
>;
export const onUpdateEvolinciteCustomer = /* GraphQL */ `subscription OnUpdateEvolinciteCustomer(
  $filter: ModelSubscriptionEvolinciteCustomerFilterInput
) {
  onUpdateEvolinciteCustomer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteCustomerSubscriptionVariables,
  APITypes.OnUpdateEvolinciteCustomerSubscription
>;
export const onDeleteEvolinciteCustomer = /* GraphQL */ `subscription OnDeleteEvolinciteCustomer(
  $filter: ModelSubscriptionEvolinciteCustomerFilterInput
) {
  onDeleteEvolinciteCustomer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteCustomerSubscriptionVariables,
  APITypes.OnDeleteEvolinciteCustomerSubscription
>;
export const onCreateEvolinciteUserSettings = /* GraphQL */ `subscription OnCreateEvolinciteUserSettings(
  $filter: ModelSubscriptionEvolinciteUserSettingsFilterInput
) {
  onCreateEvolinciteUserSettings(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteUserSettingsSubscriptionVariables,
  APITypes.OnCreateEvolinciteUserSettingsSubscription
>;
export const onUpdateEvolinciteUserSettings = /* GraphQL */ `subscription OnUpdateEvolinciteUserSettings(
  $filter: ModelSubscriptionEvolinciteUserSettingsFilterInput
) {
  onUpdateEvolinciteUserSettings(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteUserSettingsSubscriptionVariables,
  APITypes.OnUpdateEvolinciteUserSettingsSubscription
>;
export const onDeleteEvolinciteUserSettings = /* GraphQL */ `subscription OnDeleteEvolinciteUserSettings(
  $filter: ModelSubscriptionEvolinciteUserSettingsFilterInput
) {
  onDeleteEvolinciteUserSettings(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteUserSettingsSubscriptionVariables,
  APITypes.OnDeleteEvolinciteUserSettingsSubscription
>;
export const onCreateEvolinciteCrmPipeline = /* GraphQL */ `subscription OnCreateEvolinciteCrmPipeline(
  $filter: ModelSubscriptionEvolinciteCrmPipelineFilterInput
) {
  onCreateEvolinciteCrmPipeline(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteCrmPipelineSubscriptionVariables,
  APITypes.OnCreateEvolinciteCrmPipelineSubscription
>;
export const onUpdateEvolinciteCrmPipeline = /* GraphQL */ `subscription OnUpdateEvolinciteCrmPipeline(
  $filter: ModelSubscriptionEvolinciteCrmPipelineFilterInput
) {
  onUpdateEvolinciteCrmPipeline(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteCrmPipelineSubscriptionVariables,
  APITypes.OnUpdateEvolinciteCrmPipelineSubscription
>;
export const onDeleteEvolinciteCrmPipeline = /* GraphQL */ `subscription OnDeleteEvolinciteCrmPipeline(
  $filter: ModelSubscriptionEvolinciteCrmPipelineFilterInput
) {
  onDeleteEvolinciteCrmPipeline(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteCrmPipelineSubscriptionVariables,
  APITypes.OnDeleteEvolinciteCrmPipelineSubscription
>;
export const onCreateEvolinciteCrmState = /* GraphQL */ `subscription OnCreateEvolinciteCrmState(
  $filter: ModelSubscriptionEvolinciteCrmStateFilterInput
) {
  onCreateEvolinciteCrmState(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteCrmStateSubscriptionVariables,
  APITypes.OnCreateEvolinciteCrmStateSubscription
>;
export const onUpdateEvolinciteCrmState = /* GraphQL */ `subscription OnUpdateEvolinciteCrmState(
  $filter: ModelSubscriptionEvolinciteCrmStateFilterInput
) {
  onUpdateEvolinciteCrmState(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteCrmStateSubscriptionVariables,
  APITypes.OnUpdateEvolinciteCrmStateSubscription
>;
export const onDeleteEvolinciteCrmState = /* GraphQL */ `subscription OnDeleteEvolinciteCrmState(
  $filter: ModelSubscriptionEvolinciteCrmStateFilterInput
) {
  onDeleteEvolinciteCrmState(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteCrmStateSubscriptionVariables,
  APITypes.OnDeleteEvolinciteCrmStateSubscription
>;
export const onCreateEvolinciteCrmNegotiationLog = /* GraphQL */ `subscription OnCreateEvolinciteCrmNegotiationLog(
  $filter: ModelSubscriptionEvolinciteCrmNegotiationLogFilterInput
) {
  onCreateEvolinciteCrmNegotiationLog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteCrmNegotiationLogSubscriptionVariables,
  APITypes.OnCreateEvolinciteCrmNegotiationLogSubscription
>;
export const onUpdateEvolinciteCrmNegotiationLog = /* GraphQL */ `subscription OnUpdateEvolinciteCrmNegotiationLog(
  $filter: ModelSubscriptionEvolinciteCrmNegotiationLogFilterInput
) {
  onUpdateEvolinciteCrmNegotiationLog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteCrmNegotiationLogSubscriptionVariables,
  APITypes.OnUpdateEvolinciteCrmNegotiationLogSubscription
>;
export const onDeleteEvolinciteCrmNegotiationLog = /* GraphQL */ `subscription OnDeleteEvolinciteCrmNegotiationLog(
  $filter: ModelSubscriptionEvolinciteCrmNegotiationLogFilterInput
) {
  onDeleteEvolinciteCrmNegotiationLog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteCrmNegotiationLogSubscriptionVariables,
  APITypes.OnDeleteEvolinciteCrmNegotiationLogSubscription
>;
export const onCreateEvolinciteCrmNegotiation = /* GraphQL */ `subscription OnCreateEvolinciteCrmNegotiation(
  $filter: ModelSubscriptionEvolinciteCrmNegotiationFilterInput
) {
  onCreateEvolinciteCrmNegotiation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteCrmNegotiationSubscriptionVariables,
  APITypes.OnCreateEvolinciteCrmNegotiationSubscription
>;
export const onUpdateEvolinciteCrmNegotiation = /* GraphQL */ `subscription OnUpdateEvolinciteCrmNegotiation(
  $filter: ModelSubscriptionEvolinciteCrmNegotiationFilterInput
) {
  onUpdateEvolinciteCrmNegotiation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteCrmNegotiationSubscriptionVariables,
  APITypes.OnUpdateEvolinciteCrmNegotiationSubscription
>;
export const onDeleteEvolinciteCrmNegotiation = /* GraphQL */ `subscription OnDeleteEvolinciteCrmNegotiation(
  $filter: ModelSubscriptionEvolinciteCrmNegotiationFilterInput
) {
  onDeleteEvolinciteCrmNegotiation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteCrmNegotiationSubscriptionVariables,
  APITypes.OnDeleteEvolinciteCrmNegotiationSubscription
>;
export const onCreateEvolinciteRoom = /* GraphQL */ `subscription OnCreateEvolinciteRoom(
  $filter: ModelSubscriptionEvolinciteRoomFilterInput
) {
  onCreateEvolinciteRoom(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteRoomSubscriptionVariables,
  APITypes.OnCreateEvolinciteRoomSubscription
>;
export const onUpdateEvolinciteRoom = /* GraphQL */ `subscription OnUpdateEvolinciteRoom(
  $filter: ModelSubscriptionEvolinciteRoomFilterInput
) {
  onUpdateEvolinciteRoom(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteRoomSubscriptionVariables,
  APITypes.OnUpdateEvolinciteRoomSubscription
>;
export const onDeleteEvolinciteRoom = /* GraphQL */ `subscription OnDeleteEvolinciteRoom(
  $filter: ModelSubscriptionEvolinciteRoomFilterInput
) {
  onDeleteEvolinciteRoom(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteRoomSubscriptionVariables,
  APITypes.OnDeleteEvolinciteRoomSubscription
>;
export const onCreateEvolinciteMessage = /* GraphQL */ `subscription OnCreateEvolinciteMessage(
  $filter: ModelSubscriptionEvolinciteMessageFilterInput
) {
  onCreateEvolinciteMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteMessageSubscriptionVariables,
  APITypes.OnCreateEvolinciteMessageSubscription
>;
export const onUpdateEvolinciteMessage = /* GraphQL */ `subscription OnUpdateEvolinciteMessage(
  $filter: ModelSubscriptionEvolinciteMessageFilterInput
) {
  onUpdateEvolinciteMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteMessageSubscriptionVariables,
  APITypes.OnUpdateEvolinciteMessageSubscription
>;
export const onDeleteEvolinciteMessage = /* GraphQL */ `subscription OnDeleteEvolinciteMessage(
  $filter: ModelSubscriptionEvolinciteMessageFilterInput
) {
  onDeleteEvolinciteMessage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteMessageSubscriptionVariables,
  APITypes.OnDeleteEvolinciteMessageSubscription
>;
export const onCreateEvolinciteCrmNegotiationFieldValue = /* GraphQL */ `subscription OnCreateEvolinciteCrmNegotiationFieldValue(
  $filter: ModelSubscriptionEvolinciteCrmNegotiationFieldValueFilterInput
) {
  onCreateEvolinciteCrmNegotiationFieldValue(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteCrmNegotiationFieldValueSubscriptionVariables,
  APITypes.OnCreateEvolinciteCrmNegotiationFieldValueSubscription
>;
export const onUpdateEvolinciteCrmNegotiationFieldValue = /* GraphQL */ `subscription OnUpdateEvolinciteCrmNegotiationFieldValue(
  $filter: ModelSubscriptionEvolinciteCrmNegotiationFieldValueFilterInput
) {
  onUpdateEvolinciteCrmNegotiationFieldValue(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteCrmNegotiationFieldValueSubscriptionVariables,
  APITypes.OnUpdateEvolinciteCrmNegotiationFieldValueSubscription
>;
export const onDeleteEvolinciteCrmNegotiationFieldValue = /* GraphQL */ `subscription OnDeleteEvolinciteCrmNegotiationFieldValue(
  $filter: ModelSubscriptionEvolinciteCrmNegotiationFieldValueFilterInput
) {
  onDeleteEvolinciteCrmNegotiationFieldValue(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteCrmNegotiationFieldValueSubscriptionVariables,
  APITypes.OnDeleteEvolinciteCrmNegotiationFieldValueSubscription
>;
export const onCreateEvolinciteEmail = /* GraphQL */ `subscription OnCreateEvolinciteEmail(
  $filter: ModelSubscriptionEvolinciteEmailFilterInput
) {
  onCreateEvolinciteEmail(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteEmailSubscriptionVariables,
  APITypes.OnCreateEvolinciteEmailSubscription
>;
export const onUpdateEvolinciteEmail = /* GraphQL */ `subscription OnUpdateEvolinciteEmail(
  $filter: ModelSubscriptionEvolinciteEmailFilterInput
) {
  onUpdateEvolinciteEmail(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteEmailSubscriptionVariables,
  APITypes.OnUpdateEvolinciteEmailSubscription
>;
export const onDeleteEvolinciteEmail = /* GraphQL */ `subscription OnDeleteEvolinciteEmail(
  $filter: ModelSubscriptionEvolinciteEmailFilterInput
) {
  onDeleteEvolinciteEmail(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteEmailSubscriptionVariables,
  APITypes.OnDeleteEvolinciteEmailSubscription
>;
export const onCreateEvolinciteEmailTemplate = /* GraphQL */ `subscription OnCreateEvolinciteEmailTemplate(
  $filter: ModelSubscriptionEvolinciteEmailTemplateFilterInput
) {
  onCreateEvolinciteEmailTemplate(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteEmailTemplateSubscriptionVariables,
  APITypes.OnCreateEvolinciteEmailTemplateSubscription
>;
export const onUpdateEvolinciteEmailTemplate = /* GraphQL */ `subscription OnUpdateEvolinciteEmailTemplate(
  $filter: ModelSubscriptionEvolinciteEmailTemplateFilterInput
) {
  onUpdateEvolinciteEmailTemplate(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteEmailTemplateSubscriptionVariables,
  APITypes.OnUpdateEvolinciteEmailTemplateSubscription
>;
export const onDeleteEvolinciteEmailTemplate = /* GraphQL */ `subscription OnDeleteEvolinciteEmailTemplate(
  $filter: ModelSubscriptionEvolinciteEmailTemplateFilterInput
) {
  onDeleteEvolinciteEmailTemplate(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteEmailTemplateSubscriptionVariables,
  APITypes.OnDeleteEvolinciteEmailTemplateSubscription
>;
export const onCreateEvolinciteNotification = /* GraphQL */ `subscription OnCreateEvolinciteNotification(
  $filter: ModelSubscriptionEvolinciteNotificationFilterInput
) {
  onCreateEvolinciteNotification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteNotificationSubscriptionVariables,
  APITypes.OnCreateEvolinciteNotificationSubscription
>;
export const onUpdateEvolinciteNotification = /* GraphQL */ `subscription OnUpdateEvolinciteNotification(
  $filter: ModelSubscriptionEvolinciteNotificationFilterInput
) {
  onUpdateEvolinciteNotification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteNotificationSubscriptionVariables,
  APITypes.OnUpdateEvolinciteNotificationSubscription
>;
export const onDeleteEvolinciteNotification = /* GraphQL */ `subscription OnDeleteEvolinciteNotification(
  $filter: ModelSubscriptionEvolinciteNotificationFilterInput
) {
  onDeleteEvolinciteNotification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteNotificationSubscriptionVariables,
  APITypes.OnDeleteEvolinciteNotificationSubscription
>;
export const onCreateEvolinciteUserDepartment = /* GraphQL */ `subscription OnCreateEvolinciteUserDepartment(
  $filter: ModelSubscriptionEvolinciteUserDepartmentFilterInput
) {
  onCreateEvolinciteUserDepartment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteUserDepartmentSubscriptionVariables,
  APITypes.OnCreateEvolinciteUserDepartmentSubscription
>;
export const onUpdateEvolinciteUserDepartment = /* GraphQL */ `subscription OnUpdateEvolinciteUserDepartment(
  $filter: ModelSubscriptionEvolinciteUserDepartmentFilterInput
) {
  onUpdateEvolinciteUserDepartment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteUserDepartmentSubscriptionVariables,
  APITypes.OnUpdateEvolinciteUserDepartmentSubscription
>;
export const onDeleteEvolinciteUserDepartment = /* GraphQL */ `subscription OnDeleteEvolinciteUserDepartment(
  $filter: ModelSubscriptionEvolinciteUserDepartmentFilterInput
) {
  onDeleteEvolinciteUserDepartment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteUserDepartmentSubscriptionVariables,
  APITypes.OnDeleteEvolinciteUserDepartmentSubscription
>;
export const onCreateEvolinciteUserEvolinciteCompany = /* GraphQL */ `subscription OnCreateEvolinciteUserEvolinciteCompany(
  $filter: ModelSubscriptionEvolinciteUserEvolinciteCompanyFilterInput
) {
  onCreateEvolinciteUserEvolinciteCompany(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteUserEvolinciteCompanySubscriptionVariables,
  APITypes.OnCreateEvolinciteUserEvolinciteCompanySubscription
>;
export const onUpdateEvolinciteUserEvolinciteCompany = /* GraphQL */ `subscription OnUpdateEvolinciteUserEvolinciteCompany(
  $filter: ModelSubscriptionEvolinciteUserEvolinciteCompanyFilterInput
) {
  onUpdateEvolinciteUserEvolinciteCompany(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteUserEvolinciteCompanySubscriptionVariables,
  APITypes.OnUpdateEvolinciteUserEvolinciteCompanySubscription
>;
export const onDeleteEvolinciteUserEvolinciteCompany = /* GraphQL */ `subscription OnDeleteEvolinciteUserEvolinciteCompany(
  $filter: ModelSubscriptionEvolinciteUserEvolinciteCompanyFilterInput
) {
  onDeleteEvolinciteUserEvolinciteCompany(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteUserEvolinciteCompanySubscriptionVariables,
  APITypes.OnDeleteEvolinciteUserEvolinciteCompanySubscription
>;
export const onCreateEvolinciteUser = /* GraphQL */ `subscription OnCreateEvolinciteUser(
  $filter: ModelSubscriptionEvolinciteUserFilterInput
) {
  onCreateEvolinciteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteUserSubscriptionVariables,
  APITypes.OnCreateEvolinciteUserSubscription
>;
export const onUpdateEvolinciteUser = /* GraphQL */ `subscription OnUpdateEvolinciteUser(
  $filter: ModelSubscriptionEvolinciteUserFilterInput
) {
  onUpdateEvolinciteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteUserSubscriptionVariables,
  APITypes.OnUpdateEvolinciteUserSubscription
>;
export const onDeleteEvolinciteUser = /* GraphQL */ `subscription OnDeleteEvolinciteUser(
  $filter: ModelSubscriptionEvolinciteUserFilterInput
) {
  onDeleteEvolinciteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteUserSubscriptionVariables,
  APITypes.OnDeleteEvolinciteUserSubscription
>;
export const onCreateEvolinciteCompany = /* GraphQL */ `subscription OnCreateEvolinciteCompany(
  $filter: ModelSubscriptionEvolinciteCompanyFilterInput
) {
  onCreateEvolinciteCompany(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteCompanySubscriptionVariables,
  APITypes.OnCreateEvolinciteCompanySubscription
>;
export const onUpdateEvolinciteCompany = /* GraphQL */ `subscription OnUpdateEvolinciteCompany(
  $filter: ModelSubscriptionEvolinciteCompanyFilterInput
) {
  onUpdateEvolinciteCompany(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteCompanySubscriptionVariables,
  APITypes.OnUpdateEvolinciteCompanySubscription
>;
export const onDeleteEvolinciteCompany = /* GraphQL */ `subscription OnDeleteEvolinciteCompany(
  $filter: ModelSubscriptionEvolinciteCompanyFilterInput
) {
  onDeleteEvolinciteCompany(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteCompanySubscriptionVariables,
  APITypes.OnDeleteEvolinciteCompanySubscription
>;
export const onCreateEvolinciteGoal = /* GraphQL */ `subscription OnCreateEvolinciteGoal(
  $filter: ModelSubscriptionEvolinciteGoalFilterInput
) {
  onCreateEvolinciteGoal(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteGoalSubscriptionVariables,
  APITypes.OnCreateEvolinciteGoalSubscription
>;
export const onUpdateEvolinciteGoal = /* GraphQL */ `subscription OnUpdateEvolinciteGoal(
  $filter: ModelSubscriptionEvolinciteGoalFilterInput
) {
  onUpdateEvolinciteGoal(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteGoalSubscriptionVariables,
  APITypes.OnUpdateEvolinciteGoalSubscription
>;
export const onDeleteEvolinciteGoal = /* GraphQL */ `subscription OnDeleteEvolinciteGoal(
  $filter: ModelSubscriptionEvolinciteGoalFilterInput
) {
  onDeleteEvolinciteGoal(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteGoalSubscriptionVariables,
  APITypes.OnDeleteEvolinciteGoalSubscription
>;
export const onCreateEvolinciteWalletPaymentLog = /* GraphQL */ `subscription OnCreateEvolinciteWalletPaymentLog(
  $filter: ModelSubscriptionEvolinciteWalletPaymentLogFilterInput
) {
  onCreateEvolinciteWalletPaymentLog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteWalletPaymentLogSubscriptionVariables,
  APITypes.OnCreateEvolinciteWalletPaymentLogSubscription
>;
export const onUpdateEvolinciteWalletPaymentLog = /* GraphQL */ `subscription OnUpdateEvolinciteWalletPaymentLog(
  $filter: ModelSubscriptionEvolinciteWalletPaymentLogFilterInput
) {
  onUpdateEvolinciteWalletPaymentLog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteWalletPaymentLogSubscriptionVariables,
  APITypes.OnUpdateEvolinciteWalletPaymentLogSubscription
>;
export const onDeleteEvolinciteWalletPaymentLog = /* GraphQL */ `subscription OnDeleteEvolinciteWalletPaymentLog(
  $filter: ModelSubscriptionEvolinciteWalletPaymentLogFilterInput
) {
  onDeleteEvolinciteWalletPaymentLog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteWalletPaymentLogSubscriptionVariables,
  APITypes.OnDeleteEvolinciteWalletPaymentLogSubscription
>;
export const onCreateEvolinciteExpenseLog = /* GraphQL */ `subscription OnCreateEvolinciteExpenseLog(
  $filter: ModelSubscriptionEvolinciteExpenseLogFilterInput
) {
  onCreateEvolinciteExpenseLog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteExpenseLogSubscriptionVariables,
  APITypes.OnCreateEvolinciteExpenseLogSubscription
>;
export const onUpdateEvolinciteExpenseLog = /* GraphQL */ `subscription OnUpdateEvolinciteExpenseLog(
  $filter: ModelSubscriptionEvolinciteExpenseLogFilterInput
) {
  onUpdateEvolinciteExpenseLog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteExpenseLogSubscriptionVariables,
  APITypes.OnUpdateEvolinciteExpenseLogSubscription
>;
export const onDeleteEvolinciteExpenseLog = /* GraphQL */ `subscription OnDeleteEvolinciteExpenseLog(
  $filter: ModelSubscriptionEvolinciteExpenseLogFilterInput
) {
  onDeleteEvolinciteExpenseLog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteExpenseLogSubscriptionVariables,
  APITypes.OnDeleteEvolinciteExpenseLogSubscription
>;
export const onCreateEvolinciteTicket = /* GraphQL */ `subscription OnCreateEvolinciteTicket(
  $filter: ModelSubscriptionEvolinciteTicketFilterInput
) {
  onCreateEvolinciteTicket(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteTicketSubscriptionVariables,
  APITypes.OnCreateEvolinciteTicketSubscription
>;
export const onUpdateEvolinciteTicket = /* GraphQL */ `subscription OnUpdateEvolinciteTicket(
  $filter: ModelSubscriptionEvolinciteTicketFilterInput
) {
  onUpdateEvolinciteTicket(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteTicketSubscriptionVariables,
  APITypes.OnUpdateEvolinciteTicketSubscription
>;
export const onDeleteEvolinciteTicket = /* GraphQL */ `subscription OnDeleteEvolinciteTicket(
  $filter: ModelSubscriptionEvolinciteTicketFilterInput
) {
  onDeleteEvolinciteTicket(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteTicketSubscriptionVariables,
  APITypes.OnDeleteEvolinciteTicketSubscription
>;
export const onCreateEvolinciteTicketLog = /* GraphQL */ `subscription OnCreateEvolinciteTicketLog(
  $filter: ModelSubscriptionEvolinciteTicketLogFilterInput
) {
  onCreateEvolinciteTicketLog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteTicketLogSubscriptionVariables,
  APITypes.OnCreateEvolinciteTicketLogSubscription
>;
export const onUpdateEvolinciteTicketLog = /* GraphQL */ `subscription OnUpdateEvolinciteTicketLog(
  $filter: ModelSubscriptionEvolinciteTicketLogFilterInput
) {
  onUpdateEvolinciteTicketLog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteTicketLogSubscriptionVariables,
  APITypes.OnUpdateEvolinciteTicketLogSubscription
>;
export const onDeleteEvolinciteTicketLog = /* GraphQL */ `subscription OnDeleteEvolinciteTicketLog(
  $filter: ModelSubscriptionEvolinciteTicketLogFilterInput
) {
  onDeleteEvolinciteTicketLog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteTicketLogSubscriptionVariables,
  APITypes.OnDeleteEvolinciteTicketLogSubscription
>;
export const onCreateEvolinciteFile = /* GraphQL */ `subscription OnCreateEvolinciteFile(
  $filter: ModelSubscriptionEvolinciteFileFilterInput
) {
  onCreateEvolinciteFile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteFileSubscriptionVariables,
  APITypes.OnCreateEvolinciteFileSubscription
>;
export const onUpdateEvolinciteFile = /* GraphQL */ `subscription OnUpdateEvolinciteFile(
  $filter: ModelSubscriptionEvolinciteFileFilterInput
) {
  onUpdateEvolinciteFile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteFileSubscriptionVariables,
  APITypes.OnUpdateEvolinciteFileSubscription
>;
export const onDeleteEvolinciteFile = /* GraphQL */ `subscription OnDeleteEvolinciteFile(
  $filter: ModelSubscriptionEvolinciteFileFilterInput
) {
  onDeleteEvolinciteFile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteFileSubscriptionVariables,
  APITypes.OnDeleteEvolinciteFileSubscription
>;
export const onCreateEvolinciteFolder = /* GraphQL */ `subscription OnCreateEvolinciteFolder(
  $filter: ModelSubscriptionEvolinciteFolderFilterInput
) {
  onCreateEvolinciteFolder(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteFolderSubscriptionVariables,
  APITypes.OnCreateEvolinciteFolderSubscription
>;
export const onUpdateEvolinciteFolder = /* GraphQL */ `subscription OnUpdateEvolinciteFolder(
  $filter: ModelSubscriptionEvolinciteFolderFilterInput
) {
  onUpdateEvolinciteFolder(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteFolderSubscriptionVariables,
  APITypes.OnUpdateEvolinciteFolderSubscription
>;
export const onDeleteEvolinciteFolder = /* GraphQL */ `subscription OnDeleteEvolinciteFolder(
  $filter: ModelSubscriptionEvolinciteFolderFilterInput
) {
  onDeleteEvolinciteFolder(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteFolderSubscriptionVariables,
  APITypes.OnDeleteEvolinciteFolderSubscription
>;
export const onCreateEvolinciteArticle = /* GraphQL */ `subscription OnCreateEvolinciteArticle(
  $filter: ModelSubscriptionEvolinciteArticleFilterInput
) {
  onCreateEvolinciteArticle(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteArticleSubscriptionVariables,
  APITypes.OnCreateEvolinciteArticleSubscription
>;
export const onUpdateEvolinciteArticle = /* GraphQL */ `subscription OnUpdateEvolinciteArticle(
  $filter: ModelSubscriptionEvolinciteArticleFilterInput
) {
  onUpdateEvolinciteArticle(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteArticleSubscriptionVariables,
  APITypes.OnUpdateEvolinciteArticleSubscription
>;
export const onDeleteEvolinciteArticle = /* GraphQL */ `subscription OnDeleteEvolinciteArticle(
  $filter: ModelSubscriptionEvolinciteArticleFilterInput
) {
  onDeleteEvolinciteArticle(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteArticleSubscriptionVariables,
  APITypes.OnDeleteEvolinciteArticleSubscription
>;
export const onCreateEvolinciteArticleComment = /* GraphQL */ `subscription OnCreateEvolinciteArticleComment(
  $filter: ModelSubscriptionEvolinciteArticleCommentFilterInput
) {
  onCreateEvolinciteArticleComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteArticleCommentSubscriptionVariables,
  APITypes.OnCreateEvolinciteArticleCommentSubscription
>;
export const onUpdateEvolinciteArticleComment = /* GraphQL */ `subscription OnUpdateEvolinciteArticleComment(
  $filter: ModelSubscriptionEvolinciteArticleCommentFilterInput
) {
  onUpdateEvolinciteArticleComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteArticleCommentSubscriptionVariables,
  APITypes.OnUpdateEvolinciteArticleCommentSubscription
>;
export const onDeleteEvolinciteArticleComment = /* GraphQL */ `subscription OnDeleteEvolinciteArticleComment(
  $filter: ModelSubscriptionEvolinciteArticleCommentFilterInput
) {
  onDeleteEvolinciteArticleComment(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteArticleCommentSubscriptionVariables,
  APITypes.OnDeleteEvolinciteArticleCommentSubscription
>;
export const onCreateEvolinciteFormConfiguration = /* GraphQL */ `subscription OnCreateEvolinciteFormConfiguration(
  $filter: ModelSubscriptionEvolinciteFormConfigurationFilterInput
) {
  onCreateEvolinciteFormConfiguration(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteFormConfigurationSubscriptionVariables,
  APITypes.OnCreateEvolinciteFormConfigurationSubscription
>;
export const onUpdateEvolinciteFormConfiguration = /* GraphQL */ `subscription OnUpdateEvolinciteFormConfiguration(
  $filter: ModelSubscriptionEvolinciteFormConfigurationFilterInput
) {
  onUpdateEvolinciteFormConfiguration(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteFormConfigurationSubscriptionVariables,
  APITypes.OnUpdateEvolinciteFormConfigurationSubscription
>;
export const onDeleteEvolinciteFormConfiguration = /* GraphQL */ `subscription OnDeleteEvolinciteFormConfiguration(
  $filter: ModelSubscriptionEvolinciteFormConfigurationFilterInput
) {
  onDeleteEvolinciteFormConfiguration(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteFormConfigurationSubscriptionVariables,
  APITypes.OnDeleteEvolinciteFormConfigurationSubscription
>;
export const onCreateEvolinciteFormAnswer = /* GraphQL */ `subscription OnCreateEvolinciteFormAnswer(
  $filter: ModelSubscriptionEvolinciteFormAnswerFilterInput
) {
  onCreateEvolinciteFormAnswer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteFormAnswerSubscriptionVariables,
  APITypes.OnCreateEvolinciteFormAnswerSubscription
>;
export const onUpdateEvolinciteFormAnswer = /* GraphQL */ `subscription OnUpdateEvolinciteFormAnswer(
  $filter: ModelSubscriptionEvolinciteFormAnswerFilterInput
) {
  onUpdateEvolinciteFormAnswer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteFormAnswerSubscriptionVariables,
  APITypes.OnUpdateEvolinciteFormAnswerSubscription
>;
export const onDeleteEvolinciteFormAnswer = /* GraphQL */ `subscription OnDeleteEvolinciteFormAnswer(
  $filter: ModelSubscriptionEvolinciteFormAnswerFilterInput
) {
  onDeleteEvolinciteFormAnswer(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteFormAnswerSubscriptionVariables,
  APITypes.OnDeleteEvolinciteFormAnswerSubscription
>;
export const onCreateEvolincitePaymentAutomation = /* GraphQL */ `subscription OnCreateEvolincitePaymentAutomation(
  $filter: ModelSubscriptionEvolincitePaymentAutomationFilterInput
) {
  onCreateEvolincitePaymentAutomation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolincitePaymentAutomationSubscriptionVariables,
  APITypes.OnCreateEvolincitePaymentAutomationSubscription
>;
export const onUpdateEvolincitePaymentAutomation = /* GraphQL */ `subscription OnUpdateEvolincitePaymentAutomation(
  $filter: ModelSubscriptionEvolincitePaymentAutomationFilterInput
) {
  onUpdateEvolincitePaymentAutomation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolincitePaymentAutomationSubscriptionVariables,
  APITypes.OnUpdateEvolincitePaymentAutomationSubscription
>;
export const onDeleteEvolincitePaymentAutomation = /* GraphQL */ `subscription OnDeleteEvolincitePaymentAutomation(
  $filter: ModelSubscriptionEvolincitePaymentAutomationFilterInput
) {
  onDeleteEvolincitePaymentAutomation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolincitePaymentAutomationSubscriptionVariables,
  APITypes.OnDeleteEvolincitePaymentAutomationSubscription
>;
export const onCreateEvolinciteMail = /* GraphQL */ `subscription OnCreateEvolinciteMail(
  $filter: ModelSubscriptionEvolinciteMailFilterInput
) {
  onCreateEvolinciteMail(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteMailSubscriptionVariables,
  APITypes.OnCreateEvolinciteMailSubscription
>;
export const onUpdateEvolinciteMail = /* GraphQL */ `subscription OnUpdateEvolinciteMail(
  $filter: ModelSubscriptionEvolinciteMailFilterInput
) {
  onUpdateEvolinciteMail(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteMailSubscriptionVariables,
  APITypes.OnUpdateEvolinciteMailSubscription
>;
export const onDeleteEvolinciteMail = /* GraphQL */ `subscription OnDeleteEvolinciteMail(
  $filter: ModelSubscriptionEvolinciteMailFilterInput
) {
  onDeleteEvolinciteMail(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteMailSubscriptionVariables,
  APITypes.OnDeleteEvolinciteMailSubscription
>;
export const onCreateEvolinciteMailConfiguration = /* GraphQL */ `subscription OnCreateEvolinciteMailConfiguration(
  $filter: ModelSubscriptionEvolinciteMailConfigurationFilterInput
) {
  onCreateEvolinciteMailConfiguration(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteMailConfigurationSubscriptionVariables,
  APITypes.OnCreateEvolinciteMailConfigurationSubscription
>;
export const onUpdateEvolinciteMailConfiguration = /* GraphQL */ `subscription OnUpdateEvolinciteMailConfiguration(
  $filter: ModelSubscriptionEvolinciteMailConfigurationFilterInput
) {
  onUpdateEvolinciteMailConfiguration(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteMailConfigurationSubscriptionVariables,
  APITypes.OnUpdateEvolinciteMailConfigurationSubscription
>;
export const onDeleteEvolinciteMailConfiguration = /* GraphQL */ `subscription OnDeleteEvolinciteMailConfiguration(
  $filter: ModelSubscriptionEvolinciteMailConfigurationFilterInput
) {
  onDeleteEvolinciteMailConfiguration(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteMailConfigurationSubscriptionVariables,
  APITypes.OnDeleteEvolinciteMailConfigurationSubscription
>;
export const onCreateEvolinciteMailTemplate = /* GraphQL */ `subscription OnCreateEvolinciteMailTemplate(
  $filter: ModelSubscriptionEvolinciteMailTemplateFilterInput
) {
  onCreateEvolinciteMailTemplate(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteMailTemplateSubscriptionVariables,
  APITypes.OnCreateEvolinciteMailTemplateSubscription
>;
export const onUpdateEvolinciteMailTemplate = /* GraphQL */ `subscription OnUpdateEvolinciteMailTemplate(
  $filter: ModelSubscriptionEvolinciteMailTemplateFilterInput
) {
  onUpdateEvolinciteMailTemplate(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteMailTemplateSubscriptionVariables,
  APITypes.OnUpdateEvolinciteMailTemplateSubscription
>;
export const onDeleteEvolinciteMailTemplate = /* GraphQL */ `subscription OnDeleteEvolinciteMailTemplate(
  $filter: ModelSubscriptionEvolinciteMailTemplateFilterInput
) {
  onDeleteEvolinciteMailTemplate(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteMailTemplateSubscriptionVariables,
  APITypes.OnDeleteEvolinciteMailTemplateSubscription
>;
export const onCreateEvolinciteMailTemplateLog = /* GraphQL */ `subscription OnCreateEvolinciteMailTemplateLog(
  $filter: ModelSubscriptionEvolinciteMailTemplateLogFilterInput
) {
  onCreateEvolinciteMailTemplateLog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteMailTemplateLogSubscriptionVariables,
  APITypes.OnCreateEvolinciteMailTemplateLogSubscription
>;
export const onUpdateEvolinciteMailTemplateLog = /* GraphQL */ `subscription OnUpdateEvolinciteMailTemplateLog(
  $filter: ModelSubscriptionEvolinciteMailTemplateLogFilterInput
) {
  onUpdateEvolinciteMailTemplateLog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteMailTemplateLogSubscriptionVariables,
  APITypes.OnUpdateEvolinciteMailTemplateLogSubscription
>;
export const onDeleteEvolinciteMailTemplateLog = /* GraphQL */ `subscription OnDeleteEvolinciteMailTemplateLog(
  $filter: ModelSubscriptionEvolinciteMailTemplateLogFilterInput
) {
  onDeleteEvolinciteMailTemplateLog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteMailTemplateLogSubscriptionVariables,
  APITypes.OnDeleteEvolinciteMailTemplateLogSubscription
>;
export const onCreateEvolincitePackage = /* GraphQL */ `subscription OnCreateEvolincitePackage(
  $filter: ModelSubscriptionEvolincitePackageFilterInput
) {
  onCreateEvolincitePackage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolincitePackageSubscriptionVariables,
  APITypes.OnCreateEvolincitePackageSubscription
>;
export const onUpdateEvolincitePackage = /* GraphQL */ `subscription OnUpdateEvolincitePackage(
  $filter: ModelSubscriptionEvolincitePackageFilterInput
) {
  onUpdateEvolincitePackage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolincitePackageSubscriptionVariables,
  APITypes.OnUpdateEvolincitePackageSubscription
>;
export const onDeleteEvolincitePackage = /* GraphQL */ `subscription OnDeleteEvolincitePackage(
  $filter: ModelSubscriptionEvolincitePackageFilterInput
) {
  onDeleteEvolincitePackage(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolincitePackageSubscriptionVariables,
  APITypes.OnDeleteEvolincitePackageSubscription
>;
export const onCreateEvolinciteCompanySubscription = /* GraphQL */ `subscription OnCreateEvolinciteCompanySubscription(
  $filter: ModelSubscriptionEvolinciteCompanySubscriptionFilterInput
) {
  onCreateEvolinciteCompanySubscription(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteCompanySubscriptionSubscriptionVariables,
  APITypes.OnCreateEvolinciteCompanySubscriptionSubscription
>;
export const onUpdateEvolinciteCompanySubscription = /* GraphQL */ `subscription OnUpdateEvolinciteCompanySubscription(
  $filter: ModelSubscriptionEvolinciteCompanySubscriptionFilterInput
) {
  onUpdateEvolinciteCompanySubscription(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteCompanySubscriptionSubscriptionVariables,
  APITypes.OnUpdateEvolinciteCompanySubscriptionSubscription
>;
export const onDeleteEvolinciteCompanySubscription = /* GraphQL */ `subscription OnDeleteEvolinciteCompanySubscription(
  $filter: ModelSubscriptionEvolinciteCompanySubscriptionFilterInput
) {
  onDeleteEvolinciteCompanySubscription(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteCompanySubscriptionSubscriptionVariables,
  APITypes.OnDeleteEvolinciteCompanySubscriptionSubscription
>;
export const onCreateEvolinciteEmployeeObservation = /* GraphQL */ `subscription OnCreateEvolinciteEmployeeObservation(
  $filter: ModelSubscriptionEvolinciteEmployeeObservationFilterInput
) {
  onCreateEvolinciteEmployeeObservation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteEmployeeObservationSubscriptionVariables,
  APITypes.OnCreateEvolinciteEmployeeObservationSubscription
>;
export const onUpdateEvolinciteEmployeeObservation = /* GraphQL */ `subscription OnUpdateEvolinciteEmployeeObservation(
  $filter: ModelSubscriptionEvolinciteEmployeeObservationFilterInput
) {
  onUpdateEvolinciteEmployeeObservation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteEmployeeObservationSubscriptionVariables,
  APITypes.OnUpdateEvolinciteEmployeeObservationSubscription
>;
export const onDeleteEvolinciteEmployeeObservation = /* GraphQL */ `subscription OnDeleteEvolinciteEmployeeObservation(
  $filter: ModelSubscriptionEvolinciteEmployeeObservationFilterInput
) {
  onDeleteEvolinciteEmployeeObservation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteEmployeeObservationSubscriptionVariables,
  APITypes.OnDeleteEvolinciteEmployeeObservationSubscription
>;
export const onCreateEvolinciteTag = /* GraphQL */ `subscription OnCreateEvolinciteTag(
  $filter: ModelSubscriptionEvolinciteTagFilterInput
) {
  onCreateEvolinciteTag(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteTagSubscriptionVariables,
  APITypes.OnCreateEvolinciteTagSubscription
>;
export const onUpdateEvolinciteTag = /* GraphQL */ `subscription OnUpdateEvolinciteTag(
  $filter: ModelSubscriptionEvolinciteTagFilterInput
) {
  onUpdateEvolinciteTag(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteTagSubscriptionVariables,
  APITypes.OnUpdateEvolinciteTagSubscription
>;
export const onDeleteEvolinciteTag = /* GraphQL */ `subscription OnDeleteEvolinciteTag(
  $filter: ModelSubscriptionEvolinciteTagFilterInput
) {
  onDeleteEvolinciteTag(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteTagSubscriptionVariables,
  APITypes.OnDeleteEvolinciteTagSubscription
>;
export const onCreateEvolinciteMilestone = /* GraphQL */ `subscription OnCreateEvolinciteMilestone(
  $filter: ModelSubscriptionEvolinciteMilestoneFilterInput
) {
  onCreateEvolinciteMilestone(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteMilestoneSubscriptionVariables,
  APITypes.OnCreateEvolinciteMilestoneSubscription
>;
export const onUpdateEvolinciteMilestone = /* GraphQL */ `subscription OnUpdateEvolinciteMilestone(
  $filter: ModelSubscriptionEvolinciteMilestoneFilterInput
) {
  onUpdateEvolinciteMilestone(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteMilestoneSubscriptionVariables,
  APITypes.OnUpdateEvolinciteMilestoneSubscription
>;
export const onDeleteEvolinciteMilestone = /* GraphQL */ `subscription OnDeleteEvolinciteMilestone(
  $filter: ModelSubscriptionEvolinciteMilestoneFilterInput
) {
  onDeleteEvolinciteMilestone(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteMilestoneSubscriptionVariables,
  APITypes.OnDeleteEvolinciteMilestoneSubscription
>;
export const onCreateEvolinciteUserLog = /* GraphQL */ `subscription OnCreateEvolinciteUserLog(
  $filter: ModelSubscriptionEvolinciteUserLogFilterInput
) {
  onCreateEvolinciteUserLog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteUserLogSubscriptionVariables,
  APITypes.OnCreateEvolinciteUserLogSubscription
>;
export const onUpdateEvolinciteUserLog = /* GraphQL */ `subscription OnUpdateEvolinciteUserLog(
  $filter: ModelSubscriptionEvolinciteUserLogFilterInput
) {
  onUpdateEvolinciteUserLog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteUserLogSubscriptionVariables,
  APITypes.OnUpdateEvolinciteUserLogSubscription
>;
export const onDeleteEvolinciteUserLog = /* GraphQL */ `subscription OnDeleteEvolinciteUserLog(
  $filter: ModelSubscriptionEvolinciteUserLogFilterInput
) {
  onDeleteEvolinciteUserLog(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteUserLogSubscriptionVariables,
  APITypes.OnDeleteEvolinciteUserLogSubscription
>;
export const onCreateEvolinciteUserTimeTracking = /* GraphQL */ `subscription OnCreateEvolinciteUserTimeTracking(
  $filter: ModelSubscriptionEvolinciteUserTimeTrackingFilterInput
) {
  onCreateEvolinciteUserTimeTracking(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteUserTimeTrackingSubscriptionVariables,
  APITypes.OnCreateEvolinciteUserTimeTrackingSubscription
>;
export const onUpdateEvolinciteUserTimeTracking = /* GraphQL */ `subscription OnUpdateEvolinciteUserTimeTracking(
  $filter: ModelSubscriptionEvolinciteUserTimeTrackingFilterInput
) {
  onUpdateEvolinciteUserTimeTracking(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteUserTimeTrackingSubscriptionVariables,
  APITypes.OnUpdateEvolinciteUserTimeTrackingSubscription
>;
export const onDeleteEvolinciteUserTimeTracking = /* GraphQL */ `subscription OnDeleteEvolinciteUserTimeTracking(
  $filter: ModelSubscriptionEvolinciteUserTimeTrackingFilterInput
) {
  onDeleteEvolinciteUserTimeTracking(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteUserTimeTrackingSubscriptionVariables,
  APITypes.OnDeleteEvolinciteUserTimeTrackingSubscription
>;
export const onCreateEvolinciteSchedule = /* GraphQL */ `subscription OnCreateEvolinciteSchedule(
  $filter: ModelSubscriptionEvolinciteScheduleFilterInput
) {
  onCreateEvolinciteSchedule(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteScheduleSubscriptionVariables,
  APITypes.OnCreateEvolinciteScheduleSubscription
>;
export const onUpdateEvolinciteSchedule = /* GraphQL */ `subscription OnUpdateEvolinciteSchedule(
  $filter: ModelSubscriptionEvolinciteScheduleFilterInput
) {
  onUpdateEvolinciteSchedule(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteScheduleSubscriptionVariables,
  APITypes.OnUpdateEvolinciteScheduleSubscription
>;
export const onDeleteEvolinciteSchedule = /* GraphQL */ `subscription OnDeleteEvolinciteSchedule(
  $filter: ModelSubscriptionEvolinciteScheduleFilterInput
) {
  onDeleteEvolinciteSchedule(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteScheduleSubscriptionVariables,
  APITypes.OnDeleteEvolinciteScheduleSubscription
>;
export const onCreateEvolinciteTemplateRequest = /* GraphQL */ `subscription OnCreateEvolinciteTemplateRequest(
  $filter: ModelSubscriptionEvolinciteTemplateRequestFilterInput
) {
  onCreateEvolinciteTemplateRequest(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteTemplateRequestSubscriptionVariables,
  APITypes.OnCreateEvolinciteTemplateRequestSubscription
>;
export const onUpdateEvolinciteTemplateRequest = /* GraphQL */ `subscription OnUpdateEvolinciteTemplateRequest(
  $filter: ModelSubscriptionEvolinciteTemplateRequestFilterInput
) {
  onUpdateEvolinciteTemplateRequest(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteTemplateRequestSubscriptionVariables,
  APITypes.OnUpdateEvolinciteTemplateRequestSubscription
>;
export const onDeleteEvolinciteTemplateRequest = /* GraphQL */ `subscription OnDeleteEvolinciteTemplateRequest(
  $filter: ModelSubscriptionEvolinciteTemplateRequestFilterInput
) {
  onDeleteEvolinciteTemplateRequest(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteTemplateRequestSubscriptionVariables,
  APITypes.OnDeleteEvolinciteTemplateRequestSubscription
>;
export const onCreateEvolinciteRequest = /* GraphQL */ `subscription OnCreateEvolinciteRequest(
  $filter: ModelSubscriptionEvolinciteRequestFilterInput
) {
  onCreateEvolinciteRequest(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteRequestSubscriptionVariables,
  APITypes.OnCreateEvolinciteRequestSubscription
>;
export const onUpdateEvolinciteRequest = /* GraphQL */ `subscription OnUpdateEvolinciteRequest(
  $filter: ModelSubscriptionEvolinciteRequestFilterInput
) {
  onUpdateEvolinciteRequest(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteRequestSubscriptionVariables,
  APITypes.OnUpdateEvolinciteRequestSubscription
>;
export const onDeleteEvolinciteRequest = /* GraphQL */ `subscription OnDeleteEvolinciteRequest(
  $filter: ModelSubscriptionEvolinciteRequestFilterInput
) {
  onDeleteEvolinciteRequest(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteRequestSubscriptionVariables,
  APITypes.OnDeleteEvolinciteRequestSubscription
>;
export const onCreateEvolinciteActivityEvolinciteUser = /* GraphQL */ `subscription OnCreateEvolinciteActivityEvolinciteUser(
  $filter: ModelSubscriptionEvolinciteActivityEvolinciteUserFilterInput
) {
  onCreateEvolinciteActivityEvolinciteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteActivityEvolinciteUserSubscriptionVariables,
  APITypes.OnCreateEvolinciteActivityEvolinciteUserSubscription
>;
export const onUpdateEvolinciteActivityEvolinciteUser = /* GraphQL */ `subscription OnUpdateEvolinciteActivityEvolinciteUser(
  $filter: ModelSubscriptionEvolinciteActivityEvolinciteUserFilterInput
) {
  onUpdateEvolinciteActivityEvolinciteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteActivityEvolinciteUserSubscriptionVariables,
  APITypes.OnUpdateEvolinciteActivityEvolinciteUserSubscription
>;
export const onDeleteEvolinciteActivityEvolinciteUser = /* GraphQL */ `subscription OnDeleteEvolinciteActivityEvolinciteUser(
  $filter: ModelSubscriptionEvolinciteActivityEvolinciteUserFilterInput
) {
  onDeleteEvolinciteActivityEvolinciteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteActivityEvolinciteUserSubscriptionVariables,
  APITypes.OnDeleteEvolinciteActivityEvolinciteUserSubscription
>;
export const onCreateEvolinciteUserEvolinciteCrmNegotiation = /* GraphQL */ `subscription OnCreateEvolinciteUserEvolinciteCrmNegotiation(
  $filter: ModelSubscriptionEvolinciteUserEvolinciteCrmNegotiationFilterInput
) {
  onCreateEvolinciteUserEvolinciteCrmNegotiation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteUserEvolinciteCrmNegotiationSubscriptionVariables,
  APITypes.OnCreateEvolinciteUserEvolinciteCrmNegotiationSubscription
>;
export const onUpdateEvolinciteUserEvolinciteCrmNegotiation = /* GraphQL */ `subscription OnUpdateEvolinciteUserEvolinciteCrmNegotiation(
  $filter: ModelSubscriptionEvolinciteUserEvolinciteCrmNegotiationFilterInput
) {
  onUpdateEvolinciteUserEvolinciteCrmNegotiation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteUserEvolinciteCrmNegotiationSubscriptionVariables,
  APITypes.OnUpdateEvolinciteUserEvolinciteCrmNegotiationSubscription
>;
export const onDeleteEvolinciteUserEvolinciteCrmNegotiation = /* GraphQL */ `subscription OnDeleteEvolinciteUserEvolinciteCrmNegotiation(
  $filter: ModelSubscriptionEvolinciteUserEvolinciteCrmNegotiationFilterInput
) {
  onDeleteEvolinciteUserEvolinciteCrmNegotiation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteUserEvolinciteCrmNegotiationSubscriptionVariables,
  APITypes.OnDeleteEvolinciteUserEvolinciteCrmNegotiationSubscription
>;
export const onCreateEvolinciteRoomEvolinciteUser = /* GraphQL */ `subscription OnCreateEvolinciteRoomEvolinciteUser(
  $filter: ModelSubscriptionEvolinciteRoomEvolinciteUserFilterInput
) {
  onCreateEvolinciteRoomEvolinciteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEvolinciteRoomEvolinciteUserSubscriptionVariables,
  APITypes.OnCreateEvolinciteRoomEvolinciteUserSubscription
>;
export const onUpdateEvolinciteRoomEvolinciteUser = /* GraphQL */ `subscription OnUpdateEvolinciteRoomEvolinciteUser(
  $filter: ModelSubscriptionEvolinciteRoomEvolinciteUserFilterInput
) {
  onUpdateEvolinciteRoomEvolinciteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEvolinciteRoomEvolinciteUserSubscriptionVariables,
  APITypes.OnUpdateEvolinciteRoomEvolinciteUserSubscription
>;
export const onDeleteEvolinciteRoomEvolinciteUser = /* GraphQL */ `subscription OnDeleteEvolinciteRoomEvolinciteUser(
  $filter: ModelSubscriptionEvolinciteRoomEvolinciteUserFilterInput
) {
  onDeleteEvolinciteRoomEvolinciteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEvolinciteRoomEvolinciteUserSubscriptionVariables,
  APITypes.OnDeleteEvolinciteRoomEvolinciteUserSubscription
>;
