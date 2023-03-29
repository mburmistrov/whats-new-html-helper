import SyntaxHighlighter from 'react-syntax-highlighter';

const convertToKebabCase = (value) => value.toLowerCase().split(" ").join("-");
const getOutputForPost = (post) => {
  const attrFormatTitle = convertToKebabCase(post.title);
  const attrFormatPlatform = convertToKebabCase(post.platform);
  const attrFormatQuarter = convertToKebabCase(post.quarter);
  const attrFormatTag = convertToKebabCase(post.tag);

  return `
<section className="wt-section wt-section_bg_dark wt-section_theme_dark ${attrFormatTag} ${attrFormatPlatform}">
  <div className="wt-container">
    <div className="f-section">
      <div className="f-title"
         data-title="scope ${post.quarter} ${post.title}"
         data-filter="${attrFormatPlatform}"
         title="${post.title}">
        <div
          className="wt-text-3 wt-text-1_hardness_hard wt-text-3_theme_dark wt-row wt-row_size_xs f-title__data">
          <div className="wt-col-inline">${post.date}</div>
          <div className="wt-col-inline copy-link"
             data-href="#scope-${attrFormatQuarter}-${attrFormatTitle}"></div>
          <div className="wt-col-inline"><span className="wn-tag">${post.tag}</span></div>
        </div>
        <div className="wt-row wt-row_size_m wt-row_justify_between">
          <h2 className="wt-h2 wt-h2_theme_dark wt-offset-top-8 wt-col-8 wt-col-sm-12">
            ${post.title}
          </h2>
          <div className="wt-col-4 wt-col-sm-12 wt-offset-top-sm-16 version-tags">
            <span className="f-badge f-badge_text-normal ${attrFormatPlatform}">${post.platform}</span>
          </div>
        </div>
      </div>

      <div className="f-block f-block_1-of-1 f-block_img-right">
        <a
          className="js-popup popup _with-icon _show-img f-img f-img_1-of-2"
          href-english="/space/whatsnew/img/${attrFormatQuarter}/${post.imageName}"
        >
          <img
            className="f-img"
            src="/space/whatsnew/img/${attrFormatQuarter}/${post.imageName}"
            alt="${post.title}"
            width="600"
            loading="eager"
          />
        </a>
        <div className="f-description">
          <div className="f-text f-text_theme_dark">
            ${post.contentHtml}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`;
}
function Output({ post }) {
  const outputString = getOutputForPost(post);
  return (
  <SyntaxHighlighter customStyle={{'font-size': '11px'}}>
    {outputString}
  </SyntaxHighlighter>
  );
}

export default Output;
