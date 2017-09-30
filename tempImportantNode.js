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



//MainDebug URL
var debugURL = 'https://login.microsoftonline.com/3e0b6cbd-4959-4d01-81bf-ce883ddabd96/oauth2/authorize?client_id=0a07a77d-ee2e-477e-93ca-fd7f59421237&response_type=code';
var debugURL2 = 'https://login.microsoftonline.com/3e0b6cbd-4959-4d01-81bf-ce883ddabd96/oauth2/authorize?client_id=0a07a77d-ee2e-477e-93ca-fd7f59421237&response_type=code&state=12345&redirect_url=https%3A%2F%2Flogin.microsoftonline.com%2F3e0b6cbd-4959-4d01-81bf-ce883ddabd96%2Foauth2%2Fauthorize';