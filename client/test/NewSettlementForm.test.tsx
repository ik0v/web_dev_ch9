import {expect, test} from "vitest";
import {NewSettlementForm} from "../src/newSettlementForm";
import {render} from "@testing-library/react";
import React from "react";


test("test for changes with snapshot", () => {
  const component = render(<NewSettlementForm />);
  expect(component.baseElement).toMatchSnapshot();

});