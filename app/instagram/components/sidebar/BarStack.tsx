import { Stack } from "@mui/joy";
import { Insights } from "../Icons";
import ClientSideLink from "./sidelinks/ClientSideLink";

const BarStack = () => {
  return (
    <Stack spacing={2}>
      <ClientSideLink href="insights" icon={<Insights />} title="Insights" />
    </Stack>
  );
};

export default BarStack;
