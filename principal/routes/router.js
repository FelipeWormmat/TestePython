import index from "../src/index";
import authentication from "../authentication/authenticationJWT";

module.exports = app => {
    const indexController = index()
    app.route("/api/v1/index")
        .post(authentication, indexController.savecontato) 
}