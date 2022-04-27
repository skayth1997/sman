const cookie = {
  set(name, value) {
    let updatedCookie =
      encodeURIComponent(name) + "=" + encodeURIComponent(value);

    document.cookie = updatedCookie;
  },
  get(name) {
    let matches = document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  },
  remove(name) {
    this.set(name, "");
  },
};

export default cookie;
