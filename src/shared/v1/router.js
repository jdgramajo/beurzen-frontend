// Using this router helps to maintain the same protocol when navigating.
const router = {
  toRoot: () => (window.location.href = "/v1/"),
  toMain: () => (window.location.href = "/v1/main/"),
  toError: () => (window.location.href = "/v1/error/"),
};

export default router;
