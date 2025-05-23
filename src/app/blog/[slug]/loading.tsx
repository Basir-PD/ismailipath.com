import { PulseLoader, LoaderContainer } from "@/app/components/Loaders";

export default function BlogLoading() {
  return (
    <LoaderContainer className="min-h-[70vh]" withBackground={false}>
      <PulseLoader text="Loading article" />
    </LoaderContainer>
  );
}
