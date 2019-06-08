
class Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: -1
        };
    }
    /***
     * Selects the given fold, and deselects if it has been clicked again by setting "active to -1"
     * */
    selectFold = foldNum => {
        const current = this.state.active === foldNum ? -1 : foldNum;
        this.setState(() => ({ active: current }));
    };

    render() {
        return (
            <div className="accordion">
                {this.props.contents.map((content, i) => {
                    return (
                        <Fold
                            key={`${i}-${content.title}`}
                            content={content}
                            handle={() => this.selectFold(i)}
                            active={i === this.state.active}
                        />
                    );
                })}
            </div>
        );
    }
}

class Fold extends React.Component {
    render() {
        return (
            <div className="fold">
                <button
                    className={`fold_trigger ${this.props.active ? "open" : ""}`}
                    onClick={this.props.handle}
                >
                    {this.props.content.title}
                </button>
                <div
                    key="content"
                    className={`fold_content ${this.props.active ? "open" : ""}`}
                >
                    {this.props.content.inner}
                </div>
            </div>
        );
    }
}

const pictures = [
    "http://unsplash.it/200",
    "http://unsplash.it/200",
    "http://unsplash.it/200",
];
var test = (title, text, imageURLs) => {
    const images=
        <div className='test-images' >
            {imageURLs.map((url,i) => <img key={i} src={url} />)}
        </div>;

    const inner =
        <div className='test-content' >
            <p>{text} </p>
            {images}
        </div>;

    return {title, inner};
};

const testData = [
    test('Title', 'Content',pictures ),
    test('Title', 'Content',pictures ),
    test('Title', 'Content',pictures ),
    test('Title', 'Content',pictures ),
    test('Title', 'Content',pictures ),
];

ReactDOM.render(<Accordion contents={testData} />, document.getElementById('root'));