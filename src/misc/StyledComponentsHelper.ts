class StyledComponentsHelper {
  private defaults: any;

  constructor(defaults: any) {
    this.defaults = defaults;
  }

  public getPropObject = (extraProps?: string[]) => {
    const clone: any = Object.assign({}, this.defaults);
    const empty: any = {};
    for (const [k] of Object.entries(clone)) {
      empty[k] = (p: any) => p[k] || clone[k];
    }

    return empty;
  };
}

export default StyledComponentsHelper;
