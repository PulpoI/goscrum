import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";

import Register from "./Register";

const server = setupServer(
  rest.get("http://goscrum-api.alkemy.org/auth/data", (req, res, ctx) => {
    return rest(
      ctx.json({
        result: {
          continente: ["America", "Europa", "Otro"],
          region: ["Otro", "Latam", "Brasil", "America del Norte"],
          Rol: ["Team Member", "Team Leader"],
        },
      })
    );
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());

it("fetch options", async () => {
  render(<Register />, { wrapper: MemoryRouter });

  expect(
    screen.getByRole("option", { name: "Seleccionar rol..." })
  ).toBeInTheDocument();
  expect(
    // en el AWAIT cambiar getByRole por findByRole
    await screen.findByRole("option", { name: "Europa" })
  ).toBeInTheDocument();
});
