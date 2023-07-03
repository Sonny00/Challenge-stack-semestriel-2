import { useState } from "react";
import Router from "next/router";
import useRequest from "../hooks/use-request";
import { Container, Row, Col } from "react-bootstrap";
import { LayoutTwo } from "../components/Layout";
import { BreadcrumbOne } from "../components/Breadcrumb";
import Anchor from "../components/anchor";

const LoginRegister = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const { doRequest: loginRequest, errors: loginErrors } = useRequest({
    url: "/api/users/login",
    method: "post",
    body: {
      email: loginEmail,
      password: loginPassword,
    },
    onSuccess: () => Router.push("/"),
  });
  const { doRequest: registerRequest, errors: registerErrors } = useRequest({
    url: "/api/users/signup",
    method: "post",
    body: {
      email: registerEmail,
      password: registerPassword,
    },
    onSuccess: () => Router.push("/"),
  });
  const { doRequest: signInRequest, errors: signInErrors } = useRequest({
    url: "/api/users/signin",
    method: "post",
    body: {
      email: loginEmail,
      password: loginPassword,
    },
    onSuccess: () => Router.push("/"),
  });

  const onLoginSubmit = async (event) => {
    event.preventDefault();
    await loginRequest();
  };

  const onRegisterSubmit = async (event) => {
    event.preventDefault();
    await registerRequest();
  };

  const onSignInSubmit = async (event) => {
    event.preventDefault();
    await signInRequest();
  };

  return (
    <LayoutTwo>
      {/* breadcrumb */}
      <BreadcrumbOne
        pageTitle="Espace Client "
        backgroundImage="../assets/images/harley-davidson-g788352755_1920.jpg"
      >
        <ul className="breadcrumb__list">
          <li>
            <Anchor path="/">Accueil</Anchor>
          </li>
          <li>Espace Client</li>
        </ul>
      </BreadcrumbOne>
      <div className="login-area space-mt--r130 space-mb--r130">
        <Container>
          <Row>
            <Col lg={6} className="space-mb-mobile-only--50">
              <div className="lezada-form login-form">
                <form onSubmit={onLoginSubmit}>
                  <Row>
                    <Col lg={12}>
                      <div className="section-title--login text-center space-mb--50">
                        <h2 className="space-mb--20">Connexion</h2>
                        <p>Bon retour sur Vroom</p>
                      </div>
                    </Col>
                    <Col lg={12} className="space-mb--60">
                      <input
                        type="email"
                        placeholder="Adresse Email"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                      />
                    </Col>
                    <Col lg={12} className="space-mb--60">
                      <input
                        type="password"
                        placeholder="Mot de passe"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                      />
                    </Col>
                    <Col lg={12} className="text-center">
                      <button className="lezada-button lezada-button--medium">
                        Connexion
                      </button>
                    </Col>
                    <Col></Col>
                  </Row>
                </form>
              </div>
            </Col>
            <Col lg={6}>
              <div className="lezada-form login-form--register">
                <form onSubmit={onRegisterSubmit}>
                  <Row>
                    <Col lg={12}>
                      <div className="section-title--login text-center space-mb--50">
                        <h2 className="space-mb--20">Inscription</h2>
                        <p>Si vous n'avez pas de compte, inscrivez-vous !</p>
                      </div>
                    </Col>
                    <Col lg={12} className="space-mb--30">
                      <label htmlFor="regEmail">
                        Adresse Email <span className="required">*</span>{" "}
                      </label>
                      <input
                        type="text"
                        id="regEmail"
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                        required
                      />
                    </Col>
                    <Col lg={12} className="space-mb--50">
                      <label htmlFor="regPassword">
                        Mot de passe <span className="required">*</span>{" "}
                      </label>
                      <input
                        type="password"
                        id="regPassword"
                        value={registerPassword}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                        required
                      />
                    </Col>
                    <Col lg={12} className="text-center">
                      <button className="lezada-button lezada-button--medium">
                        Inscription
                      </button>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
            <Col lg={6}></Col>
          </Row>
        </Container>
      </div>
    </LayoutTwo>
  );
};

export default LoginRegister;
