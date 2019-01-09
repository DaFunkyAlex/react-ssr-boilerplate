import React from 'react';
import styler from '../helpers/styler';

class Dashboard extends React.Component {

    render() {
        return (
            <article>
                <div className={styler(["title-block"])}>
                    <div className={styler(["left"])}>
                        <h1>The Headline</h1>
                        <p>this is an awesome sub healine</p>
                    </div>
                    <div className={styler(["right"])}>
                        <button className={styler(["button", "button-primary"])}>funky button</button>
                    </div>
                </div>

                <div>
                    <div className={styler(["card"])}>
                        <div className={styler(["card-header"])}>
                            <h2>Article</h2>
                            <p>the subtitle</p>
                        </div>
                        <div className={styler(["card-body"])}>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                                duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                                vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
                                blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                laoreet dolore magna aliquam erat volutpat.</p>
                        </div>
                        <div className={styler(["card-footer"])}>
                            the funky card footer
                        </div>
                    </div>
                </div>
            </article>

        )
    }
}

export default Dashboard;