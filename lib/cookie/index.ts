const cookie = {
  set(name: string, value: string) {
    let updatedCookie =
      encodeURIComponent(name) + "=" + encodeURIComponent(value);

    document.cookie = updatedCookie;
  },
  get(name: string) {
    let matches = document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  },
  remove(name: string) {
    this.set(name, "");
  },
};

export default cookie;
