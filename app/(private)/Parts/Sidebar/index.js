"use client";

import Wrapper from "./Parts/Wrapper";

export default function Sidebar() {
  return (
    <Wrapper>
      <Wrapper.Item
        id="dashboard"
        label="Dashboard"
        href="/clientzone/dashboard"
      />
      <Wrapper.Item
        id="add-project"
        label="Portofolios"
        href="/clientzone/add-project"
      />
      <Wrapper.Item
        id="project-list"
        label="Portofolio Journey"
        href="/clientzone/project-list"
      />
      <Wrapper.Item
        id="my-library"
        label="My Library"
        href="/clientzone/my-library"
      />
    </Wrapper>
  );
}
