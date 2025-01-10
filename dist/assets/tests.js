'use strict';

define("ember-test-app/tests/helpers/index", ["exports", "ember-qunit"], function (_exports, _emberQunit) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setupApplicationTest = setupApplicationTest;
  _exports.setupRenderingTest = setupRenderingTest;
  _exports.setupTest = setupTest;
  0; //eaimeta@70e063a35619d71f0,"ember-qunit"eaimeta@70e063a35619d71f
  // This file exists to provide wrappers around ember-qunit's
  // test setup functions. This way, you can easily extend the setup that is
  // needed per test type.

  function setupApplicationTest(hooks, options) {
    (0, _emberQunit.setupApplicationTest)(hooks, options);

    // Additional setup for application tests can be done here.
    //
    // For example, if you need an authenticated session for each
    // application test, you could do:
    //
    // hooks.beforeEach(async function () {
    //   await authenticateSession(); // ember-simple-auth
    // });
    //
    // This is also a good place to call test setup functions coming
    // from other addons:
    //
    // setupIntl(hooks, 'en-us'); // ember-intl
    // setupMirage(hooks); // ember-cli-mirage
  }
  function setupRenderingTest(hooks, options) {
    (0, _emberQunit.setupRenderingTest)(hooks, options);

    // Additional setup for rendering tests can be done here.
  }
  function setupTest(hooks, options) {
    (0, _emberQunit.setupTest)(hooks, options);

    // Additional setup for unit tests can be done here.
  }
});
define("ember-test-app/tests/integration/components/calculator-test", ["qunit", "ember-test-app/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-test-app/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)("Integration | Component | calculator", function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)("it renders", async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Calculator />
      */
      {
        "id": "JHHIg2Hk",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"calculator\"]]",
        "moduleName": "/Users/provility/Documents/wokspace/ember-worlspace/practice-ember-js/ember-test-app/tests/integration/components/calculator-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText("");

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Calculator>
              template block text
            </Calculator>
          
      */
      {
        "id": "LSfKac3I",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"calculator\"]]",
        "moduleName": "/Users/provility/Documents/wokspace/ember-worlspace/practice-ember-js/ember-test-app/tests/integration/components/calculator-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText("template block text");
    });
  });
});
define("ember-test-app/tests/integration/components/error-dailog-test", ["qunit", "ember-test-app/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-test-app/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)("Integration | Component | error-dailog", function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)("it renders", async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ErrorDailog />
      */
      {
        "id": "b6gePU0O",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"error-dailog\"]]",
        "moduleName": "/Users/provility/Documents/wokspace/ember-worlspace/practice-ember-js/ember-test-app/tests/integration/components/error-dailog-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText("");

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <ErrorDailog>
              template block text
            </ErrorDailog>
          
      */
      {
        "id": "HwUZVHit",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"error-dailog\"]]",
        "moduleName": "/Users/provility/Documents/wokspace/ember-worlspace/practice-ember-js/ember-test-app/tests/integration/components/error-dailog-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText("template block text");
    });
  });
});
define("ember-test-app/tests/integration/helpers/substring-test", ["qunit", "ember-test-app/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-test-app/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)("Integration | Helper | substring", function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);

    // TODO: Replace this with your real tests.
    (0, _qunit.test)("it renders", async function (assert) {
      this.set("inputValue", "1234");
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        {{substring this.inputValue}}
      */
      {
        "id": "80cZ3g9H",
        "block": "[[[1,[28,[35,0],[[30,0,[\"inputValue\"]]],null]]],[],false,[\"substring\"]]",
        "moduleName": "/Users/provility/Documents/wokspace/ember-worlspace/practice-ember-js/ember-test-app/tests/integration/helpers/substring-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText("1234");
    });
  });
});
define("ember-test-app/tests/test-helper", ["ember-test-app/app", "ember-test-app/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-test-app/app",0,"ember-test-app/config/environment",0,"qunit",0,"@ember/test-helpers",0,"qunit-dom",0,"ember-qunit"eaimeta@70e063a35619d71f
  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define('ember-test-app/config/environment', [], function() {
  var prefix = 'ember-test-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-test-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
