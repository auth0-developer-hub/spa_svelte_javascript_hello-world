import { get, writable } from "svelte/store";

const MobileMenuState = {
  CLOSED: "closed",
  OPEN: "open",
};

const MobileMenuIcon = {
  CLOSE: "close",
  MENU: "menu",
};

function createMobileMenu() {
  const initialState = {
    status: MobileMenuState.CLOSED,
    icon: MobileMenuIcon.MENU,
  };
  const store = writable(initialState);
  const { subscribe, update } = store;

  const isMobileMenuClosed = () =>
    subscribe((state) => state.status === MobileMenuState.CLOSED);

  const isMobileMenuOpen = () =>
    subscribe((state) => state.status === MobileMenuState.OPEN);

  const openMobileMenu = () => {
    document.body.classList.add("mobile-scroll-lock");

    update(() => ({
      status: MobileMenuState.OPEN,
      icon: MobileMenuIcon.CLOSE,
    }));
  };

  const closeMobileMenu = () => {
    document.body.classList.remove("mobile-scroll-lock");

    update(() => ({
      status: MobileMenuState.CLOSED,
      icon: MobileMenuIcon.MENU,
    }));
  };

  const toggleMobileMenu = () => {
    switch (get(store).status) {
      case MobileMenuState.OPEN: {
        closeMobileMenu();
        return;
      }

      case MobileMenuState.CLOSED: {
        openMobileMenu();
        return;
      }
    }
  };

  return {
    subscribe,
    isOpen: isMobileMenuOpen,
    isClosed: isMobileMenuClosed,
    open: openMobileMenu,
    close: closeMobileMenu,
    toggle: toggleMobileMenu,
  };
}

export const mobileMenu = createMobileMenu();
