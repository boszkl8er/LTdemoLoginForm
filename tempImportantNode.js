//-------------------------------------------------------------
//--------------       All Important Link      ----------------
//-------------------------------------------------------------

//1.OAuth2.0 API Link
//https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-protocols-oauth-code

//2.OAuth2.0 Parameter
//https://www.iana.org/assignments/oauth-parameters/oauth-parameters.xhtml

//3.HTML escape reference
//https://www.url-encode-decode.com/
//--------------------------------------------------------------

var clientID = '0a07a77d-ee2e-477e-93ca-fd7f59421237';
var clientSecret = 'Km3aaZ+MavtvfXagfIHQ6bzFWfkXCXZgM8SGJ6VptyI=';



var tokenOrigin = 'https://login.microsoftonline.com/3e0b6cbd-4959-4d01-81bf-ce883ddabd96/oauth2/token';
var authorizeOrigin = 'https://login.microsoftonline.com/3e0b6cbd-4959-4d01-81bf-ce883ddabd96/oauth2/authorize';


//=============================================================
//===================     Example  Link    ====================
// Line breaks for legibility only

/*https://login.microsoftonline.com/{tenant}/oauth2/authorize?
client_id=6731de76-14a6-49ae-97bc-6eba6914391e
&response_type=code
&redirect_uri=http%3A%2F%2Flocalhost%2Fmyapp%2F
&response_mode=query
&resource=https%3A%2F%2Fservice.contoso.com%2F
&state=12345*/




//--------------------  AuthorizeLink -----------------------
var authorizeLink = 'https://login.microsoftonline.com/3e0b6cbd-4959-4d01-81bf-ce883ddabd96/oauth2/authorize?client_id=0a07a77d-ee2e-477e-93ca-fd7f59421237'; //OK

//----->   Client_id    <------
//only have client_id parameter
//&client_id=0a07a77d-ee2e-477e-93ca-fd7f59421237
var receiptLink = 'http://kittipong-tst-webapp.azurewebsites.net/?error=invalid_request&error_description=AADSTS90014%3a+The+request+body+must+contain+the+following+parameter%3a+%27response_type%27.%0d%0aTrace+ID%3a+65689cb9-38e5-437a-9484-b7e546ba1000%0d%0aCorrelation+ID%3a+021ab8ec-3fc8-4f7d-8b9e-ef4417061949%0d%0aTimestamp%3a+2017-09-30+14%3a10%3a41Z';


//-----> response_type   <------
//&response_type=code
//https://login.microsoftonline.com/3e0b6cbd-4959-4d01-81bf-ce883ddabd96/oauth2/authorize?client_id=0a07a77d-ee2e-477e-93ca-fd7f59421237&response_type=code
var receiptLink2 = 'http://kittipong-tst-webapp.azurewebsites.net/?code=AQABAAIAAAABlDrqfEFlSaui6xnRjX5EATAcQ9ONQUhxKbCEk1gn5671oavYuWTFz9mVLsmpb8pCeniTTQFnx3CXaggarVbozyi8fHbJDzQ1oRvV5JlbUH4XvP2KE319545k011JN7Su2TfYgNwMBb4QuBgPRs-pTnhVm1qzadpbbu31r7gDxl1oKFD1KrbdzmPGKv5BMHQ1UlOtgIrTcD0HrV44g0wmc5hTagNzUcn1W9AGcWC0JhpWOhEuPE688KHwMrJzUNVAOyqRg69nvNr_27JtayZrv2Z3yN7rByn5Zkn5bHTpL8GMvbu-ffuvfObSVhEIQpsXdL8_VGProYc-K5alE0SixyPOnix5dHEtAeSS5RLX76TTHbZa6eOSRfg5MQK-wNtT5NHArXomphGQkIV2ggbz2ny8ZovZtIrjicvulMtAOdslGf98EB8Jq_t_lj5yCRG-N9lutPwu3UsGbvpflZv8SyTqHl1mj6PNeWNJ1Zk8wUnrVnExELzhfMmJhFPKgIOy2t4PqGb7qD65kfY1v379-ctsx-THIQHONIPVV1tiH3DqsNfV-gGWAxcbPDEOI94gAA&session_state=a585f39d-d81b-4e6e-b482-412df9a5935e';


//----->  redirect_url   <------
//redirect_url=http%3A%2F%2Fwww.google.co.th
//Error doesn't match
//https://login.microsoftonline.com/3e0b6cbd-4959-4d01-81bf-ce883ddabd96/oauth2/authorize?client_id=0a07a77d-ee2e-477e-93ca-fd7f59421237&response_type=code&redirect_uri=http%3A%2F%2Fwww.google.co.th

//Can work
https://login.microsoftonline.com/3e0b6cbd-4959-4d01-81bf-ce883ddabd96/oauth2/authorize?client_id=0a07a77d-ee2e-477e-93ca-fd7f59421237&response_type=code&state=12345&redirect_url=https%3A%2F%2Flogin.microsoftonline.com%2F3e0b6cbd-4959-4d01-81bf-ce883ddabd96%2Foauth2%2Fauthorize
http://kittipong-tst-webapp.azurewebsites.net/?code=AQABAAIAAAABlDrqfEFlSaui6xnRjX5EPosL5c_aVj78Yi881WUZXCIwOe-FB3wdjrVdK2YoU--apXzRShI7hJ7JZjMrMguV3tDI41KEYxrZgibsye-_DFhRJ0uxV46CoFYdbKWBWh1xMpA4t8GlasIGBj6035WUk3LFyXS5W_wMtYzF34YC8nBqB7kQoq-QaVE_sf7o3pSMIoUWtVHKaw5Iw3NhtWNB1f3EyGSCq9hawUwwObbtsdIO6Xz7yJiUpsePGiIY-LszbtlFEtk9rtLfe0jyT7uEjk-dTh2hMY1_mD0eGugK72bVjhiKs3x52rkmaLX9bGnSFacZlreySHHDkvjQ9MLU_dCQc_ENk_FPYAd0BKGFovwQtdbAND-TXQ45yLuDFvUm79sA3yFjyVltHbLpFNNBXM8FX-nRLxGbg4bp-01t3Bs5A7ke4REq98oneSqB31CS5K21W8lbwNnp8nSJH6X3OYCvPiHOHrqIbTYURQ0z5XJr7VjqBGRhjkbkOf5mTGPU_pTOzoiulbr7B0tzmq8uPOoh3bDrFslORpbTGs966KaDpr2DUi3meu4r9uXjdk8gAA&state=12345&session_state=a585f39d-d81b-4e6e-b482-412df9a5935e


//----->  response_mode   <------
//response_mode=query
//https://login.microsoftonline.com/3e0b6cbd-4959-4d01-81bf-ce883ddabd96/oauth2/authorize?client_id=0a07a77d-ee2e-477e-93ca-fd7f59421237&response_type=code&response_mode=query
var receiptLink3 = 'http://kittipong-tst-webapp.azurewebsites.net/?code=AQABAAIAAAABlDrqfEFlSaui6xnRjX5EtpHTIK0fq1YZ8Ox_sJsVXgNwDo4mK7R5FzmCW7PGvUxmUEOshGWnCIUNzTJB9fjqMyj0C2wouqpwSlu3B3Eukq-1WjRrxhpNwGSnU_2ra0yiX1mKIFBoTOc-Mi9hjDLezqYvMmYbckJYV1snbahly8OTBP3bo0MU5asI8z6jTvcVhvpD28InoDLF9lrTYFumti4o9bvIOuf3psbPPF_pl1ztkgTGH0TIWIU_QxV6xgY0cDrl9JVhj5uFFmoLZh5XVip9GTzGZzQRAOmpYVY-mSdLFLbr_ti9jPxdlBjWPz7_pY_abPs42zS0UK_cJn-wzmX0k4yHyTKNlHgFwBYzTiIEfZ_Myty1Wo3cwL8YATEAQlqQc56lc1mLuChvMVE7ImYAgV75L0GwQQqFJdaCfMqPsqO3O0lP3kTwBoMc3-tZrdFMsuXXq4Ij6HPyr6f50KpJR1Cjr6LdgqZuZppv7S2oqtpeeW_G8MLD53UMfEEzM2jJW7nJJszVaNzqMbbFx9bqQdHdzE9OveCIjeOTCA2A6ZLM9EpMDnyN7s5LEDAgAA&session_state=a585f39d-d81b-4e6e-b482-412df9a5935e';


//----->  resource   <-------
//Can't get link from Atice Directory because stuck permission

//----->  state   <-------
//state=12345
//https://login.microsoftonline.com/3e0b6cbd-4959-4d01-81bf-ce883ddabd96/oauth2/authorize?client_id=0a07a77d-ee2e-477e-93ca-fd7f59421237&response_type=code&state=12345
var receiptLink4 = 'http://kittipong-tst-webapp.azurewebsites.net/?code=AQABAAIAAAABlDrqfEFlSaui6xnRjX5E0GL7nIKP5iuBppxA9ub0nqUtCuWd6x75xjJKAY0LZDKeySdWrlA2d_c1sKZXEfrfVvqQO6DupY0p9ouJDkGVrj6QwdmpVlE92rZm1vm_EKQVTs4s-nuBOZOdFNBJMAyqUyO7UwoEk5HDA_aBaTxNXWiLz-2JAOZ9ZIpcBnQnKFfgbk8D4dUWFEHnEE5RZ0i8nai6Rren5Y01HZU1jYRZx_O7sBOpZhOmQ88gl8BeuSVI8uM668meJ8fVEePQyu-xK3lWosfBi0SnJPh3aXOjwzG_osAeIypxhdR-xHkGOKpBkwOZlputhgu2feeQ3CWFTKGaSbQhWUQWtPvA-I0LvvvfixHcVCHbI_9U4nFY5f9kw5hca2-3RpzhycxqSgE21swvFqJzuo66bq2TdfXN2wnQMKvud6LCkMGPyIWBzvSJVABrJ3sBtZAuKIZflYhKj-gsbqT-kAtpFHiXDAkS4yMVTur6p6-ivRw7sngGwQEqru0fViz-8yNfG8_viAHAOwrfpW0SCvyB9ZeWY0f9m3MpJ72r5SmjYHDbcyiVkAAgAA&state=12345&session_state=a585f39d-d81b-4e6e-b482-412df9a5935e';


//--------------------  Token Link   ------------------------
var tokenLink = 'https://login.microsoftonline.com/3e0b6cbd-4959-4d01-81bf-ce883ddabd96/oauth2/token?client_id=0a07a77d-ee2e-477e-93ca-fd7f59421237';


var webAPI = 'https://together.at/a3d43fa1-50ce-409c-917f-b800d1771c17.WebAPI';

//MainDebug URL
var debugURL = 'https://login.microsoftonline.com/3e0b6cbd-4959-4d01-81bf-ce883ddabd96/oauth2/authorize?client_id=0a07a77d-ee2e-477e-93ca-fd7f59421237&response_type=code';
var debugURL2 = 'https://login.microsoftonline.com/3e0b6cbd-4959-4d01-81bf-ce883ddabd96/oauth2/authorize?client_id=0a07a77d-ee2e-477e-93ca-fd7f59421237&response_type=code&state=12345&redirect_url=https%3A%2F%2Flogin.microsoftonline.com%2F3e0b6cbd-4959-4d01-81bf-ce883ddabd96%2Foauth2%2Fauthorize';

//======================================================================================================
//=========================================    First time    ===========================================
//======================================================================================================
http://kittipong-tst-webapp.azurewebsites.net/?code=AQABAAIAAAABlDrqfEFlSaui6xnRjX5EesNAKgQmQ8OtC3mqyVyakjvbLN1bDOLikyDQKYQTYNJskrx6zAXn1b9qzqei-f0XbdgFqbYuyMaxeQnnEONT0QxpXQ1-u_NYQ6vz9p71UyrPUZ1eodvCN06zuAq7kywU0HgdD8qJJHMUFGR_d5QLA8tRCpVShQAmnyFbPaJC9a-YglJtQPm6Anc5m2eO2iG17ULkaGR9joIwkEELLYAc28pQnijBpTinNQI3EO8V6eNiwYbPi2iugh9vD-dCqv6rtzn02GPJ8nTqlsgd5Lb3UsZhaMQKJ6HP1ASMiigtIzX1llPuBI3Ufy5TOFkvQ1dNGelCn4NwtJxM1fJdHJxQZTuOr1uRrqx_5sNf0E7fCcyGxZSaY_Ww1UocrgiDlueacbsC8aSHzWNq4J3kRsQW_z8vBoNzpn5jUNt2_9jqsmP840Cv2kdv3HL0cRj66HsNCk9Wbx4LeuPeqLbb6wJGDg8Z5D9qJkpX6J4WNoe8cg2potBkRUQfTPrbFhuaWKEngsibqOotkAFliP3koEnFMZzm5xso2PIMR-nTNN1ai-FyyQUWlRS9Ax_jE0CxQlekIAA&session_state=3b8ec7ef-fffe-42b7-bb19-8519fc3b7df6

http://kittipong-tst-webapp.azurewebsites.net/?code=AQABAAIAAAABlDrqfEFlSaui6xnRjX5E-JbuHuVehxATC1pdbf71IRN4jkVjy1ELvA7J1DKFNC3Q0vH0QKFy84Wcof7JxmNYFQsVrc2NF7rqOnM3zGn6CpfMtyZoU-8B-l3DObUe4OO1QbfqCad0CAab8Lp3BWUWdvpBeRVb9DNKbuYZHG2EPfpTDzxHMpCoykY7zNCmGrP-yWkzSJo13xmgYQunn13D1uO-CBKhkbttHlvFP84maOSLu78f-S6S6qylqTko47R8RK3r2bgr8oyBJhVu4Zz3Nu93al8wZS5oCU4ZUtqi7hxOYvLgYwTDYrA5PzA0IaaHh_ACB2bN-EwwGZlN9llwGjike996D3fkfRqzS-CItYFVnng1bguY0V2gluNbS5bD042m82WQ2ajaD78-5s64WRMYwb5B_1n0MzMGaBaRBxP-VnteuBZf8pyoPffl9Waf7qdn1YiX2g37eCBznzQcm67RdC7aYYMnW5DfNPpwTCOm1BH0AP2HUy3jjzC4_6xCy5Bc46l6GUAzkz5pu1RZG2qVHrFp-fb_lqHiZqpfocc6E0S92nLm3KYQzrJpAT_o2UhFn2AbodV8EZyn40O7IAA&session_state=3b8ec7ef-fffe-42b7-bb19-8519fc3b7df6
//======================================================================================================
//=========================================    Second time    ===========================================
//======================================================================================================
http://kittipong-tst-webapp.azurewebsites.net/?error=invalid_request&error_description=AADSTS90014%3a+The+request+body+must+contain+the+following+parameter%3a+%27response_type%27.%0d%0aTrace+ID%3a+eb09bd03-ec77-4deb-a26a-64562de91300%0d%0aCorrelation+ID%3a+9673cb50-c046-4ef6-8b99-dda26d5b773d%0d%0aTimestamp%3a+2017-10-01+09%3a29%3a19Z
//======================================================================================================


{"error":"invalid_grant","error_description":"AADSTS70002: Error validating credentials. AADSTS70008: The provided authorization code or refresh token is expired. Send a new interactive authorization request for this user and resource.\r\nTrace ID: ddaf4d10-b9e4-46a0-aa15-05059e331500\r\nCorrelation ID: e162811e-09a5-4f15-b08d-63a1c0944348\r\nTimestamp: 2017-10-01 09:36:12Z","error_codes":[70002,70008],"timestamp":"2017-10-01 09:36:12Z","trace_id":"ddaf4d10-b9e4-46a0-aa15-05059e331500","correlation_id":"e162811e-09a5-4f15-b08d-63a1c0944348"}

{"error":"invalid_resource","error_description":"AADSTS50001: Resource identifier is not provided.\r\nTrace ID: 7ffa06a6-21e7-440a-8372-01b8d3e31400\r\nCorrelation ID: 0c21fa16-5afc-4051-ba6c-d434ab2cdc1d\r\nTimestamp: 2017-10-01 09:40:09Z","error_codes":[50001],"timestamp":"2017-10-01 09:40:09Z","trace_id":"7ffa06a6-21e7-440a-8372-01b8d3e31400","correlation_id":"0c21fa16-5afc-4051-ba6c-d434ab2cdc1d"}
