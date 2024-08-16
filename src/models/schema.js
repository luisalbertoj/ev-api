export const schema = {
    "models": {
        "EvolinciteCompetence": {
            "name": "EvolinciteCompetence",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "content": {
                    "name": "content",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "application": {
                    "name": "application",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteApplication"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteSyllabus": {
                    "name": "EvolinciteSyllabus",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteSyllabus"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "evolinciteCompetenceEvolinciteSyllabusId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "evolinciteCompetenceEvolinciteSyllabusId": {
                    "name": "evolinciteCompetenceEvolinciteSyllabusId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteCompetences",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteCourse": {
            "name": "EvolinciteCourse",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "durationUnit": {
                    "name": "durationUnit",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "duration": {
                    "name": "duration",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "objectives": {
                    "name": "objectives",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "application": {
                    "name": "application",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteApplication"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteSyllabus": {
                    "name": "EvolinciteSyllabus",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteSyllabus"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "evolinciteCourseEvolinciteSyllabusId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "evolinciteCourseEvolinciteSyllabusId": {
                    "name": "evolinciteCourseEvolinciteSyllabusId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteCourses",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteSyllabus": {
            "name": "EvolinciteSyllabus",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "content": {
                    "name": "content",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "application": {
                    "name": "application",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteApplication"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompetence": {
                    "name": "EvolinciteCompetence",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompetence"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteSyllabusEvolinciteCompetenceId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "evolinciteSyllabusEvolinciteCompetenceId": {
                    "name": "evolinciteSyllabusEvolinciteCompetenceId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteSyllabi",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteUserAnswers": {
            "name": "EvolinciteUserAnswers",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "answers": {
                    "name": "answers",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "application": {
                    "name": "application",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteApplication"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteUser": {
                    "name": "EvolinciteUser",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "evolinciteUserAnswersEvolinciteUserId"
                        ]
                    }
                },
                "EvolinciteSyllabus": {
                    "name": "EvolinciteSyllabus",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteSyllabus"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "id"
                        ],
                        "targetNames": [
                            "evolinciteUserAnswersEvolinciteSyllabusId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "evolinciteUserAnswersEvolinciteUserId": {
                    "name": "evolinciteUserAnswersEvolinciteUserId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteUserAnswersEvolinciteSyllabusId": {
                    "name": "evolinciteUserAnswersEvolinciteSyllabusId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteUserAnswers",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteProcessType": {
            "name": "EvolinciteProcessType",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "order": {
                    "name": "order",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "sellerCommission": {
                    "name": "sellerCommission",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "referrerCommission": {
                    "name": "referrerCommission",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "EvolinciteCrmNegotiations": {
                    "name": "EvolinciteCrmNegotiations",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteCrmNegotiation"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteProcessType"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteProcessTypes",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteExpenseType": {
            "name": "EvolinciteExpenseType",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteField"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "setting": {
                    "name": "setting",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteExpenses": {
                    "name": "EvolinciteExpenses",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteExpense"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteExpenseType"
                        ]
                    }
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteExpenseTypes",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteExpense": {
            "name": "EvolinciteExpense",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "amount": {
                    "name": "amount",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "process": {
                    "name": "process",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "expenseState": {
                    "name": "expenseState",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteExpenseStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "expenseDate": {
                    "name": "expenseDate",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "observations": {
                    "name": "observations",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "voucher": {
                    "name": "voucher",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "transactionType": {
                    "name": "transactionType",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteTransactionType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "reference": {
                    "name": "reference",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteExpenseTypeID": {
                    "name": "evolinciteExpenseTypeID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteExpenseType": {
                    "name": "EvolinciteExpenseType",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteExpenseType"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteExpenseTypeID"
                        ]
                    }
                },
                "evolinciteCrmNegotiationID": {
                    "name": "evolinciteCrmNegotiationID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCrmNegotiation": {
                    "name": "EvolinciteCrmNegotiation",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCrmNegotiation"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCrmNegotiationID"
                        ]
                    }
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteExpenseLogs": {
                    "name": "EvolinciteExpenseLogs",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteExpenseLog"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteExpense"
                        ]
                    }
                },
                "evolinciteUserID": {
                    "name": "evolinciteUserID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteUser": {
                    "name": "EvolinciteUser",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteUserID"
                        ]
                    }
                },
                "evolinciteUserResponsibleID": {
                    "name": "evolinciteUserResponsibleID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteUserResponsible": {
                    "name": "EvolinciteUserResponsible",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteUserResponsibleID"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteExpenses",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteExpenseType",
                        "fields": [
                            "evolinciteExpenseTypeID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCrmNegotiation",
                        "fields": [
                            "evolinciteCrmNegotiationID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUser",
                        "fields": [
                            "evolinciteUserID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUserResponsible",
                        "fields": [
                            "evolinciteUserResponsibleID",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteUserEvolinciteJobTitle": {
            "name": "EvolinciteUserEvolinciteJobTitle",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteJobTitleID": {
                    "name": "evolinciteJobTitleID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteJobTitle": {
                    "name": "EvolinciteJobTitle",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteJobTitle"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteJobTitleID"
                        ]
                    }
                },
                "evolinciteUserID": {
                    "name": "evolinciteUserID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteUser": {
                    "name": "EvolinciteUser",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteUserID"
                        ]
                    }
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteUserEvolinciteJobTitles",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteJobTitle",
                        "fields": [
                            "evolinciteJobTitleID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUser",
                        "fields": [
                            "evolinciteUserID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteJobTitle": {
            "name": "EvolinciteJobTitle",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "salary": {
                    "name": "salary",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "EvolinciteUserEvolinciteJobTitle": {
                    "name": "EvolinciteUserEvolinciteJobTitle",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteUserEvolinciteJobTitle"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteJobTitle"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteJobTitles",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteWalletPayment": {
            "name": "EvolinciteWalletPayment",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "amount": {
                    "name": "amount",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "scheduledDate": {
                    "name": "scheduledDate",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "datePayment": {
                    "name": "datePayment",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "paymentStatus": {
                    "name": "paymentStatus",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteWalletPaymentStatus"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "prePayment": {
                    "name": "prePayment",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "postPayment": {
                    "name": "postPayment",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "observations": {
                    "name": "observations",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "voucher": {
                    "name": "voucher",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "transactionType": {
                    "name": "transactionType",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteTransactionType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "reference": {
                    "name": "reference",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "amountInterest": {
                    "name": "amountInterest",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "amountCollection": {
                    "name": "amountCollection",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "evolinciteUserReferrerID": {
                    "name": "evolinciteUserReferrerID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteUserReferrer": {
                    "name": "EvolinciteUserReferrer",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteUserReferrerID"
                        ]
                    }
                },
                "evolinciteUserSellerID": {
                    "name": "evolinciteUserSellerID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteUserSeller": {
                    "name": "EvolinciteUserSeller",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteUserSellerID"
                        ]
                    }
                },
                "evolinciteCrmNegotiationID": {
                    "name": "evolinciteCrmNegotiationID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCrmNegotiation": {
                    "name": "EvolinciteCrmNegotiation",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCrmNegotiation"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCrmNegotiationID"
                        ]
                    }
                },
                "evolinciteCustomerID": {
                    "name": "evolinciteCustomerID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCustomer": {
                    "name": "EvolinciteCustomer",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCustomer"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCustomerID"
                        ]
                    }
                },
                "EvolinciteWalletPaymentLogs": {
                    "name": "EvolinciteWalletPaymentLogs",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteWalletPaymentLog"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteWalletPayment"
                        ]
                    }
                },
                "evolinciteUserResponsibleID": {
                    "name": "evolinciteUserResponsibleID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteUserResponsible": {
                    "name": "EvolinciteUserResponsible",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteUserResponsibleID"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteWalletPayments",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUserReferrer",
                        "fields": [
                            "evolinciteUserReferrerID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUserSeller",
                        "fields": [
                            "evolinciteUserSellerID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCrmNegotiation",
                        "fields": [
                            "evolinciteCrmNegotiationID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCustomer",
                        "fields": [
                            "evolinciteCustomerID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUserResponsible",
                        "fields": [
                            "evolinciteUserResponsibleID",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteCrmNegotiationField": {
            "name": "EvolinciteCrmNegotiationField",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "field": {
                    "name": "field",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteField"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "required": {
                    "name": "required",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "order": {
                    "name": "order",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "meta": {
                    "name": "meta",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "EvolinciteCrmNegotiationFieldValues": {
                    "name": "EvolinciteCrmNegotiationFieldValues",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteCrmNegotiationFieldValue"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCrmNegotiationField"
                        ]
                    }
                },
                "evolinciteCrmNegotiationSectionID": {
                    "name": "evolinciteCrmNegotiationSectionID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCrmNegotiationSection": {
                    "name": "EvolinciteCrmNegotiationSection",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCrmNegotiationSection"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCrmNegotiationSectionID"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteCrmNegotiationFields",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCrmNegotiationSection",
                        "fields": [
                            "evolinciteCrmNegotiationSectionID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteCrmNegotiationSection": {
            "name": "EvolinciteCrmNegotiationSection",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "order": {
                    "name": "order",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "meta": {
                    "name": "meta",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "EvolinciteCrmNegotiationFields": {
                    "name": "EvolinciteCrmNegotiationFields",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteCrmNegotiationField"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCrmNegotiationSection"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteCrmNegotiationSections",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteCrmAutomation": {
            "name": "EvolinciteCrmAutomation",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "rule": {
                    "name": "rule",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteRule"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "setting": {
                    "name": "setting",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "order": {
                    "name": "order",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "evolinciteCrmStateID": {
                    "name": "evolinciteCrmStateID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCrmState": {
                    "name": "EvolinciteCrmState",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCrmState"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCrmStateID"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteCrmAutomations",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCrmState",
                        "fields": [
                            "evolinciteCrmStateID",
                            "order"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteComment": {
            "name": "EvolinciteComment",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "files": {
                    "name": "files",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "content": {
                    "name": "content",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pinned": {
                    "name": "pinned",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteUserID": {
                    "name": "evolinciteUserID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCrmNegotiationID": {
                    "name": "evolinciteCrmNegotiationID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCrmNegotiation": {
                    "name": "EvolinciteCrmNegotiation",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCrmNegotiation"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCrmNegotiationID"
                        ]
                    }
                },
                "EvolinciteUser": {
                    "name": "EvolinciteUser",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteUserID"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteComments",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUser",
                        "fields": [
                            "evolinciteUserID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCrmNegotiation",
                        "fields": [
                            "evolinciteCrmNegotiationID",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteActivity": {
            "name": "EvolinciteActivity",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "startDate": {
                    "name": "startDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "endDate": {
                    "name": "endDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "color": {
                    "name": "color",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteActivityTypes"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "priority": {
                    "name": "priority",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "meta": {
                    "name": "meta",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "taskState": {
                    "name": "taskState",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteTaskStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "documents": {
                    "name": "documents",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteUserID": {
                    "name": "evolinciteUserID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteUserOwner": {
                    "name": "EvolinciteUserOwner",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteUserID"
                        ]
                    }
                },
                "Participants": {
                    "name": "Participants",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteActivityEvolinciteUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "evolinciteActivity"
                        ]
                    }
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCrmNegotiationID": {
                    "name": "evolinciteCrmNegotiationID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "EvolinciteCrmNegotiation": {
                    "name": "EvolinciteCrmNegotiation",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCrmNegotiation"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCrmNegotiationID"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteActivities",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUser",
                        "fields": [
                            "evolinciteUserID",
                            "endDate"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCrmNegotiation",
                        "fields": [
                            "evolinciteCrmNegotiationID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolincitePermissions": {
            "name": "EvolincitePermissions",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteUserID": {
                    "name": "evolinciteUserID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteDepartmentID": {
                    "name": "evolinciteDepartmentID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "EvolinciteUser": {
                    "name": "EvolinciteUser",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteUserID"
                        ]
                    }
                },
                "EvolinciteDepartment": {
                    "name": "EvolinciteDepartment",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteDepartment"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteDepartmentID"
                        ]
                    }
                },
                "evolinciteRolID": {
                    "name": "evolinciteRolID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteRol": {
                    "name": "EvolinciteRol",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteRol"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteRolID"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "EvolincitePermissions",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUser",
                        "fields": [
                            "evolinciteUserID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteDepartment",
                        "fields": [
                            "evolinciteDepartmentID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteRol",
                        "fields": [
                            "evolinciteRolID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteDepartment": {
            "name": "EvolinciteDepartment",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "parent": {
                    "name": "parent",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "EvolincitePermissions": {
                    "name": "EvolincitePermissions",
                    "isArray": true,
                    "type": {
                        "model": "EvolincitePermissions"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteDepartment"
                        ]
                    }
                },
                "EvolinciteUserDepartments": {
                    "name": "EvolinciteUserDepartments",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteUserDepartment"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteDepartment"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteDepartments",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteSubscription": {
            "name": "EvolinciteSubscription",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "price": {
                    "name": "price",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "dateInitial": {
                    "name": "dateInitial",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "dateFinal": {
                    "name": "dateFinal",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompanies": {
                    "name": "EvolinciteCompanies",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteSubscription"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteSubscriptions",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteModule": {
            "name": "EvolinciteModule",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteModules",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteFunctionality": {
            "name": "EvolinciteFunctionality",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "functionalities": {
                    "name": "functionalities",
                    "isArray": true,
                    "type": {
                        "enum": "EvolinciteFunctionalities"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolincitePackageID": {
                    "name": "evolincitePackageID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolincitePackage": {
                    "name": "EvolincitePackage",
                    "isArray": false,
                    "type": {
                        "model": "EvolincitePackage"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolincitePackageID"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteFunctionalities",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolincitePackage",
                        "fields": [
                            "evolincitePackageID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteRol": {
            "name": "EvolinciteRol",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "permissions": {
                    "name": "permissions",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "EvolincitePermissions": {
                    "name": "EvolincitePermissions",
                    "isArray": true,
                    "type": {
                        "model": "EvolincitePermissions"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteRol"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteRols",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteCustomer": {
            "name": "EvolinciteCustomer",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "lastName": {
                    "name": "lastName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "documentType": {
                    "name": "documentType",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteDocumentType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "documentNumber": {
                    "name": "documentNumber",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "phone": {
                    "name": "phone",
                    "isArray": false,
                    "type": "AWSPhone",
                    "isRequired": false,
                    "attributes": []
                },
                "optionalPhone": {
                    "name": "optionalPhone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "AWSEmail",
                    "isRequired": false,
                    "attributes": []
                },
                "picture": {
                    "name": "picture",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "birthDate": {
                    "name": "birthDate",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "municipality": {
                    "name": "municipality",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteMunicipality"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "documents": {
                    "name": "documents",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "address": {
                    "name": "address",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "meta": {
                    "name": "meta",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "EvolinciteCrmNegotiations": {
                    "name": "EvolinciteCrmNegotiations",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteCrmNegotiation"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCustomer"
                        ]
                    }
                },
                "EvolinciteWalletPayments": {
                    "name": "EvolinciteWalletPayments",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteWalletPayment"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCustomer"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteCustomers",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byDocumentNumber",
                        "fields": [
                            "documentNumber"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteUserSettings": {
            "name": "EvolinciteUserSettings",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "settings": {
                    "name": "settings",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteUserID": {
                    "name": "evolinciteUserID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteUser": {
                    "name": "EvolinciteUser",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteUserID"
                        ]
                    }
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteUserSettings",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUser",
                        "fields": [
                            "evolinciteUserID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteCrmPipeline": {
            "name": "EvolinciteCrmPipeline",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "publicDescription": {
                    "name": "publicDescription",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "order": {
                    "name": "order",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "meta": {
                    "name": "meta",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "EvolinciteCrmStates": {
                    "name": "EvolinciteCrmStates",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteCrmState"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCrmPipeline"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteCrmPipelines",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID",
                            "order"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteCrmState": {
            "name": "EvolinciteCrmState",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "publicDescription": {
                    "name": "publicDescription",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "color": {
                    "name": "color",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "order": {
                    "name": "order",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "EvolinciteCrmNegotiations": {
                    "name": "EvolinciteCrmNegotiations",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteCrmNegotiation"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCrmState"
                        ]
                    }
                },
                "EvolinciteCrmAutomations": {
                    "name": "EvolinciteCrmAutomations",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteCrmAutomation"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCrmState"
                        ]
                    }
                },
                "evolinciteCrmPipelineID": {
                    "name": "evolinciteCrmPipelineID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCrmPipeline": {
                    "name": "EvolinciteCrmPipeline",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCrmPipeline"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCrmPipelineID"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteCrmStates",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCrmPipeline",
                        "fields": [
                            "evolinciteCrmPipelineID",
                            "order"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteCrmNegotiationLog": {
            "name": "EvolinciteCrmNegotiationLog",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "log": {
                    "name": "log",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteUserID": {
                    "name": "evolinciteUserID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCrmNegotiationID": {
                    "name": "evolinciteCrmNegotiationID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "EvolinciteUser": {
                    "name": "EvolinciteUser",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteUserID"
                        ]
                    }
                },
                "EvolinciteCrmNegotiation": {
                    "name": "EvolinciteCrmNegotiation",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCrmNegotiation"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCrmNegotiationID"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteCrmNegotiationLogs",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUser",
                        "fields": [
                            "evolinciteUserID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCrmNegotiation",
                        "fields": [
                            "evolinciteCrmNegotiationID",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteCrmNegotiation": {
            "name": "EvolinciteCrmNegotiation",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "value": {
                    "name": "value",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "due": {
                    "name": "due",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "parent": {
                    "name": "parent",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "documents": {
                    "name": "documents",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "meta": {
                    "name": "meta",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "frozen": {
                    "name": "frozen",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "valueInterest": {
                    "name": "valueInterest",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "valueCollection": {
                    "name": "valueCollection",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "observers": {
                    "name": "observers",
                    "isArray": true,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "exitDate": {
                    "name": "exitDate",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "evolinciteUserSellerID": {
                    "name": "evolinciteUserSellerID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteUserSeller": {
                    "name": "EvolinciteUserSeller",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteUserSellerID"
                        ]
                    }
                },
                "evolinciteUserReferrerID": {
                    "name": "evolinciteUserReferrerID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteUserReferrer": {
                    "name": "EvolinciteUserReferrer",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteUserReferrerID"
                        ]
                    }
                },
                "evolinciteUserOwnerID": {
                    "name": "evolinciteUserOwnerID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteUserOwner": {
                    "name": "EvolinciteUserOwner",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteUserOwnerID"
                        ]
                    }
                },
                "EvolinciteCrmNegotiationFieldValues": {
                    "name": "EvolinciteCrmNegotiationFieldValues",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteCrmNegotiationFieldValue"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCrmNegotiation"
                        ]
                    }
                },
                "evolinciteCrmStateID": {
                    "name": "evolinciteCrmStateID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCrmState": {
                    "name": "EvolinciteCrmState",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCrmState"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCrmStateID"
                        ]
                    }
                },
                "EvolinciteWalletPayments": {
                    "name": "EvolinciteWalletPayments",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteWalletPayment"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCrmNegotiation"
                        ]
                    }
                },
                "evolinciteCustomerID": {
                    "name": "evolinciteCustomerID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCustomer": {
                    "name": "EvolinciteCustomer",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCustomer"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCustomerID"
                        ]
                    }
                },
                "EvolinciteCrmNegotiationLogs": {
                    "name": "EvolinciteCrmNegotiationLogs",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteCrmNegotiationLog"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCrmNegotiation"
                        ]
                    }
                },
                "EvolinciteComments": {
                    "name": "EvolinciteComments",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteComment"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCrmNegotiation"
                        ]
                    }
                },
                "EvolinciteActivities": {
                    "name": "EvolinciteActivities",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteActivity"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCrmNegotiation"
                        ]
                    }
                },
                "EvolinciteUsersObserver": {
                    "name": "EvolinciteUsersObserver",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteUserEvolinciteCrmNegotiation"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "evolinciteCrmNegotiation"
                        ]
                    }
                },
                "EvolinciteExpenses": {
                    "name": "EvolinciteExpenses",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteExpense"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCrmNegotiation"
                        ]
                    }
                },
                "evolinciteProcessTypeID": {
                    "name": "evolinciteProcessTypeID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteProcessType": {
                    "name": "EvolinciteProcessType",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteProcessType"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteProcessTypeID"
                        ]
                    }
                },
                "initialGoalID": {
                    "name": "initialGoalID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "InitialGoal": {
                    "name": "InitialGoal",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteGoal"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "initialGoalID"
                        ]
                    }
                },
                "finalGoalID": {
                    "name": "finalGoalID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "FinalGoal": {
                    "name": "FinalGoal",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteGoal"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "finalGoalID"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteCrmNegotiations",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "evolinciteCrmNegotiationsByParent",
                        "fields": [
                            "parent"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUserSeller",
                        "fields": [
                            "evolinciteUserSellerID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUserReferrer",
                        "fields": [
                            "evolinciteUserReferrerID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUserOwner",
                        "fields": [
                            "evolinciteUserOwnerID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCrmState",
                        "fields": [
                            "evolinciteCrmStateID",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCustomer",
                        "fields": [
                            "evolinciteCustomerID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteProcessType",
                        "fields": [
                            "evolinciteProcessTypeID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteGoalInitial",
                        "fields": [
                            "initialGoalID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteGoalFinal",
                        "fields": [
                            "finalGoalID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteRoom": {
            "name": "EvolinciteRoom",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Key": {
                    "name": "Key",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "meta": {
                    "name": "meta",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteUsers": {
                    "name": "EvolinciteUsers",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteRoomEvolinciteUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "evolinciteRoom"
                        ]
                    }
                },
                "EvolinciteMessages": {
                    "name": "EvolinciteMessages",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteMessage"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteRoom"
                        ]
                    }
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteRooms",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "evolinciteRoomsByKey",
                        "fields": [
                            "Key"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteMessage": {
            "name": "EvolinciteMessage",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "content": {
                    "name": "content",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteMessageType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "evolinciteUserID": {
                    "name": "evolinciteUserID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteUser": {
                    "name": "EvolinciteUser",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteUserID"
                        ]
                    }
                },
                "evolinciteRoomID": {
                    "name": "evolinciteRoomID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteRoom": {
                    "name": "EvolinciteRoom",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteRoom"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteRoomID"
                        ]
                    }
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteMessages",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUser",
                        "fields": [
                            "evolinciteUserID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteRoom",
                        "fields": [
                            "evolinciteRoomID",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteCrmNegotiationFieldValue": {
            "name": "EvolinciteCrmNegotiationFieldValue",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "value": {
                    "name": "value",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCrmNegotiationFieldID": {
                    "name": "evolinciteCrmNegotiationFieldID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCrmNegotiationField": {
                    "name": "EvolinciteCrmNegotiationField",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCrmNegotiationField"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCrmNegotiationFieldID"
                        ]
                    }
                },
                "evolinciteCrmNegotiationID": {
                    "name": "evolinciteCrmNegotiationID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCrmNegotiation": {
                    "name": "EvolinciteCrmNegotiation",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCrmNegotiation"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCrmNegotiationID"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteCrmNegotiationFieldValues",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCrmNegotiationField",
                        "fields": [
                            "evolinciteCrmNegotiationFieldID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCrmNegotiation",
                        "fields": [
                            "evolinciteCrmNegotiationID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteEmail": {
            "name": "EvolinciteEmail",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "from": {
                    "name": "from",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "to": {
                    "name": "to",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "content": {
                    "name": "content",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "subject": {
                    "name": "subject",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteEmails",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteEmailTemplate": {
            "name": "EvolinciteEmailTemplate",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "content": {
                    "name": "content",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteEmailTemplates",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteNotification": {
            "name": "EvolinciteNotification",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "content": {
                    "name": "content",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "priority": {
                    "name": "priority",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteNotificationPriority"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "EvolunciteNotificationType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "meta": {
                    "name": "meta",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteUserID": {
                    "name": "evolinciteUserID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "EvolinciteUser": {
                    "name": "EvolinciteUser",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteUserID"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteNotifications",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUser",
                        "fields": [
                            "evolinciteUserID",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteUserDepartment": {
            "name": "EvolinciteUserDepartment",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "evolinciteUserID": {
                    "name": "evolinciteUserID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteUser": {
                    "name": "EvolinciteUser",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteUserID"
                        ]
                    }
                },
                "evolinciteDepartmentID": {
                    "name": "evolinciteDepartmentID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteDepartment": {
                    "name": "EvolinciteDepartment",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteDepartment"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteDepartmentID"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteUserDepartments",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUser",
                        "fields": [
                            "evolinciteUserID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteDepartment",
                        "fields": [
                            "evolinciteDepartmentID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteUserEvolinciteCompany": {
            "name": "EvolinciteUserEvolinciteCompany",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteUserID": {
                    "name": "evolinciteUserID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteUser": {
                    "name": "EvolinciteUser",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteUserID"
                        ]
                    }
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteUserEvolinciteCompanies",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUser",
                        "fields": [
                            "evolinciteUserID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteUser": {
            "name": "EvolinciteUser",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "nit": {
                    "name": "nit",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "phone": {
                    "name": "phone",
                    "isArray": false,
                    "type": "AWSPhone",
                    "isRequired": false,
                    "attributes": []
                },
                "picture": {
                    "name": "picture",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "AWSEmail",
                    "isRequired": false,
                    "attributes": []
                },
                "sub": {
                    "name": "sub",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "meta": {
                    "name": "meta",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "cv": {
                    "name": "cv",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "contract": {
                    "name": "contract",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "memos": {
                    "name": "memos",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "personalMail": {
                    "name": "personalMail",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "personalPhone": {
                    "name": "personalPhone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteUserEvolinciteCompanies": {
                    "name": "EvolinciteUserEvolinciteCompanies",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteUserEvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteUser"
                        ]
                    }
                },
                "EvolinciteActivitiesOwner": {
                    "name": "EvolinciteActivitiesOwner",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteActivity"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteUserOwner"
                        ]
                    }
                },
                "EvolinciteActivitiesParticipants": {
                    "name": "EvolinciteActivitiesParticipants",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteActivityEvolinciteUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "evolinciteUser"
                        ]
                    }
                },
                "EvolinciteRooms": {
                    "name": "EvolinciteRooms",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteRoomEvolinciteUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "evolinciteUser"
                        ]
                    }
                },
                "EvolinciteUserDepartments": {
                    "name": "EvolinciteUserDepartments",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteUserDepartment"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteUser"
                        ]
                    }
                },
                "EvolinciteCrmNegotiationsOwner": {
                    "name": "EvolinciteCrmNegotiationsOwner",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteCrmNegotiation"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteUserOwner"
                        ]
                    }
                },
                "EvolinciteCrmNegotiationsReferrer": {
                    "name": "EvolinciteCrmNegotiationsReferrer",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteCrmNegotiation"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteUserReferrer"
                        ]
                    }
                },
                "EvolinciteCrmNegotiationsSeller": {
                    "name": "EvolinciteCrmNegotiationsSeller",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteCrmNegotiation"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteUserSeller"
                        ]
                    }
                },
                "EvolincitePaymentsUserSeller": {
                    "name": "EvolincitePaymentsUserSeller",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteWalletPayment"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteUserSeller"
                        ]
                    }
                },
                "EvolincitePaymentsUserReferrer": {
                    "name": "EvolincitePaymentsUserReferrer",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteWalletPayment"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteUserReferrer"
                        ]
                    }
                },
                "EvolinciteNotifications": {
                    "name": "EvolinciteNotifications",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteNotification"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteUser"
                        ]
                    }
                },
                "EvolinciteMessages": {
                    "name": "EvolinciteMessages",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteMessage"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteUser"
                        ]
                    }
                },
                "EvolinciteCrmNegotiationLogs": {
                    "name": "EvolinciteCrmNegotiationLogs",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteCrmNegotiationLog"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteUser"
                        ]
                    }
                },
                "EvolinciteComments": {
                    "name": "EvolinciteComments",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteComment"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteUser"
                        ]
                    }
                },
                "EvolincitePermissions": {
                    "name": "EvolincitePermissions",
                    "isArray": true,
                    "type": {
                        "model": "EvolincitePermissions"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteUser"
                        ]
                    }
                },
                "EvolinciteUserSettings": {
                    "name": "EvolinciteUserSettings",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteUserSettings"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteUser"
                        ]
                    }
                },
                "EvolinciteCrmNegotiationsObserver": {
                    "name": "EvolinciteCrmNegotiationsObserver",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteUserEvolinciteCrmNegotiation"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "evolinciteUser"
                        ]
                    }
                },
                "EvolinciteUserEvolinciteJobTitle": {
                    "name": "EvolinciteUserEvolinciteJobTitle",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteUserEvolinciteJobTitle"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteUser"
                        ]
                    }
                },
                "EvolinciteWalletPaymentLogs": {
                    "name": "EvolinciteWalletPaymentLogs",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteWalletPaymentLog"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteUser"
                        ]
                    }
                },
                "EvolinciteExpenseLogs": {
                    "name": "EvolinciteExpenseLogs",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteExpenseLog"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteUser"
                        ]
                    }
                },
                "EvolinciteExpenses": {
                    "name": "EvolinciteExpenses",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteExpense"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteUser"
                        ]
                    }
                },
                "EvolinciteTicket": {
                    "name": "EvolinciteTicket",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteTicket"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteUser"
                        ]
                    }
                },
                "EvolinciteTicketLogs": {
                    "name": "EvolinciteTicketLogs",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteTicketLog"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteUser"
                        ]
                    }
                },
                "EvolinciteFiles": {
                    "name": "EvolinciteFiles",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteFile"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteUser"
                        ]
                    }
                },
                "EvolinciteFolders": {
                    "name": "EvolinciteFolders",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteFolder"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteUser"
                        ]
                    }
                },
                "EvolinciteArticles": {
                    "name": "EvolinciteArticles",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteArticle"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteUser"
                        ]
                    }
                },
                "EvolinciteArticleComments": {
                    "name": "EvolinciteArticleComments",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteArticleComment"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteUser"
                        ]
                    }
                },
                "EvolinciteFoldersOwner": {
                    "name": "EvolinciteFoldersOwner",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteFolder"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteUserOwner"
                        ]
                    }
                },
                "EvolinciteFormConfigurations": {
                    "name": "EvolinciteFormConfigurations",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteFormConfiguration"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteUser"
                        ]
                    }
                },
                "EvolinciteFormAnswers": {
                    "name": "EvolinciteFormAnswers",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteFormAnswer"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteUser"
                        ]
                    }
                },
                "EvolinciteMails": {
                    "name": "EvolinciteMails",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteMail"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteUser"
                        ]
                    }
                },
                "EvolinciteEmployeeObservations": {
                    "name": "EvolinciteEmployeeObservations",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteEmployeeObservation"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteUser"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteUsers",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteCompany": {
            "name": "EvolinciteCompany",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "nit": {
                    "name": "nit",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "picture": {
                    "name": "picture",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "meta": {
                    "name": "meta",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteUserEvolinciteCompanies": {
                    "name": "EvolinciteUserEvolinciteCompanies",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteUserEvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "evolinciteSubscriptionID": {
                    "name": "evolinciteSubscriptionID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteSubscription": {
                    "name": "EvolinciteSubscription",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteSubscription"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteSubscriptionID"
                        ]
                    }
                },
                "EvolinciteWalletPayments": {
                    "name": "EvolinciteWalletPayments",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteWalletPayment"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "EvolinciteCrmNegotiationFields": {
                    "name": "EvolinciteCrmNegotiationFields",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteCrmNegotiationField"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "EvolinciteCrmNegotiationSections": {
                    "name": "EvolinciteCrmNegotiationSections",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteCrmNegotiationSection"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "EvolinciteCrmAutomations": {
                    "name": "EvolinciteCrmAutomations",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteCrmAutomation"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "EvolinciteUserDepartments": {
                    "name": "EvolinciteUserDepartments",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteUserDepartment"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "EvolinciteDepartments": {
                    "name": "EvolinciteDepartments",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteDepartment"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "EvolinciteCustomers": {
                    "name": "EvolinciteCustomers",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteCustomer"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "EvolinciteCrmPipelines": {
                    "name": "EvolinciteCrmPipelines",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteCrmPipeline"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "EvolinciteCrmStates": {
                    "name": "EvolinciteCrmStates",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteCrmState"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "EvolinciteCrmNegotiations": {
                    "name": "EvolinciteCrmNegotiations",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteCrmNegotiation"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "EvolinciteJobTitles": {
                    "name": "EvolinciteJobTitles",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteJobTitle"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "EvolinciteNotifications": {
                    "name": "EvolinciteNotifications",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteNotification"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "EvolinciteEmailTemplates": {
                    "name": "EvolinciteEmailTemplates",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteEmailTemplate"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "EvolinciteEmails": {
                    "name": "EvolinciteEmails",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteEmail"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "EvolinciteMessages": {
                    "name": "EvolinciteMessages",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteMessage"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "EvolinciteCrmNegotiationLogs": {
                    "name": "EvolinciteCrmNegotiationLogs",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteCrmNegotiationLog"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "EvolinciteActivities": {
                    "name": "EvolinciteActivities",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteActivity"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "EvolincitePermissions": {
                    "name": "EvolincitePermissions",
                    "isArray": true,
                    "type": {
                        "model": "EvolincitePermissions"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "EvolinciteRoles": {
                    "name": "EvolinciteRoles",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteRol"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "EvolinciteUserSettings": {
                    "name": "EvolinciteUserSettings",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteUserSettings"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "EvolinciteRooms": {
                    "name": "EvolinciteRooms",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteRoom"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "EvolinciteUserEvolinciteJobTitle": {
                    "name": "EvolinciteUserEvolinciteJobTitle",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteUserEvolinciteJobTitle"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "EvolinciteExpenseTypes": {
                    "name": "EvolinciteExpenseTypes",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteExpenseType"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "EvolinciteExpenses": {
                    "name": "EvolinciteExpenses",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteExpense"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "EvolinciteProcessTypes": {
                    "name": "EvolinciteProcessTypes",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteProcessType"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "EvolinciteGoal": {
                    "name": "EvolinciteGoal",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteGoal"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "EvolinciteWalletPaymentLogs": {
                    "name": "EvolinciteWalletPaymentLogs",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteWalletPaymentLog"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "EvolinciteExpenseLogs": {
                    "name": "EvolinciteExpenseLogs",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteExpenseLog"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "EvolinciteTicketOwner": {
                    "name": "EvolinciteTicketOwner",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteTicket"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompanyOwner"
                        ]
                    }
                },
                "EvolinciteTicketOrigin": {
                    "name": "EvolinciteTicketOrigin",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteTicket"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompanyOrigin"
                        ]
                    }
                },
                "EvolinciteTicketLogs": {
                    "name": "EvolinciteTicketLogs",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteTicketLog"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "EvolinciteFiles": {
                    "name": "EvolinciteFiles",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteFile"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "EvolinciteFolders": {
                    "name": "EvolinciteFolders",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteFolder"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "EvolinciteArticles": {
                    "name": "EvolinciteArticles",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteArticle"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "EvolinciteFormConfigurations": {
                    "name": "EvolinciteFormConfigurations",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteFormConfiguration"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "EvolincitePaymentAutomations": {
                    "name": "EvolincitePaymentAutomations",
                    "isArray": true,
                    "type": {
                        "model": "EvolincitePaymentAutomation"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "EvolinciteMails": {
                    "name": "EvolinciteMails",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteMail"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "EvolinciteMailTemplates": {
                    "name": "EvolinciteMailTemplates",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteMailTemplate"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "EvolinciteCompanySubscriptions": {
                    "name": "EvolinciteCompanySubscriptions",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteCompanySubscription"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "EvolinciteFormAnswers": {
                    "name": "EvolinciteFormAnswers",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteFormAnswer"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "EvolinciteEmployeeObservations": {
                    "name": "EvolinciteEmployeeObservations",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteEmployeeObservation"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteCompany"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteCompanies",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byNit",
                        "fields": [
                            "nit"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteSubscription",
                        "fields": [
                            "evolinciteSubscriptionID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteGoal": {
            "name": "EvolinciteGoal",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "EvolinciteCrmNegotiationsInitial": {
                    "name": "EvolinciteCrmNegotiationsInitial",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteCrmNegotiation"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "InitialGoal"
                        ]
                    }
                },
                "EvolinciteCrmNegotiationsFinal": {
                    "name": "EvolinciteCrmNegotiationsFinal",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteCrmNegotiation"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "FinalGoal"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteGoals",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteWalletPaymentLog": {
            "name": "EvolinciteWalletPaymentLog",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "log": {
                    "name": "log",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteUserID": {
                    "name": "evolinciteUserID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteWalletPaymentID": {
                    "name": "evolinciteWalletPaymentID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "EvolinciteUser": {
                    "name": "EvolinciteUser",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteUserID"
                        ]
                    }
                },
                "EvolinciteWalletPayment": {
                    "name": "EvolinciteWalletPayment",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteWalletPayment"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteWalletPaymentID"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteWalletPaymentLogs",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUser",
                        "fields": [
                            "evolinciteUserID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteWalletPayment",
                        "fields": [
                            "evolinciteWalletPaymentID",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteExpenseLog": {
            "name": "EvolinciteExpenseLog",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "log": {
                    "name": "log",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteUserID": {
                    "name": "evolinciteUserID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteExpenseID": {
                    "name": "evolinciteExpenseID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "EvolinciteUser": {
                    "name": "EvolinciteUser",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteUserID"
                        ]
                    }
                },
                "EvolinciteExpense": {
                    "name": "EvolinciteExpense",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteExpense"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteExpenseID"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteExpenseLogs",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUser",
                        "fields": [
                            "evolinciteUserID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteExpense",
                        "fields": [
                            "evolinciteExpenseID",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteTicket": {
            "name": "EvolinciteTicket",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "documents": {
                    "name": "documents",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "meta": {
                    "name": "meta",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "ticketState": {
                    "name": "ticketState",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteTicketState"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteUserID": {
                    "name": "evolinciteUserID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyOwnerID": {
                    "name": "evolinciteCompanyOwnerID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyOriginID": {
                    "name": "evolinciteCompanyOriginID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompanyOwner": {
                    "name": "EvolinciteCompanyOwner",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyOwnerID"
                        ]
                    }
                },
                "EvolinciteCompanyOrigin": {
                    "name": "EvolinciteCompanyOrigin",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyOriginID"
                        ]
                    }
                },
                "EvolinciteUser": {
                    "name": "EvolinciteUser",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteUserID"
                        ]
                    }
                },
                "EvolinciteTicketLogs": {
                    "name": "EvolinciteTicketLogs",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteTicketLog"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteTicket"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteTickets",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUser",
                        "fields": [
                            "evolinciteUserID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompanyOwner",
                        "fields": [
                            "evolinciteCompanyOwnerID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompanyOrigin",
                        "fields": [
                            "evolinciteCompanyOriginID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteTicketLog": {
            "name": "EvolinciteTicketLog",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "log": {
                    "name": "log",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteUserID": {
                    "name": "evolinciteUserID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteTicketID": {
                    "name": "evolinciteTicketID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "EvolinciteUser": {
                    "name": "EvolinciteUser",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteUserID"
                        ]
                    }
                },
                "EvolinciteTicket": {
                    "name": "EvolinciteTicket",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteTicket"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteTicketID"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteTicketLogs",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUser",
                        "fields": [
                            "evolinciteUserID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteTicket",
                        "fields": [
                            "evolinciteTicketID",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteFile": {
            "name": "EvolinciteFile",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "size": {
                    "name": "size",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "meta": {
                    "name": "meta",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteUserID": {
                    "name": "evolinciteUserID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteFolderID": {
                    "name": "evolinciteFolderID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "EvolinciteUser": {
                    "name": "EvolinciteUser",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteUserID"
                        ]
                    }
                },
                "EvolinciteFolder": {
                    "name": "EvolinciteFolder",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteFolder"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteFolderID"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteFiles",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUser",
                        "fields": [
                            "evolinciteUserID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteFolder",
                        "fields": [
                            "evolinciteFolderID",
                            "updatedAt"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteFolder": {
            "name": "EvolinciteFolder",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "parent": {
                    "name": "parent",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "meta": {
                    "name": "meta",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteUserID": {
                    "name": "evolinciteUserID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteUserOwnerID": {
                    "name": "evolinciteUserOwnerID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "EvolinciteUser": {
                    "name": "EvolinciteUser",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteUserID"
                        ]
                    }
                },
                "EvolinciteUserOwner": {
                    "name": "EvolinciteUserOwner",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteUserOwnerID"
                        ]
                    }
                },
                "EvolinciteFiles": {
                    "name": "EvolinciteFiles",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteFile"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteFolder"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteFolders",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byParent",
                        "fields": [
                            "parent"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUser",
                        "fields": [
                            "evolinciteUserID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUserOwner",
                        "fields": [
                            "evolinciteUserOwnerID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteArticle": {
            "name": "EvolinciteArticle",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "front": {
                    "name": "front",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "cover": {
                    "name": "cover",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "content": {
                    "name": "content",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "articleState": {
                    "name": "articleState",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteArticleStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "visibility": {
                    "name": "visibility",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "publicationDate": {
                    "name": "publicationDate",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "meta": {
                    "name": "meta",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "files": {
                    "name": "files",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteUserID": {
                    "name": "evolinciteUserID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "EvolinciteUser": {
                    "name": "EvolinciteUser",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteUserID"
                        ]
                    }
                },
                "EvolinciteArticleComments": {
                    "name": "EvolinciteArticleComments",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteArticleComment"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteArticle"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteArticles",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUser",
                        "fields": [
                            "evolinciteUserID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteArticleComment": {
            "name": "EvolinciteArticleComment",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "content": {
                    "name": "content",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteUserID": {
                    "name": "evolinciteUserID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteUser": {
                    "name": "EvolinciteUser",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteUserID"
                        ]
                    }
                },
                "evolinciteArticleID": {
                    "name": "evolinciteArticleID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteArticle": {
                    "name": "EvolinciteArticle",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteArticle"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteArticleID"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteArticleComments",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUser",
                        "fields": [
                            "evolinciteUserID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteArticle",
                        "fields": [
                            "evolinciteArticleID",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteFormConfiguration": {
            "name": "EvolinciteFormConfiguration",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "key": {
                    "name": "key",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "config": {
                    "name": "config",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "meta": {
                    "name": "meta",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "observations": {
                    "name": "observations",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "front": {
                    "name": "front",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteUserID": {
                    "name": "evolinciteUserID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "EvolinciteUser": {
                    "name": "EvolinciteUser",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteUserID"
                        ]
                    }
                },
                "EvolinciteFormAnswers": {
                    "name": "EvolinciteFormAnswers",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteFormAnswer"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolinciteFormConfiguration"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteFormConfigurations",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byKey",
                        "fields": [
                            "key"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUser",
                        "fields": [
                            "evolinciteUserID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteFormAnswer": {
            "name": "EvolinciteFormAnswer",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "meta": {
                    "name": "meta",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "answerState": {
                    "name": "answerState",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteSurveyAnswerState"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteUserID": {
                    "name": "evolinciteUserID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteFormConfigurationID": {
                    "name": "evolinciteFormConfigurationID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteFormConfiguration": {
                    "name": "EvolinciteFormConfiguration",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteFormConfiguration"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteFormConfigurationID"
                        ]
                    }
                },
                "EvolinciteUser": {
                    "name": "EvolinciteUser",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteUserID"
                        ]
                    }
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteFormAnswers",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUser",
                        "fields": [
                            "evolinciteUserID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteFormConfiguration",
                        "fields": [
                            "evolinciteFormConfigurationID",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolincitePaymentAutomation": {
            "name": "EvolincitePaymentAutomation",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "setting": {
                    "name": "setting",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "order": {
                    "name": "order",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "repeat": {
                    "name": "repeat",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "EvolincitePaymentAutomations",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteMail": {
            "name": "EvolinciteMail",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "destinations": {
                    "name": "destinations",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "subject": {
                    "name": "subject",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "content": {
                    "name": "content",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "submissionStatus": {
                    "name": "submissionStatus",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteMailStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "setting": {
                    "name": "setting",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "response": {
                    "name": "response",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "files": {
                    "name": "files",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "evolinciteUserID": {
                    "name": "evolinciteUserID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteUser": {
                    "name": "EvolinciteUser",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteUserID"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteMails",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUser",
                        "fields": [
                            "evolinciteUserID",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteMailConfiguration": {
            "name": "EvolinciteMailConfiguration",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "SMTP": {
                    "name": "SMTP",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "password": {
                    "name": "password",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteUserID": {
                    "name": "evolinciteUserID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteMailConfigurations",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUser",
                        "fields": [
                            "evolinciteUserID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteMailTemplate": {
            "name": "EvolinciteMailTemplate",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "destinations": {
                    "name": "destinations",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "subject": {
                    "name": "subject",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "content": {
                    "name": "content",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "files": {
                    "name": "files",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "transmitter": {
                    "name": "transmitter",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "meta": {
                    "name": "meta",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteMailTemplates",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteMailTemplateLog": {
            "name": "EvolinciteMailTemplateLog",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "key": {
                    "name": "key",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "log": {
                    "name": "log",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "previousLog": {
                    "name": "previousLog",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteUserID": {
                    "name": "evolinciteUserID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteMailTemplateLogs",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byKey",
                        "fields": [
                            "key"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUser",
                        "fields": [
                            "evolinciteUserID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolincitePackage": {
            "name": "EvolincitePackage",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "goal": {
                    "name": "goal",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "duration": {
                    "name": "duration",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteFunctionalities": {
                    "name": "EvolinciteFunctionalities",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteFunctionality"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolincitePackage"
                        ]
                    }
                },
                "EvolinciteCompanySubscriptions": {
                    "name": "EvolinciteCompanySubscriptions",
                    "isArray": true,
                    "type": {
                        "model": "EvolinciteCompanySubscription"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "EvolincitePackage"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "EvolincitePackages",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteCompanySubscription": {
            "name": "EvolinciteCompanySubscription",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "price": {
                    "name": "price",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "dateInitial": {
                    "name": "dateInitial",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "dateFinal": {
                    "name": "dateFinal",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "activatorUser": {
                    "name": "activatorUser",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolincitePackageID": {
                    "name": "evolincitePackageID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolincitePackage": {
                    "name": "EvolincitePackage",
                    "isArray": false,
                    "type": {
                        "model": "EvolincitePackage"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolincitePackageID"
                        ]
                    }
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteCompanySubscriptions",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolincitePackage",
                        "fields": [
                            "evolincitePackageID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteEmployeeObservation": {
            "name": "EvolinciteEmployeeObservation",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "content": {
                    "name": "content",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "isPublic": {
                    "name": "isPublic",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "meta": {
                    "name": "meta",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteCompany": {
                    "name": "EvolinciteCompany",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCompany"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                "evolinciteUserID": {
                    "name": "evolinciteUserID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "EvolinciteUser": {
                    "name": "EvolinciteUser",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteUser"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteUserID"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteEmployeeObservations",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUser",
                        "fields": [
                            "evolinciteUserID",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteTag": {
            "name": "EvolinciteTag",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteUserID": {
                    "name": "evolinciteUserID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteTags",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byKey",
                        "fields": [
                            "name"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUser",
                        "fields": [
                            "evolinciteUserID",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteMilestone": {
            "name": "EvolinciteMilestone",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "tags": {
                    "name": "tags",
                    "isArray": true,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": {
                        "enum": "EvolunciteMilestoneType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "config": {
                    "name": "config",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "startDate": {
                    "name": "startDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "endDate": {
                    "name": "endDate",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "employees": {
                    "name": "employees",
                    "isArray": true,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "managers": {
                    "name": "managers",
                    "isArray": true,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "isClosed": {
                    "name": "isClosed",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "closingNotes": {
                    "name": "closingNotes",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "log": {
                    "name": "log",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteUserID": {
                    "name": "evolinciteUserID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteMilestones",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUser",
                        "fields": [
                            "evolinciteUserID",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteUserLog": {
            "name": "EvolinciteUserLog",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "log": {
                    "name": "log",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "functionality": {
                    "name": "functionality",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteFunctionalities"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "key": {
                    "name": "key",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteUserID": {
                    "name": "evolinciteUserID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteUserLogs",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byKey",
                        "fields": [
                            "key"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUser",
                        "fields": [
                            "evolinciteUserID",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteUserTimeTracking": {
            "name": "EvolinciteUserTimeTracking",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "time": {
                    "name": "time",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteUserID": {
                    "name": "evolinciteUserID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteUserTimeTrackings",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUser",
                        "fields": [
                            "evolinciteUserID",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteSchedule": {
            "name": "EvolinciteSchedule",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "config": {
                    "name": "config",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteUserID": {
                    "name": "evolinciteUserID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteSchedules",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUser",
                        "fields": [
                            "evolinciteUserID",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteTemplateRequest": {
            "name": "EvolinciteTemplateRequest",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "tags": {
                    "name": "tags",
                    "isArray": true,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "questions": {
                    "name": "questions",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "elementType": {
                    "name": "elementType",
                    "isArray": false,
                    "type": {
                        "enum": "EvolunciteRequestType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "documents": {
                    "name": "documents",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "meta": {
                    "name": "meta",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "owners": {
                    "name": "owners",
                    "isArray": true,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteUserID": {
                    "name": "evolinciteUserID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteTemplateRequests",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUser",
                        "fields": [
                            "evolinciteUserID",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteRequest": {
            "name": "EvolinciteRequest",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "templateID": {
                    "name": "templateID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "answers": {
                    "name": "answers",
                    "isArray": false,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": []
                },
                "requester": {
                    "name": "requester",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "priority": {
                    "name": "priority",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteRequestPriority"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "elementID": {
                    "name": "elementID",
                    "isArray": true,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "elementType": {
                    "name": "elementType",
                    "isArray": false,
                    "type": {
                        "enum": "EvolunciteRequestType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteRequestStatus"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": {
                        "enum": "EvolinciteStates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCompanyID": {
                    "name": "evolinciteCompanyID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteUserID": {
                    "name": "evolinciteUserID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteRequests",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteTemplate",
                        "fields": [
                            "templateID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteRequester",
                        "fields": [
                            "requester"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCompany",
                        "fields": [
                            "evolinciteCompanyID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUser",
                        "fields": [
                            "evolinciteUserID",
                            "createdAt"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteActivityEvolinciteUser": {
            "name": "EvolinciteActivityEvolinciteUser",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "evolinciteActivityId": {
                    "name": "evolinciteActivityId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteUserId": {
                    "name": "evolinciteUserId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteActivity": {
                    "name": "evolinciteActivity",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteActivity"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteActivityId"
                        ]
                    }
                },
                "evolinciteUser": {
                    "name": "evolinciteUser",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteUser"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteUserId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteActivityEvolinciteUsers",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteActivity",
                        "fields": [
                            "evolinciteActivityId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUser",
                        "fields": [
                            "evolinciteUserId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteUserEvolinciteCrmNegotiation": {
            "name": "EvolinciteUserEvolinciteCrmNegotiation",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "evolinciteCrmNegotiationId": {
                    "name": "evolinciteCrmNegotiationId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteUserId": {
                    "name": "evolinciteUserId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteCrmNegotiation": {
                    "name": "evolinciteCrmNegotiation",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteCrmNegotiation"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteCrmNegotiationId"
                        ]
                    }
                },
                "evolinciteUser": {
                    "name": "evolinciteUser",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteUser"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteUserId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteUserEvolinciteCrmNegotiations",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteCrmNegotiation",
                        "fields": [
                            "evolinciteCrmNegotiationId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUser",
                        "fields": [
                            "evolinciteUserId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "EvolinciteRoomEvolinciteUser": {
            "name": "EvolinciteRoomEvolinciteUser",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "evolinciteRoomId": {
                    "name": "evolinciteRoomId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteUserId": {
                    "name": "evolinciteUserId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "evolinciteRoom": {
                    "name": "evolinciteRoom",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteRoom"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteRoomId"
                        ]
                    }
                },
                "evolinciteUser": {
                    "name": "evolinciteUser",
                    "isArray": false,
                    "type": {
                        "model": "EvolinciteUser"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "evolinciteUserId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "EvolinciteRoomEvolinciteUsers",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteRoom",
                        "fields": [
                            "evolinciteRoomId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byEvolinciteUser",
                        "fields": [
                            "evolinciteUserId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "EvolinciteTaskStates": {
            "name": "EvolinciteTaskStates",
            "values": [
                "PENDING",
                "IN_PROGRESS",
                "REVIEW",
                "COMPLETE"
            ]
        },
        "EvolinciteActivityTypes": {
            "name": "EvolinciteActivityTypes",
            "values": [
                "TASK",
                "MEETING"
            ]
        },
        "EvolinciteTypeBankAccounts": {
            "name": "EvolinciteTypeBankAccounts",
            "values": [
                "AHORRO",
                "CORRIENTE"
            ]
        },
        "EvolinciteTicketState": {
            "name": "EvolinciteTicketState",
            "values": [
                "OPEN",
                "SOLVING",
                "CLOSED"
            ]
        },
        "EvolinciteFunctionalities": {
            "name": "EvolinciteFunctionalities",
            "values": [
                "WALLET_CORE_ROUTE",
                "WALLET_PAYMENT_ROUTE",
                "WALLET_PAYMENT_LOAD_ALL",
                "WALLET_PAYMENT_CREATE",
                "WALLET_PAYMENT_EDIT",
                "WALLET_PAYMENT_DELETE",
                "WALLET_PAYMENT_PROCESS",
                "WALLET_PAYMENT_REVERT",
                "WALLET_PAYMENT_UPLOAD_FILES",
                "WALLET_PAYMENT_EXPORT_FILES",
                "WALLET_PAYMENT_LOAD_PERSONAL",
                "WALLET_EXPENSE_ROUTE",
                "WALLET_EXPENSE_LOAD_ALL",
                "WALLET_EXPENSE_CREATE",
                "WALLET_EXPENSE_EDIT",
                "WALLET_EXPENSE_DELETE",
                "WALLET_EXPENSE_PROCESS",
                "WALLET_EXPENSE_TYPE_ROUTE",
                "WALLET_EXPENSE_TYPE_CREATE",
                "WALLET_EXPENSE_TYPE_EDIT",
                "WALLET_EXPENSE_TYPE_DELETE",
                "WALLET_EXPENSE_REVERT",
                "WALLET_EXPENSE_LOAD_PERSONAL",
                "WALLET_SALARY_ROUTE",
                "WALLET_SALARY_PROCESS",
                "WALLET_REPORTS_PAYMENTS_ACCESS",
                "WALLET_REPORTS_EXPENSES_ACCESS",
                "WALLET_REPORTS_NEGOTIATIONS_ACCESS",
                "WALLET_NEGOTIATIONS_DUPLICATED",
                "WALLET_NEGOTIATIONS_EXPENSE",
                "CRM_CORE_ROUTE",
                "CRM_PROCESS_ROUTE",
                "CRM_STATE_CREATE",
                "CRM_STATE_EDIT",
                "CRM_STATE_DELETE",
                "CRM_PIPELINE_CREATE",
                "CRM_PIPELINE_EDIT",
                "CRM_PIPELINE_DELETE",
                "CRM_COMMENTARY_CREATE",
                "CRM_COMMENTARY_SELECT_FILE",
                "CRM_COMMENTARY_SELECT_EMOJI",
                "CRM_COMMENTARY_DELETE_ALL",
                "CRM_COPY_NEGOTIATION",
                "CRM_MOVE_NEGOTIATION",
                "CRM_COPY_NEGOTIATION_MASSIVE",
                "CRM_MOVE_NEGOTIATION_MASSIVE",
                "CRM_FROZEN_NEGOTIATION",
                "CRM_FIELD_MANAGER_CORE_ROUTE",
                "CRM_FIELD_MANAGER_SECTION_CREATE",
                "CRM_FIELD_MANAGER_FIELD_CREATE",
                "CRM_FIELD_MANAGER_FIELD_AND_SECTION_EDIT",
                "CRM_FIELD_MANAGER_FIELD_AND_SECTION_DELETE",
                "CRM_AUTOMATION_CORE_ROUTE",
                "CRM_AUTOMATION_CREATE",
                "CRM_AUTOMATION_EDIT",
                "CRM_AUTOMATION_DELETE",
                "CRM_CONFIGURATIONS_ACCESS_PERMITS_CRM",
                "CRM_PROCESS_TYPE_CORE_ROUTE",
                "CRM_PROCESS_TYPE_CREATE",
                "CRM_PROCESS_TYPE_EDIT",
                "CRM_PROCESS_TYPE_DELETE",
                "CRM_NEGOTIATION_CREATE",
                "CRM_NEGOTIATION_EDIT",
                "CRM_NEGOTIATION_DELETE",
                "CRM_NEGOTIATION_PARENT_ACCESS",
                "CRM_NEGOTIATION_PARENT_CHANGE",
                "CRM_NEGOTIATION_PARENT_UNLINK",
                "CRM_NEGOTIATION_EDIT_AMOUNTS",
                "CRM_NEGOTIATION_GOAL_CREATE",
                "CRM_NEGOTIATION_GOAL_EDIT",
                "CRM_NEGOTIATION_GOAL_DELETE",
                "CRM_NEGOTIATION_GOAL_ADD",
                "CRM_NEGOTIATION_GOAL_CHANGE",
                "CRM_NEGOTIATION_VIEW_GENERAL_INFORMATION",
                "CRM_CUSTOMER_CREATE",
                "CRM_CUSTOMER_EDIT",
                "CRM_CUSTOMER_DELETE",
                "CALENDAR_CORE_ROUTE",
                "CALENDAR_ACTIVITY_CREATE",
                "CALENDAR_ACTIVITY_EDIT",
                "CALENDAR_ACTIVITY_DELETE",
                "CALENDAR_VIEW_OTHER_USER",
                "TASK_CORE_ROUTE",
                "TASK_CHANGE_STATE",
                "TASK_KANBAN_CORE_ROUTE",
                "TASK_LIST_VIEW_CORE_ROUTE",
                "TASK_KANBAN_VIEW_CORE_ROUTE",
                "COMPANY_CORE_ROUTE",
                "COMPANY_ORGANIZATION_ROUTE",
                "COMPANY_DEPARTMENT_CREATE",
                "COMPANY_DEPARTMENT_EDIT",
                "COMPANY_DEPARTMENT_DELETE",
                "COMPANY_EMPLOYEES_ROUTE",
                "COMPANY_EMPLOYEE_CREATE",
                "COMPANY_EMPLOYEE_EDIT",
                "COMPANY_EMPLOYEE_DELETE",
                "COMPANY_EMPLOYEE_INVITE_USER",
                "COMPANY_EMPLOYEE_JOB_CREATE",
                "COMPANY_EMPLOYEE_JOB_EDIT",
                "COMPANY_EMPLOYEE_JOB_DELETE",
                "COMPANY_REASSIGN_DATA",
                "CHAT_CORE_ROUTE",
                "CHAT_SELECT_EMOJI",
                "CHAT_SELECT_FILE",
                "CHAT_SEND_MESSAGE",
                "MAIL_CORE_ROUTE",
                "MAIL_INBOX_ROUTE",
                "MAIL_COMPOSE_ROUTE",
                "MAIL_DETAIL_ROUTE",
                "FILES_CORE_ROUTE",
                "FILES_CREATE_FILE",
                "FILES_EDIT_FILE",
                "FILES_DELETE_FILE",
                "FILES_CREATE_FILE_ALL",
                "FILES_EDIT_FILE_ALL",
                "FILES_DELETE_FILE_ALL",
                "FILES_VIEW_FILE",
                "FILES_CREATE_FOLDER",
                "FILES_EDIT_FOLDER",
                "FILES_DELETE_FOLDER",
                "FILES_CREATE_FOLDER_ALL",
                "FILES_EDIT_FOLDER_ALL",
                "FILES_DELETE_FOLDER_ALL",
                "FILES_MOVE_FILE_AND_FOLDER",
                "FILES_MOVE_FILE_AND_FOLDER_ALL",
                "FORUM_CORE_ROUTE",
                "FORUM_CREATE_ARTICLE",
                "FORUM_EDIT_ARTICLE",
                "FORUM_DELETE_ARTICLE",
                "FORUM_EDIT_ARTICLE_ALL",
                "FORUM_DELETE_ARTICLE_ALL",
                "SURVEY_CORE_ROUTE",
                "SURVEY_VIEW_FORM",
                "SURVEY_CREATE_FORM",
                "SURVEY_EDIT_FORM",
                "SURVEY_DELETE_FORM",
                "SURVEY_VIEW_ANSWERS",
                "SURVEY_DELETE_ANSWER",
                "SURVEY_PROCESS_ANSWER",
                "ACCESS_CORE_ROUTE",
                "ACCESS_CREATE",
                "ACCESS_EDIT",
                "ACCESS_DELETE",
                "CONFIG_CORE_ROUTE",
                "CONFIG_GENERAL",
                "CONFIG_PROCESS_TYPE",
                "CONFIG_GOALS",
                "CONFIG_JOB_TITLE",
                "CONFIG_CUSTOMER",
                "CONFIG_CUSTOMER_DELETE",
                "CONFIG_PAYMENT_AUTOMATION",
                "CONFIG_PAYMENT_AUTOMATION_CREATE",
                "CONFIG_PAYMENT_AUTOMATION_EDIT",
                "CONFIG_PAYMENT_AUTOMATION_DELETE",
                "CONFIG_DEPARTMENTS",
                "CONFIG_DEPARTMENT_CREATE",
                "CONFIG_DEPARTMENT_EDIT",
                "CONFIG_DEPARTMENT_DELETE",
                "CONFIG_NEGOTIATIONS",
                "CONFIG_NEGOTIATION_CREATE",
                "CONFIG_NEGOTIATION_EDIT",
                "CONFIG_NEGOTIATION_DELETE",
                "TICKETS_VIEW_ALL",
                "ACADEMY_CORE_ROUTE",
                "ACADEMY_COURSES_ROUTE",
                "ACADEMY_WORKSHOPS_ROUTE",
                "ACADEMY_ANSWERS_ROUTE",
                "ACADEMY_ADMIN_ANSWERS_ROUTE",
                "ACADEMY_ADMIN_ANSWERS_ALL_ROUTE",
                "CORPORATE_MANAGEMENT_CORE",
                "CORPORATE_MANAGEMENT_TIME",
                "CORPORATE_MANAGEMENT_TIME_CREATE",
                "CORPORATE_MANAGEMENT_TIME_EDIT",
                "CORPORATE_MANAGEMENT_TIME_DELETE",
                "CORPORATE_MANAGEMENT_MILESTONE",
                "CORPORATE_MANAGEMENT_MILESTONE_CREATE",
                "CORPORATE_MANAGEMENT_MILESTONE_EDIT",
                "CORPORATE_MANAGEMENT_MILESTONE_DELETE",
                "CORPORATE_MANAGEMENT_MILESTONE_VIEW_DETAILS",
                "REQUEST_TEMPLATE_CORE_ROUTE",
                "REQUEST_TEMPLATE_CREATE",
                "REQUEST_TEMPLATE_EDIT",
                "REQUEST_TEMPLATE_DELETE",
                "REQUEST_CORE_ROUTE",
                "REQUEST_CREATE",
                "REQUEST_EDIT",
                "REQUEST_DELETE",
                "TAG_CORE_ROUTE",
                "TAG_CREATE",
                "TAG_EDIT",
                "TAG_DELETE"
            ]
        },
        "EvolinciteTransactionType": {
            "name": "EvolinciteTransactionType",
            "values": [
                "CREDIT_CARD",
                "WIRE_TRANSFER",
                "CASH",
                "WEB_PAY",
                "BANK_DEPOSIT",
                "CORRESPONDENT_DEPOSIT"
            ]
        },
        "EvolinciteLogicOperator": {
            "name": "EvolinciteLogicOperator",
            "values": [
                "EXIST",
                "NOT_EXIST",
                "EQUAL",
                "NOT_EQUAL",
                "GREATER_THAN",
                "SMALLER_THAN"
            ]
        },
        "EvolinciteExpenseStates": {
            "name": "EvolinciteExpenseStates",
            "values": [
                "PENDING",
                "PAID",
                "VALIDATE"
            ]
        },
        "EvolinciteFieldCore": {
            "name": "EvolinciteFieldCore",
            "values": [
                "NAME",
                "VALUE",
                "OWNER"
            ]
        },
        "EvolinciteMunicipality": {
            "name": "EvolinciteMunicipality",
            "values": [
                "CUCUTA",
                "BUCARAMANGA",
                "LETICIA",
                "MEDELLIN",
                "ARAUCA",
                "BARRANQUILLA",
                "BOGOTA",
                "CARTAGENA",
                "TUNJA",
                "MANIZALES",
                "FLORENCIA",
                "YOPAL",
                "POPAYAN",
                "VALLEDUPAR",
                "QUIBDO",
                "MONTERIA",
                "INIRIDA",
                "SAN_JOSE_DEL_GUAVIARE",
                "NEIVA",
                "RIOACHA",
                "SANTA_MARTA",
                "VILLAVICENCIO",
                "PASTO",
                "MOCOA",
                "ARMENIA",
                "PEREIRA",
                "SAN_ANDRES",
                "SINCELEJO",
                "IBAGUE",
                "CALI",
                "MITU",
                "PUERTO_CARRENO"
            ]
        },
        "EvolinciteDocumentType": {
            "name": "EvolinciteDocumentType",
            "values": [
                "CC",
                "NIT"
            ]
        },
        "EvolinciteWalletPaymentStatus": {
            "name": "EvolinciteWalletPaymentStatus",
            "values": [
                "PAID",
                "PENDING",
                "VALIDATE",
                "REVERTED"
            ]
        },
        "EvolinciteField": {
            "name": "EvolinciteField",
            "values": [
                "STRING",
                "NUMBER",
                "SELECT_LIST",
                "DOCUMENT",
                "DATE"
            ]
        },
        "EvolinciteMessageType": {
            "name": "EvolinciteMessageType",
            "values": [
                "TEXT",
                "IMG",
                "FILE",
                "VIDEO"
            ]
        },
        "EvolinciteRule": {
            "name": "EvolinciteRule",
            "values": [
                "MOVE",
                "COPY",
                "CHANGE_ATTRIBUTE",
                "CREATE_PAYMENT",
                "CREATE_EXPENSE",
                "VALIDATE_FIELD",
                "FROZEN_NEGOTIATION",
                "ASSIGN_GOAL_INITIAL",
                "ASSIGN_GOAL_FINAL",
                "CREATE_NEGOTIATION",
                "VALIDATE_TOTAL_TASKS",
                "VALIDATE_TASK_STATE",
                "VALIDATE_TASKS_SPECIFIC_STATE",
                "SEND_PRE_MADE_EMAIL",
                "SEND_CREATE_EMAIL",
                "GENERATE_DOCUMENT",
                "CONTROL_CRM_STATES"
            ]
        },
        "EvolinciteStates": {
            "name": "EvolinciteStates",
            "values": [
                "INACTIVE",
                "ACTIVE"
            ]
        },
        "EvolinciteApplication": {
            "name": "EvolinciteApplication",
            "values": [
                "LEADS_UP",
                "ACADEMY",
                "LANDING"
            ]
        },
        "EvolinciteArticleStates": {
            "name": "EvolinciteArticleStates",
            "values": [
                "INTERNAL",
                "EXTERNAL"
            ]
        },
        "EvolinciteNotificationPriority": {
            "name": "EvolinciteNotificationPriority",
            "values": [
                "HIGH",
                "MEDIUM",
                "LOW"
            ]
        },
        "EvolinciteMailStates": {
            "name": "EvolinciteMailStates",
            "values": [
                "PENDING",
                "SENT",
                "REJECTED"
            ]
        },
        "EvolinciteSurveyAnswerState": {
            "name": "EvolinciteSurveyAnswerState",
            "values": [
                "PROCESS",
                "NO_PROCESS",
                "NO_CRM"
            ]
        },
        "EvolunciteNotificationType": {
            "name": "EvolunciteNotificationType",
            "values": [
                "GENERAL",
                "NEGOTIATION",
                "CHAT"
            ]
        },
        "EvolunciteMilestoneType": {
            "name": "EvolunciteMilestoneType",
            "values": [
                "AMOUNT",
                "CLIENTS",
                "PROCESSES",
                "GOALS",
                "TASKS"
            ]
        },
        "EvolunciteRequestType": {
            "name": "EvolunciteRequestType",
            "values": [
                "NEGOTIATION",
                "PAY",
                "EXPENSE",
                "GENERAL"
            ]
        },
        "EvolinciteRequestPriority": {
            "name": "EvolinciteRequestPriority",
            "values": [
                "HIGH",
                "MEDIUM",
                "LOW"
            ]
        },
        "EvolinciteRequestStatus": {
            "name": "EvolinciteRequestStatus",
            "values": [
                "ACCEPTED",
                "REJECTED"
            ]
        }
    },
    "nonModels": {},
    "codegenVersion": "3.4.4",
    "version": "ad9032f2c7529ba365c1b82fb5391edd"
};