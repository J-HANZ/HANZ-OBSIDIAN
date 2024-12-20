import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
	const {siteConfig} = useDocusaurusContext();
	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className="container">
				<h1 className="hero__title">{siteConfig.title}</h1>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
			</div>
		</header>
	);
}

function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					<h2>Ta repozitorij vsebuje teste in digitalizirane zapiske pouka na Vegovi&reg; Ljubljana, združene v eno bazo znanja.</h2>
					<h4>Zapiski so pogosto prepisani od drugih avtorjev in so basically cheatcodes za narest Vegovo&reg;. Če želiš prispevati, si poglej <a href="https://github.com/LovroG05/znanje">GitHub repository</a> kjer so shranjeni zapiski v markdown formatu.</h4>
				</div>
			</div>
		</section>
	);
}

export default function Home() {
	const {siteConfig} = useDocusaurusContext();
	return (
		<Layout
			title={`${siteConfig.title}`}
			description="Ta repozitorij vsebuje teste in digitalizirane zapiske pouka na Vegovi&reg; Ljubljana, združene v eno bazo znanja.">
			<HomepageHeader />
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
