import { MyComponent } from "./components/MyComponent";
import { render } from "@testing-library/react"

it('should fail', function () {
  expect(render(<MyComponent/>)
    .findByText('NOT IN DOM'))
    .toBe(42)
});
