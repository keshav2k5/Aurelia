export class App {
	configureRouter(config, router) {
		this.router = router;

		config.map([
			{
				route: "about",
				moduleId: "about",
				nav: true,
				title: "About"
			},
			{
				route: "github",
				moduleId: "github",
				nav: true,
				title: "github"
			}
		]);
	}
}
