import type { APIRoute } from "astro";

const getRobotsTxt = () => `
User-agent: *
Allow: /
`;

export const GET: APIRoute = ({ site }) => {
  return new Response(getRobotsTxt());
};
