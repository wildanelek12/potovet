"use client";

import Wrapper from "./Parts/Wrapper";

export default function Sidebar() {
  return (
    <Wrapper>
      <Wrapper.Item id="portofolios-insight" label="Dashboard" href="/clientzone/dashboard" />
      <Wrapper.Item id="add-project" label="Create a Portfolio" href="/clientzone/add-project" />
      <Wrapper.Item id="project-list" label="My Portofolio" href="/clientzone/project-list" />
      <Wrapper.Item id="my-library" label="My Drive" href="/clientzone/my-library" />
    </Wrapper>
  );
}
