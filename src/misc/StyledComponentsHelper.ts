class StyledComponentsHelper {
  private defaults: any;

  constructor(defaults: any) {
    this.defaults = defaults;
  }

  public getPropObject = (props: {
    [key: string]: string;
  }): StyledComponentsHelperProps => {
    const clone: StyledComponentsHelperProps = Object.assign({}, this.defaults);
    const empty: StyledComponentsHelperProps = {};
    for (const [k] of Object.entries(clone)) {
      empty[k] = props[k] || clone[k];
    }

    return empty;
  };
}

export default StyledComponentsHelper;
