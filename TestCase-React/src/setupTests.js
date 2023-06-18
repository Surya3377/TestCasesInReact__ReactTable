import '@testing-library/jest-dom';
import { Server } from "./mocks/Server";

beforeAll(() => Server.listen());

afterEach(() => Server.resetHandlers());

afterAll(() => Server.close());
