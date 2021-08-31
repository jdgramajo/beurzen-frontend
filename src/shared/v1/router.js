// Using this router helps to maintain the same protocol when navigating.
const router = {
  // TODO: Fix, as is it is broken.
  toRoot: () => (window.location.href = "/v1/"),
};

export default router;
