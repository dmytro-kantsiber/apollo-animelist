import Typography from "@mui/material/Typography";
import React, { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as LogoSVG } from "../../images/logo.svg";
import { ReactComponent as SearchSVG } from "../../images/search.svg";
import "../../index.css";
import BaseContainer from "../BaseContainer/BaseContainer";
import LoginForm from "../LoginForm/LoginForm";
import SearchBar from "./SearchBar/SearchBar";
import * as Styles from "./styles";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <Styles.HeaderBackground>
      <BaseContainer>
        <Styles.Header>
          <Styles.HeaderItem>
            <Link to="/">
              <Styles.Logo>
                <LogoSVG />
                <Typography> SHISHKIVMORI</Typography>
              </Styles.Logo>
            </Link>
          </Styles.HeaderItem>
          <Styles.HeaderItem>
            {pathname === "/" ? null : (
              <Styles.Search>
                <SearchBar />
                <SearchSVG />
              </Styles.Search>
            )}
          </Styles.HeaderItem>

          <Styles.HeaderItem>
            <LoginForm />
          </Styles.HeaderItem>
        </Styles.Header>
      </BaseContainer>
    </Styles.HeaderBackground>
  );
};

export default memo(Header);
