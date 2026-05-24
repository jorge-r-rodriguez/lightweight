<template>
  <svg class="logo-svg" viewBox="0 0 72 32" xmlns="http://www.w3.org/2000/svg" aria-label="JR">
    <rect x="1.5" y="1.5" width="69" height="29" rx="14.5" />
    <path d="M22 9v9.2c0 3.2-1.9 5.1-5.1 5.1-1.7 0-3.1-.5-4.2-1.5l2-2.7c.6.6 1.2.9 2 .9 1.2 0 1.9-.7 1.9-2.1V9H22Z" />
    <path d="M27 9h7.2c3.6 0 5.9 1.9 5.9 5 0 2-1 3.6-2.8 4.4l3.4 4.6h-4.1l-2.8-4h-3.3v4H27V9Zm7 6.9c1.6 0 2.5-.7 2.5-1.9s-.9-1.9-2.5-1.9h-3.5v3.8H34Z" />
    <circle cx="56" cy="16" r="3.2" />
  </svg>
</template>

<style scoped lang="scss">
.logo-svg {
  width: 72px;
  height: auto;

  rect {
    fill: transparent;
    stroke: var(--icon-color);
    stroke-width: 3;
  }

  path,
  circle {
    fill: var(--icon-color);
  }
}
</style>
