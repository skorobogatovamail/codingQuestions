/**
 * @param {Element} element
 * @param {string} property
 * @param {string} value
 * @return {Array<Element>}
 */
export default function getElementsByStyle(element, property, value) {
    const res = [];

    function traverse(el) {
        const children = el.children;

        for (let child of children) {
            const styles = window.getComputedStyle(child);
            if (styles[property] === value) res.push(child);
            traverse(child);
        }
    }

    traverse(element);
    return res;
}
