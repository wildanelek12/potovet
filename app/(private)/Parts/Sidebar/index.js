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
        label="Add Project"
        href="/clientzone/add-project"
      />
      <Wrapper.Item
        id="project-list"
        label="Project List"
        href="/clientzone/project-list"
      />
    </Wrapper>
  );
}
