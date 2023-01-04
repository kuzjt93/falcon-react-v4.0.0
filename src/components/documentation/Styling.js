import FalconComponentCard from 'components/common/FalconComponentCard';
import FalconEditor from 'components/common/FalconEditor';
import PageHeader from 'components/common/PageHeader';
import React from 'react';

const style = `
//*-----------------------------------------------
//|   Theme Colors
//-----------------------------------------------*/
$primary: $blue !default; 
$secondary: $gray-600 !default;
$success: $green !default;
$info: $cyan !default;
$warning: $yellow !default;
$danger: $red !default;
$light: $gray-100 !default;
$dark: $gray-1100 !default; `;

const cssVariables = `
/*-----------------------------------------------
|   Theme Styles
-----------------------------------------------*/
$success: #00d27a;
$danger: #e63757;
:root, :root.light, :root .light {
  --falcon-primary:  #{$success};
  --falcon-primary-rgb: #{to-rgb($success)};
   ...
   ...
   ...
}
.dark{
  --falcon-primary: #{$danger};
  --falcon-primary-rgb: #{to-rgb($danger)};
  .card{
    --falcon-card-bg: #{$success};
  }
}
`;

const darkStyle = `
/*-----------------------------------------------
|   Theme Styles
-----------------------------------------------*/
$theme-dark-colors: (
  'primary': $primary, //change hare
  'secondary': $secondary,
  'success': $success,
  'info': $info,
  'warning': $warning,
  'danger': $danger,
  'light': rgba(map-get($dark-grays, '200'), 0.25),
  'dark': $light,
) !default;

$dark-grays: (
  'black': $white,
  '100': $gray-1100,
  '200': $gray-1000,
  '300': $gray-900,
  '400': $gray-800,
  '500': $gray-700,
  '600': $gray-600,
  '700': $gray-500,
  '800': $gray-400,
  '900': $gray-300,
  '1000': $gray-200,
  '1100': $gray-100,
  'white': $black,
) !default;
`;

const Styling = () => (
  <>
    <PageHeader title="Styling" className="mb-3">
      <p className="mt-2 mb-0">
        We recommend you customize your theme styles using the user style files.
        You can customize the theme’s styles with the following approaches:
      </p>
    </PageHeader>

    <FalconComponentCard>
      <FalconComponentCard.Header title="Edit SCSS" light={false} noPreview />
      <FalconComponentCard.Body>
        <p>
          You can add your own SCSS and override the theme style in the{' '}
          <code>_user.scss</code> file.
        </p>
        <p>
          To make broader changes to the design of the theme, such as changing
          the color scheme or font sizes, use{' '}
          <code>src/assets/scss/_user-variables.scss</code>. Any variable from{' '}
          <code>node_modules/bootstrap/scss/_variables.scss</code> or{' '}
          <code>src/assets/scss/theme/_variables.scss</code> can be overridden
          with your own value.
        </p>
        <h6 className="fs-0">Using Scss variable:</h6>
        <div className="border rounded-1 bg-white px-3 py-2 mb-3">
          <code>_user-variables.scss</code>
        </div>
        <p>
          You can bring your necessary variable colors form{' '}
          <code>src/scss/theme/_colors.scss </code> and paste it into{' '}
          <code> src/scss/_user-variables.scss </code> then update variables as
          your necessity. We recommend to follow this approach.
        </p>
        <p>
          Light mode is default theme style in Falcon. So, if you update any
          bootstrap’s SCSS variables, it will effect in Light mode. If you want
          to update any color, find the corresponding variable for thise color
          and place theme to _user-variables.scss file. For example:
        </p>
        <FalconEditor code={style} language="scss" hidePreview />

        <p className="mt-3">
          if you want to update any theme colors for dark mode, update
          <code> $theme-dark-colors </code>
          variable and to update the grays colors you have to update the
          <code> $dark-grays </code>
          variable.
        </p>
        <FalconEditor code={darkStyle} language="scss" hidePreview />
        <h6 className="fs-0 mt-3">Using CSS variable:</h6>
        <div className="border rounded-1 bg-white px-3 py-2 mb-3">
          <code>_user.scss</code>
        </div>
        <p>
          To update theme color with this approach, you have to update CSS
          variable for both modes. If you change any color you have to assign
          it's corresponding RGB color too. Please note sometimes you may need
          to update corresponding component's CSS variable. For example:
        </p>

        <FalconEditor code={cssVariables} language="scss" hidePreview />
      </FalconComponentCard.Body>
    </FalconComponentCard>

    <FalconComponentCard>
      <FalconComponentCard.Header
        title="Compiling SCSS"
        light={false}
        noPreview
      />
      <FalconComponentCard.Body>
        <p>
          Run <code>npm run build:css</code> command in your project directory
          to compile scss. This will compile all the SCSS files from{' '}
          <code>src/assets/scss/</code> directory and generate{' '}
          <code> theme.min.css </code>,<code> theme-rtl.min.css </code>,{' '}
          <code> user.min.css </code> <code> user-rtl.min.css </code>files in{' '}
          <code>public/css/</code> directory. Reload your browser to see the
          changes.
        </p>
        <p>
          <strong>
            You can also use the SCSS watcher to automatically compile and
            reload your browser every time you save your SCSS files by running
            the command
          </strong>
          <code> npm run watch:css </code>
          <strong> in a separate terminal window while running</strong>{' '}
          <code>npm start</code> <strong> in another.</strong>
        </p>
      </FalconComponentCard.Body>
    </FalconComponentCard>
  </>
);

export default Styling;
