export const viewTransitionNavigate = (navigate, to) => {
    if (!document.startViewTransition) {
      navigate(to)
      return
    }
  
    document.startViewTransition(() => navigate(to))
  }
  