import Text from "../ui/text";

export default function Footer() {
  return (
    <footer className="flex w-full items-center justify-between border-t border-muted py-4">
      <Text lightness={500} weight={"medium"}>
        © {new Date().getFullYear()}. All rights reserved.
      </Text>
      <Text>Created by Ricardo Adorno</Text>
    </footer>
  );
}
