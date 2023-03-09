import React from "react";
import P from "prop-types";
import * as Styled from "./styles";

export const Viewer = ({ children }) => {
	return <Styled.Container>{children}</Styled.Container>;
};

Viewer.propTypes = {
	children: P.node.isRequired,
};
