---
sidebar_position: 0
title: bbj-icon
sidebar_class_name: sidebar--item__hidden
slug: bbj-icon
---

import TableBuilder from '@site/src/components/DocsTools/TableBuilder';
import FiberSmartRecordIcon from '@mui/icons-material/FiberSmartRecord';
import Chip from '@mui/material/Chip';

<Chip  label="Shadow" component="a" href="https://stenciljs.com/docs/styling#what-is-the-shadow-dom" target="_blank" clickable icon={<FiberSmartRecordIcon />} />

<br />
<br />
<br />

The `<bbj-icon>` provides methods for displaying a UI icon. An icon is a unelectable SVG image that represents an application, a capability, or some other concept or specific entity with meaning for the user. There are several icons pools that the user can choose from, which will be loaded from a CDN on demand. The following list of pools are available to use out of the box in `Button` components:

- [Tabler](https://tabler-icons.io/)
- [Feather](https://feathericons.com/)
- [FontAwesome Free](https://fontawesome.com/)

You can use this component like this:

```html
<bbj-icon pool="POOL_NAME" name="ICON_NAME"></bbj-icon>
```

:::info
The default pool name is tabler
:::

You can use these when adding text to certain components via the `setText()` method by setting text similar to the following:

```java
  Button reminder = new Button("<html><bbj-icon name=\"bell\"></bbj-icon> Icon Left</html>");
```

## Styling

### Expanses
When styling icons, it is possible to use the `theme` and `expanse` attributes to modify the icons, especially when using them with other components that are utilizing themes and expanses. Below is information on the attributes, as well as parts and properties required for customizing icons with CSS.

### Shadow Parts

These are the various parts of the shadow DOM for the component, which will be required when styling via CSS is desired.

<TableBuilder tag={require('@site/docs/components/_bbj_control_map.json').Icon} table="parts"/>

### CSS Properties

These are the various CSS properties that are used in the component, with a short description of their use.


<TableBuilder tag={require('@site/docs/components/_bbj_control_map.json').Icon} table="properties"/>

### Reflected Attributes

The reflected attributes of a component will be shown as attributes in the rendered HTML element for the component in the DOM. This means that styling can be applied using these attributes.


<TableBuilder tag={require('@site/docs/components/_bbj_control_map.json').Icon} table="reflects"/>