export class SortingUtil {
  /**
   * Sort by field function
   * @param {string} field Field to sort for
   * @param {boolean} reverse Reverse sorting direction
   * @param {boolean} ignoreCase case for strings
   * @returns {(a: {[p: string]: {}}, b: {[p: string]: {}}) => (number | number)} Sort function
   */
  public static sortByField<T extends object>(
    field: string | number,
    reverse = false,
    ignoreCase = false
  ) {
    return (a: T, b: T) => {
      const aValue = this.getNestedProperty(a as { [key: string]: {} }, field as string);
      const bValue = this.getNestedProperty(b as { [key: string]: {} }, field as string);

      const aField =
        ignoreCase && !(typeof aValue === 'number') ? aValue.toString().toLowerCase() : aValue;
      const bField =
        ignoreCase && !(typeof bValue === 'number') ? bValue.toString().toLowerCase() : bValue;

      return reverse ? this.compareValues(aField, bField) : this.compareValues(bField, aField);
    };
  }

  public static sortArrayBy<T extends object>(array: T[], field: string, isDesc: boolean) {
    return this.copySort(array, SortingUtil.sortByField(field, isDesc, true));
  }

  private static compareValues(a: {}, b: {}): number {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  }

  public static getNestedProperty(object: { [key: string]: {} }, property: string): {} {
    if (typeof object === 'undefined') {
      return false;
    }
    const index = property.indexOf('.');
    if (index > -1) {
      return this.getNestedProperty(
        object[property.substring(0, index)],
        property.substr(index + 1)
      );
    }
    return object[property];
  }

  // Sort an array but ignore mutation of original array and create a new one
  private static copySort<T extends object>(array: T[], sortFn: (a: T, b: T) => number) {
    const arrayCopy = array.slice();
    return arrayCopy.sort(sortFn);
  }
}
