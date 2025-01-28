export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2 className="wd-class-selector">Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel right on the element.
        Although it's very convenient it is considered bad practice and you
        should avoid using the style attribute
      </p>
      <p id="wd-id-selector-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, omnis.
        Numquam alias modi distinctio? Ea dicta dolorem, ut ducimus nobis
        sapiente excepturi eaque, ullam incidunt, numquam voluptate magnam optio
        possimus.
      </p>
      <p
        id="wd-id-selector-2"
        className="wd-border-solid wd-border-fat wd-border-yellow"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, omnis.
        Numquam alias modi distinctio? Ea dicta dolorem, ut ducimus nobis
        sapiente excepturi eaque, ullam incidunt, numquam voluptate magnam optio
        possimus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, omnis.{" "}
        <span className="wd-class-selector">
          Numquam alias modi distinctio?
        </span>{" "}
        Ea dicta dolorem, ut ducimus nobis sapiente excepturi eaque, ullam
        incidunt, numquam voluptate magnam optio possimus.
      </p>
      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an element's
          CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
      </div>
      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3 className="wd-fg-color-blue">Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular places in
            the document
            <p className="wd-selector-3 wd-bg-color-green wd-fg-color-white">
              This paragraph's red background is referenced as
              <br />
              .selector-2 .selector3
              <br />
              meaning the descendant of some ancestor.
              <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span>
              <br />
              You can combine these relationships to create specific styles
              depending on the document structure
            </p>
          </div>
        </div>
      </div>
      <div id="wd-css-dimensions">
        <h2>Dimension</h2>
        <div>
          <div
            className="wd-dimension-portrait
                    wd-bg-color-yellow"
          >
            Portrait
          </div>
          <div
            className="wd-dimension-landscape wd-bg-color-blue
                    wd-fg-color-white"
          >
            Landscape
          </div>
          <div className="wd-dimension-square wd-bg-color-red">Square</div>
        </div>
      </div>
      <div id="wd-css-position-relative" className="wd-pos-relative">
        <h2>Relative</h2>
        <div className="wd-bg-color-gray">
          <div
            className="wd-bg-color-yellow 
                    wd-dimension-portrait"
          >
            <div className="wd-pos-relative-nudge-down-right">Portrait</div>
          </div>
          <div
            className="wd-pos-relative-nudge-up-right 
        wd-bg-color-blue wd-fg-color-white 
        wd-dimension-landscape"
          >
            Landscape
          </div>
          <div className="wd-bg-color-red wd-dimension-square">Square</div>
        </div>
      </div>
    </div>
  );
}
