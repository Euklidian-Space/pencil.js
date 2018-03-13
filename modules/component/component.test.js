/* global test expect jest */
import Position from "@pencil.js/position";
import Component from "./component";

test("defaultOptions", () => {
  expect(Component.defaultOptions).toMatchObject({
    alpha: 1,
    fill: "#000",
    stroke: null,
    strokeWidth: 1,
    cursor: null
  });
});

test("Component creation", () => {
  const opts = Component.defaultOptions;
  const comp = new Component(new Position(0, 0), opts);

  expect(comp.isHovered).toBe(false);
  expect(comp.isShown).toBe(true);
  expect(comp.options).toEqual(opts);
});

test("Component render returns a container", () => {
  const canvas = window.document.createElement("canvas");
  const ctx_mock = canvas.getContext("2d");
  const opts = Component.defaultOptions;
  const comp = new Component(new Position(0, 0), opts);
  const container = comp.render(ctx_mock);

  expect(typeof container).toBe("Container");
});