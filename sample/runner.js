
require('dotenv').config()

const TokenSaver = require('./TokenSaver');

const saver = new TokenSaver();

const tokenData = {
    realmId: '4625319964620848278',
    token_type: 'bearer',
    access_token: 'eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..wLdClMRLM6QjRLArR-CqqA.898qnGtVO5c3w6ylZv19zhvAJPOhr-hW-jjToIK2OxMz18CrJ1HCKdDAWuYQfb6dBd1-ObG8mw2Xi8SeRes8GDcNWG-tKbkVe9c15WE6BHwH_3JK3i2OW1ZIDLCA0raBg5YYcdhZEUyJCXMXhmzWtEWDPOUk69fd1lX4W0TMzdI5LlZ2UQ5AsNSQO2oeqNCa5_g6oMnJtts2nRS5FEb7Tk_Rjo0IB9LyJdqz_J4HjBSuuXCBUMgwMnwlHRiQTm0iZzjErsED4A8YaFjf5IqTK3xMO-n_1e-FDg_SC3Mr_AStGyQvAIGBYYds5MZ8m0MeRqKHECzdeo2hRfa9Mdy1B6Vew-xvTNTMjnjyREz_5pkJKGDCrWfISRF5kn8NC2eVWp1zgrmC2K1I8ugiFpcENzfO3KyMyFpnDyjwzRmjDBGUBBqtdBdt12hG34RzOQ-jde17q5YHrH6D4ObhSzALfZbKIlhr2b8z46NWI2x36KZKeu9uhjpvpxksOQ05XvQOvNG72LOxYrfuTQ-gRrk8-lPHArwsXS09L6xBKqc1F2dD2ucrM2CrdsdoHuejrMNKQ3N1JDyiPOYbw6IlDO6qlDLAMV-jKMBb1Pgcq_G6qGOg4EdWVOJjzd4Kf1YA6azhGp4RefibuNJKxWn7cskh2FkSGSBJlPqrPDdsj0vtp_Ueolh80dXjYMrVSQGFBzmq5eUNQVaEMvxagVQRWDD26RlPNZXunCoMnvKJNUAnctnCF5idTJadgJeaoNtfH_xE.kY9waBRHrpiK3HlD6ShydQ',
    refresh_token: 'AB11654363506sQAc20kr5ZARdEG0urk1IkoXIgZUx5b6F6sk0',
    expires_in: 3600,
    x_refresh_token_expires_in: 8726400,
    createdAt: 1645637106335
}

saver.saveAuthToken(tokenData, '00000000-0000-0000-0000-000000000000')
