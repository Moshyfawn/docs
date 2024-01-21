---
title: Themes
description: Zed UI and syntax themes explained
---

:::caution
Zed themes and their underlying systems are undergoing significant development. They should not be considered stable or final. Note that themes are subject to change or removal as the theme system moves towards a stable version.
:::

A Zed Theme refers to and affects both the UI and the syntax highlighting of Zed.

We will not have separate UI and syntax themes like in Atom, but we will provide a way to override syntax styles (and more) from a single theme.

---

A variety of Zed flavoured ports of various syntax themes are available in Zed. These are mostly placeholders while we develop the system and develop our own themes. It is likely the themes that exist today in Zed will be converted into community themes in the future when we ship user-creatable themes.

## Choosing a Theme

You can choose a theme in Zed a few ways:

- by pressing `CMD + K` then `CMD + T`
- by typing `theme` in the command palette
- by editing your `settings.json` with a specific theme name:

```json
{
  "theme": "Ayu Mirage",
}
```

---

## Theme Philosophy

The theme you use in your editor is deeply personal. Whether it is focused utterly on function, or just an aesthetic that you enjoy, ultimately, a theme should be a reflection of what is important to you.

We want to provide the right balance of good defaults and a powerful toolkit to make your editor your own.

In practice, this means:

- **Default Themes**: We want to provide a set of themes that are beautiful, usable and accessible out of the box. Additionally, we would love to provide default versions of prominent themes that developers are already familiar with where possible.

- **Powerful Customization**: We want to provide a way to customize your theme to your heart's content. This could mean taking a default theme and just changing a few colors, or it could mean creating your own theme from scratch.

- **Community**: We want to enable the community to create and share their themes. We will provide a way to load themes into Zed, and a toolkit for building themes.

- **Accessibility**: We want to ensure that the default themes are accessible to all users. We will also provide guardrails for you to ensure that your custom themes are accessible. We won't, however, require you to make your theme accessible. We may tag themes that don't meet our accessibility standards as such, but we won't prevent you from using or sharing them.

We want you to have the flexibility to express yourself while ensuring the editor remains a functional tool. We're working hard to create a theme system that strikes the right balance between customization and usability.

### Accessibility in Themes

:::ca
Currently, many of Zed's themes are largely inaccessible. We are working on a new accessible theme system, which will launch with Zed 1.0
:::

A11y (accessibility) in Zed will be a long project. Likely lasting far beyond 1.0. Due to GPUI being written from the ground up we don't have access to the same a11y features that Swift, Web-based apps or [insert other language] does.

Making Zed accessible will be a joint effort between things on the Zed side, and building out features in GPUI.

For now, you can join this discussion to talk further about a11y in Zed: [Accessibility (a11y) in Zed](https://github.com/zed-industries/community/discussions/1297)

### Roadmap

_**Subject to change**. This is to provide some insight into our plans around themes, and the amount of work that needs to go into the system before user themes can be launched._

- [x] **Default Palette**: The set of colors that Zed pulls from to build its default themes and uses for semantic colors. This is almost entirely internal facing, but eventually we will expose it for use in custom themes.
- [x] **Syntax Overrides**: The ability to override syntax colors from a theme. This will ship before public beta to allow us to correctly color the One theme family, which will continue to be the default for now.
- [ ] **Theme 1.0 Specification**: The spec for a theme. This will include the ability to override syntax colors, as well as UI colors. We likely will define more features than we will build at the start, but this will allow us to add more features in the future without breaking existing themes.
- [ ] **Port Existing Themes**: We will need to bring our existing themes up to spec. Some themes will likely be removed or replaced at this point.
- [ ] **Token Driven UI**: This is internal facing. Use standard design tokens to style every element in the UI. This is a pretty big step that won't have a lot of immediately visible impact, but will allow us to build UI Overrides, and significantly improve the way we style every part of the app.
- [ ] **Loading Themes**: The ability to load a theme from disk.

*Future things*:

- [ ] **UI Overrides**: Similar to syntax overrides, but for UI elements. This would, for example, allow you to change the color of the sidebar background or the label color of an active tab.
- [ ] **UI surface for downloading themes**: This might be a palette or panel in the editor, an external site for exploring and downloading themes, etc.

---

## Known issues

- **Low contrast**: The current contrast between elements from theme to theme ranges from ok to very low. This will be addressed when we ship the tokens portion of our new system (see roadmap)
- Spacing between groups and elements in places is insufficient or inconsistent
- Some elements have insufficient states, or do not have states at all.

---

### Theme FAQ

<details>

  <summary>Can I create my own theme?</summary>

  This is planned, though we don't have a timeline. We'll let the community know when this is ready to test and get feedback on.

</details>

<details>

  <summary>Can you add [Feature] or [UI Element]?</summary>

  This isn't a theme issue. If you would like to discuss something you would like to see added you could start a [discussion](https://github.com/zed-industries/community/discussions).

</details>

<details>

  <summary>Can you add file type icons to themes?</summary>

  Not yet, but it is [highly requested](https://github.com/zed-industries/community/issues/206) in our community board. If you would like to see this feature specifically, feel free to share any projects for sourcing these in the [GitHub issue](https://github.com/zed-industries/community/issues/206).

</details>

<details>

<summary>How can I get involved with Themes in Zed?</summary>

There is an open themes discussion in our community repository here: [Themes: Ideas, Feedback, Accessibility, Discussion](https://github.com/zed-industries/community/discussions/503).

You can also join [our Discord](https://discord.gg/h4az9geD4Y) to talk about themes and design, but note we **do not** take feature requests or questions about feature timelines in Discord.

</details>
