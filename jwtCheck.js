import expressjwt from "./node_modules/express-jwt";
import { request, response } from "./node_modules/express";
const jwtCheck = expressjwt(
    {
        secret     : "secretKey",
        algorithms : [ "HS256" ]
    },
    (request, response) => response.send(request.user)
);

export default jwtCheck;
