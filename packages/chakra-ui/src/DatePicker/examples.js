/** @jsx jsx */
import { jsx } from "@emotion/core";
import { storiesOf } from "@storybook/react";
import DatePicker from ".";
import Box from "../Box";
import Stack from "../Stack";

const stories = storiesOf("DatePicker", module);

stories.add("Default", () => <DatePicker />);

/* stories.add("sizes", () => (
  <Box>
    <Stack>
      {["sm", "md", "lg"].map(size => (
        <DatePicker key={size} placeholder="Placeholder" size={size} />
      ))}
    </Stack>
  </Box>
)); */
