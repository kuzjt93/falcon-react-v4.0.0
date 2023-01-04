export default [
  {
    version: '4.0.0',
    title: 'Laggar falcon',
    publish: '22 December, 2022',
    warning: {
      title: 'Major update!',
      text: 'We have updated React version to 18 and multiple packages in this version listed below. To learn more about upgrading to react 18',
      link: 'https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html'
    },
    logs: {
      New: [
        'Plugin : <code> webpack </code>',
        'Plugin : <code> @emoji-mart/react </code>'
      ],
      Update: [
        '<code>React to 18.2.0 </code>',
        '<code>react-dom to 18.2.0 </code>',
        '<code>react-scripts to 5.0.1 </code>',
        '<code>@fullcalendar/bootstrap to 5.11.3 </code>',
        '<code>@fullcalendar/daygrid to 5.11.3 </code>',
        '<code>@fullcalendar/interaction to 5.11.3 </code>',
        '<code>@fullcalendar/list to 5.11.3 </code>',
        '<code>@fullcalendar/react to 5.11.3 </code>',
        '<code>@fullcalendar/timegrid to 5.11.3 </code>',
        '<code>@react-leaflet/core to 2.1.0 </code>',
        '<code>@tinymce/tinymce-react to 4.2.0 </code>',
        '<code>leaflet to 1.9.3 </code>',
        '<code>react-leaflet to 4.2.0 </code>',
        '<code>react-leaflet-markercluster to @changey/react-leaflet-markercluster</code>',
        '<code>google-map-react to @react-google-maps/api</code>',
        '<code>chart.js to 4.0.1 </code>',
        '<code>emoji-mart to 5.3.3 </code>',
        '<code>react-beautiful-dnd to 13.1.1 </code>',
        '<code>react-image-lightbox to react-18-image-lightbox </code>',
        '<code>react-chartjs-2 to 5.0.1 </code>',
        '<code>react-datepicker to 4.8.0 </code>',
        '<code>react-hook-form to 7.40.0 </code>',
        '<code>react-select to 5.7.0 </code>',
        '<code>react-simple-typewriter to 5.0.1 </code>',
        '<code>react-slick to 0.29.0 </code>',
        '<code>react-table to 7.8.0 </code>',
        '<code>react-textarea-autosize to 8.4.0 </code>'
      ],
      Fix: ['Minor bugs.']
    }
  },
  {
    version: '3.9.0',
    title: 'Black falcon',
    publish: '22 December, 2022',
    logs: {
      New: [
        'Dashboard : <code> dashboard/support-desk</code>',
        'Page : <code> support-desk/table-view</code>',
        'Page : <code> support-desk/card-view</code>',
        'Page : <code> support-desk/contacts</code>',
        'Page : <code> support-desk/contact-details</code>',
        'Page : <code> support-desk/tickets-preview</code>',
        'Page : <code> support-desk/quick-links</code>',
        'Page : <code> support-desk/reports</code>',
        'SCSS : <code> src/assets/scss/theme/_support-desk.scss </code>',
        'SCSS : <code> src/assets/scss/theme/_progress.scss </code>'
      ],
      Update: ['Padding updated p-card to p-x1'],
      Migration: {
        Add: [
          '<code>src/components/dashboards/support-desk/**/*</code>',
          '<code>src/components/app/support-desk/**/*</code>',
          '<code>src/assets/scss/theme/_support-desk.scss</code>',
          '<code>src/assets/scss/theme/_progress.scss</code>',
          '<code>src/data/dashboard/support-desk.js</code>',
          '<code>src/data/support-desk/contactsData.js',
          '<code>src/data/support-desk/contactDetailsData.js',
          '<code>src/data/support-desk/ticketsPreviewData.js',
          '<code>src/data/support-desk/quickLinksData.js',
          '<code>src/data/support-desk/reportsData.js'
        ]
      }
    }
  },
  {
    version: '3.8.0',
    title: 'Gyrfalcon',
    publish: '29 Novembar, 2022',
    logs: {
      New: [
        'Navbar : <code> Double-top </code>',
        'Dashboard : <code> dashboard/lms </code>',
        'Page : <code> e-learning/course/course-list </code>',
        'Page : <code> e-learning/course/course-grid </code>',
        'Page : <code> e-learning/course/course-details </code>',
        'Page : <code> e-learning/course/create-a-course </code>',
        'Page : <code> e-learning/student-overview </code>',
        'Page : <code> e-learning/trainer-profile </code>',
        'Doc : <code> charts/d3js </code>',
        'SCSS : <code> src/assets/scss/theme/_e-learning.scss </code>',
        'SCSS : <code> src/assets/scss/theme/_bottom-bar.scss </code>',
        'SCSS : <code> src/assets/scss/theme/_focus.scss </code>',
        'SCSS : <code> src/assets/scss/theme/_collapse.scss </code>',
        'SCSS : <code> src/assets/scss/theme/_double-top-nav-layout.scss </code>',
        'Plugin : <code> D3.js </code>'
      ],
      Update: [
        'Bootstrap to <code> 5.2.2 </code>',
        'React Bootstrap to <code> 2.6.0 </code>'
      ],
      Fix: ['Minor bugs.'],
      Migration: {
        Add: [
          '<code>src/components/dashboards/lms/**/*</code>',
          '<code>src/components/app/e-learning/**/*</code>',

          '<code>src/assets/scss/theme/_e-learning.scss</code>',
          '<code>src/assets/scss/theme/_bottom-bar.scss</code>',
          '<code>src/assets/scss/theme/_focus.scss</code>',
          '<code>src/assets/scss/theme/_collapse.scss</code>',
          '<code> src/assets/scss/theme/_double-top-nav-layout.scss </code>',

          '<code>src/hooks/useCourses.js</code>',
          '<code>src/hooks/useVisibilityObserver.js</code>',

          '<code>src/data/elearning/courseData.js</code>',
          '<code>src/data/elearning/courseDetails.js</code>',
          '<code>src/data/elearning/createCourse.js</code>',
          '<code>src/data/elearning/studentOverview.js</code>'
        ],
        Update: [
          '<code>src/context/Context.js</code>',
          '<code>package.json</code>'
        ]
      }
    }
  },
  {
    version: '3.7.1',
    title: 'Bat falcon',
    publish: '16 Septembor, 2022',
    logs: {
      Fix: ['process env issue'],
      Migration: {}
    }
  },
  {
    version: '3.7.0',
    title: 'Prairie falcon',
    publish: '11 Septembor, 2022',
    logs: {
      New: ['SCSS: to <code>src/scss/theme/_maps.scss</code>'],
      Update: [
        'Bootstrap to <code> 5.2.0 </code>',
        'All SCSS files',
        'CSS variables for gray',
        '<code>bg-{color}</code> classes replaced with <code>text-{color}</code> in <code>hr</code>',
        "JS: <code>getColor('{100/200/300}')</code> changed with <code>getColor('{gray-100/gray-200/gray-300}') </code>",
        'Doc: <a href="/utilities/borders">Border styles updated</a>',
        'Doc: <a href="/documentation/styling">Styling</a>',
        'Plugin: Replaced <code>react-type-animation</code> with <code>react-simple-typewriter</code>'
      ],

      Migration: {
        Update: [
          '<code>src/components/doc-components/Tables.js</code>',
          '<code>src/components/dashboards/crm/LocationBySession/LocationBySession.js</code>',
          '<code>src/components/dashboards/default/SharedFiles.js</code>',
          '<code>src/components/dashboards/default/MarketShare.js</code>',
          '<code>src/components/dashboards/default/RunningProjects.js</code>',
          '<code>src/components/dashboards/default/StorageStatus.js</code>',
          '<code>src/components/navbar/vertical/PurchaseCard.js</code>',
          '<code>src/components/pages/landing/Cta.js</code>',
          '<code>src/components/app/e-commerce/Invoice.js</code>',
          '<code>src/components/app/chat/content/MessageTextArea.js</code>',
          '<code>src/components/pages/landing/Hero.js</code>',
          '<code>src/components/dashboards/crm/recent-leads/RecentLeads.js</code>'
        ]
      }
    }
  },
  {
    version: '3.6.0',
    title: 'Aplomado falcon',
    publish: '04 August, 2022',
    logs: {
      Update: [
        'Plugin: Replaced <code>google-maps-react</code> with <code>google-map-react</code>',
        'Plugin: Replaced <code>react-lottie</code> with <code>lottie-react</code>',
        'Plugin: Replaced <code>react-typed</code> with <code>react-type-animation</code>'
      ],
      Fix: ['Npm peer dependencies issues', 'User styles issue'],

      Migration: {
        Update: [
          '<code>src/components/app/events/event-detail/EventDetailsGmap.js</code>',
          '<code>src/components/doc-components/GoogleMapExample.js</code>',
          '<code>src/components/map/GoogleMap.js</code>',
          '<code>src/hooks/useToggleStyle.js</code>',
          '<code>src/assets/scss/theme.scss</code>',
          '<code>src/components/doc-components/AnimatedIcons.js</code>',
          '<code>src/components/wizard/Success.js</code>',
          '<code>src/components/wizard/WizardModal.js</code>'
        ]
      }
    }
  },
  {
    version: '3.5.1',
    title: 'Barbary falcon',
    publish: '06 july, 2022',
    logs: {
      Update: ['React bootstrap version to <code>v2.4.0</code>'],
      Fix: ['Tinymce border color issue in RTL'],

      Migration: {
        Update: [
          '<code>src/components/authentication/LoginForm.js</code>',
          '<code>src/assets/scss/theme/plugins/_react-select.scss</code>',
          '<code>src/assets/scss/theme/plugins/_tinymce.scss</code>',
          '<code>src/assets/scss/theme/plugins/_react-datepicker.scss</code>'
        ]
      }
    }
  },
  {
    version: '3.5.0',
    title: 'Lesser falcon',
    publish: '12 May, 2022',
    logs: {
      Update: ['React bootstrap version to <code>v2.3.1</code>'],
      Fix: ['Vertical navbar card style in dark mode', 'Dropdown caret issue'],

      Migration: {
        Update: [
          '<code>src/components/pages/landing/LandingRightSideNavItem.js</code>',
          '<code>src/components/navbar/top/ProfileDropdown.js</code>',
          '<code>src/components/navbar/top/NotificationDropdown.js</code>',
          '<code>src/components/navbar/top/NineDotMenu.js</code>',
          '<code>src/components/navbar/top/NavbarDropdown.js</code>',
          '<code>src/components/doc-components/Pagination.js</code>',
          '<code>src/components/app/kanban/TaskCard.js</code>',
          '<code>src/components/dashboards/project-management/project-statistics/ProjectTable.js</code>',
          '<code>src/assets/scss/theme/root/_dark.scss</code>',
          '<code>src/assets/scss/theme/root/_light.scss</code>',
          '<code>src/assets/scss/theme/_navbar-top.scss</code>',
          '<code>src/assets/scss/theme/_navbar.scss</code>',
          '<code>src/assets/scss/theme/_variables.scss</code>'
        ]
      }
    }
  },
  {
    version: '3.4.0',
    title: 'Peregrine falcon',
    publish: '21 March, 2022',
    logs: {
      New: ['Reset button on setting panel', 'Page: Faq in Documentation'],
      Update: [
        'React bootstrap version to <code>v2.2.1</code>',
        'Plugin: <code>react-hook-form</code>'
      ],
      Fix: ['React select issue', 'Color opacity issue'],

      Migration: {
        New: ['<code>src/components/documentation/Faq.js</code>'],
        Update: [
          '<code>src/components/settings-panel/SettingsPanel.js</code>',
          '<code>src/helpers/initFA.js</code>',
          '<code>src/hooks/useToggleStyle.js</code>',
          '<code>src/reducers/configReducer.js</code>',
          '<code>src/Main.js</code>',
          '<code>src/layouts/Layout.js</code>',
          '<code>src/reducers/configReducer.js</code>',
          '<code>src/routes/routes.js</code>',
          '<code>src/components/app/events/create-an-event/CreateEvent.js</code>',
          '<code>src/components/app/events/create-an-event/EventDetails.js</code>',
          '<code>src/components/app/events/create-an-event/EventOtherInfo.js</code>',
          '<code>src/components/pages/faq/faq-accordion/FaqAccordionItem.js</code>',
          '<code>src/components/dashboards/crm/CrmStats.js</code>',
          '<code>src/components/dashboards/crm/ToDoList.js</code>',
          '<code>src/data/faqs.js</code>',
          '<code>src/config.js</code>',
          '<code>src/assets/scss/theme/root/_dark.scss</code>',
          '<code>src/assets/scss/theme/root/_light.scss</code>',
          '<code>src/assets/scss/theme/root/_override.scss</code>',
          '<code>src/assets/scss/theme/_colors.scss</code>',
          '<code>src/assets/scss/theme/_functions.scss</code>',
          '<code>src/assets/scss/theme/_mixins.scss</code>',
          '<code>src/assets/scss/theme/_utilities.scss</code>',
          '<code>src/assets/scss/theme/_variables.scss</code>',
          '<code>src/assets/scss/theme/plugins/_react-select.scss</code>',

          '<code>package.json</code>'
        ],
        Delete: ['<code>src/assets/scss/theme/mixins/_utilities.scss</code>']
      }
    }
  },
  {
    version: '3.3.0',
    title: 'Bateleur falcon',
    badgeTitle: '!! Breaking Change !!',
    publish: '17 February, 2022',
    logs: {
      Update: [
        "React router dom v5 to v6. </br> <span class='text-danger'> This is a breaking change. </br></span> Please view the official guide  <a target=`_blank` href='https://reactrouter.com/docs/en/v6/upgrading/v5'> migrating react-router-dom v5 to v6 here</a> for more details.",
        'Plugin: <code>React toastify</code>',
        'Plugin: <code>Fullcalendar</code>'
      ],
      Fix: [
        'Toastify issue',
        'Fullcalendar issue',
        'Doc: Broken links',
        'Minor bugs'
      ],

      Migration: {
        Update: [
          '<code>src/components/app/e-commerce/product/product-details/ProductDetails.js</code>',
          '<code>src/components/app/email/email-detail/EmailDetailHeader.js</code>',
          '<code>src/components/authentication/modal/ModalAuth.js</code>',
          '<code>src/layouts/Layout.js</code>',
          '<code>src/layouts/MainLayout.js</code>',
          '<code>src/layouts/ErrorLayout.js</code>',
          '<code>src/components/navbar/vertical/NavbarVerticalMenu.js</code>',
          '<code>src/components/app/kanban/KanbanProvider.js</code>',
          '<code>src/components/app/social/feed/AddToFeed.js</code>',
          '<code>src/components/app/social/feed/Comments.js</code>',
          '<code>src/components/app/social/feed/Feed.js</code>',
          '<code>src/components/app/social/feed/FeedCardHeader.js</code>',
          '<code>src/components/dashboards/crm/ToDoList.js</code>',
          '<code>src/components/doc-components/Cards.js</code>',
          '<code>src/components/navbar/top/NineDotMenu.js</code>',
          '<code>src/components/navbar/top/ProfileDropdown.js</code>',
          '<code>src/data/autocomplete/autocomplete.js</code>',
          '<code>src/data/people.js</code>',
          '<code>src/widgets/OthersWidgets.js</code>',
          '<code>src/components/dashboards/crm/index.js</code>',
          '<code>src/components/dashboards/e-commerce/index.js</code>',
          '<code>src/components/dashboards/project-management/index.js</code>',
          '<code>src/components/dashboards/saas/index.js</code>',
          '<code>src/components/app/e-commerce/product/Products.js</code>',
          '<code>src/components/dashboards/project-management/ToDoList.js</code>',
          '<code>src/components/navbar/top/NotificationDropdown.js</code>',
          '<code>src/data/notification/notification.js</code>',
          '<code>src/components/app/email/inbox/InboxRow.js</code>',
          '<code>src/components/authentication/ForgetPasswordForm.js</code>',
          '<code>src/components/authentication/LockScreenForm.js</code>',
          '<code>src/components/authentication/LoginForm.js</code>',
          '<code>src/components/authentication/PasswordResetForm.js</code>',
          '<code>src/components/authentication/RegistrationForm.js</code>',
          '<code>src/data/calendar/events.js</code>',
          '<code>src/components/app/kanban/ModalAttachmentContent.js</code>',
          '<code>src/components/doc-components/Checks.js</code>',
          '<code>src/components/doc-components/FormControl.js</code>',
          '<code>src/components/doc-components/FormLayout.js</code>',
          '<code>src/components/doc-components/InputGroup.js</code>',
          '<code>src/components/doc-components/Range.js</code>',
          '<code>src/components/doc-components/Select.js</code>',
          '<code>src/components/doc-components/FloatingLabels.js</code>',
          '<code>src/components/doc-components/FormValidation.js</code>',
          '<code>src/components/doc-components/Scrollspy.js</code>',

          '<code>src/assets/scss/theme/plugins/_full-calendar.scss</code>',
          '<code>src/assets/scss/theme/helpers/_borders.scss</code>',
          '<code>src/assets/scss/theme/_radio-select.scss</code>',

          '<code>package.json</code>'
        ],
        Delete: [
          '<code>src/layouts/MainRoutes.js</code>',
          '<code>src/components/pages/ComingSoon.js</code>',
          '<code>src/components/authentication/card/AuthCardRoutes.js</code>',
          '<code>src/components/authentication/split/AuthSplitRoutes.js</code>',
          '<code>src/components/authentication/simple/AuthSimpleRoutes.js</code>'
        ]
      }
    }
  },
  {
    version: '3.2.0',
    title: 'Oriental hobby',
    publish: '31 January, 2022',
    logs: {
      New: [
        'Timeline component',
        'Add custom field form in create an event page'
      ],
      Fix: ['Other minor bugs'],

      Migration: {
        Add: [
          '<code>src/components/doc-components/Timeline.js</code>',
          '<code>src/assets/scss/theme/_timeline.scss</code>'
        ],

        Update: [
          '<code>src/components/navbar/top/NineDotMenu.js</code>',
          '<code>src/components/app/events/create-an-event/CreateEvent.js</code>',
          '<code>src/components/app/events/create-an-event/EventUpload.js</code>',
          '<code>src/components/app/events/create-an-event/EventOtherInfo.js</code>',
          '<code>src/components/app/events/create-an-event/EventScheduleItem.js</code>',
          '<code>src/components/app/events/create-an-event/EventCustomField.js</code>',
          '<code>src/components/app/events/create-an-event/EventCustomFieldItem.js</code>',
          '<code>src/components/navbar/top/ProfileDropdown.js</code>',
          '<code>src/helpers/initFA.js</code>',
          '<code>src/layouts/MainRoutes.js</code>',
          '<code>src/routes/routes.js</code>',
          '<code>src/helpers/utils.js</code>',
          '<code>src/assets/scss/theme/_navbar.scss</code>',

          '<code>package.json</code>'
        ]
      }
    }
  },
  {
    version: '3.1.0',
    title: 'Nankeen kestrel',
    publish: '27 December, 2021',
    logs: {
      New: ['Component: 9 dot menu on top navbar'],
      Update: ['React-Bootstrap to v2.0.4', 'Other minor bugs'],

      Migration: {
        Add: ['<code>src/components/navbar/topNineDotMenu.js</code>'],
        Update: [
          '<code>src/assets/scss/theme/_navbar.scss</code>',
          '<code>src/assets/scss/theme/_navbar-top.scss</code>',
          '<code>src/components/navbar/top/ProfileDropdown.js</code>',
          '<code>src/components/navbar/top/TopNavRightSideNavItem.js</code>',
          '<code>src/components/navbar/top/NotificationDropdown.js</code>',
          '<code>src/components/navbar/top/CartNotification.js</code>',
          '<code>src/components/navbar/top/NavbarTopDropDownMenus.js</code>',
          '<code>src/components/navbar/top/NavbarNavLink.js</code>',
          '<code>src/components/notification/Notification.js</code>',
          '<code>src/components/navbar/vertical/ToggleButton.js</code>',
          '<code>src/components/navbar/top/ProfileDropdown.js</code>',
          '<code>package.json</code>'
        ]
      }
    }
  },
  {
    version: '3.0.0',
    title: 'Amur',
    publish: '4 December, 2021',
    logs: {
      New: [
        'Page : <code> Kanban </code>',
        'Page : <code> Widgets </code>',
        'Doc : <code> Chartjs </code>',
        'Doc : <code> Line charts </code>',
        'Doc : <code> Bar charts </code>',
        'Doc : <code> Candlestick charts </code>',
        'Doc : <code> Geo map </code>',
        'Doc : <code> Scatter charts </code>',
        'Doc : <code> Pie charts </code>',
        'Doc : <code> Radar charts </code>',
        'Doc : <code> Heatmap charts </code>',
        'Doc : <code> How to use </code>',
        'Doc : <code> Google map </code>',
        'Doc : <code> Leaflet map </code>',
        'Doc : <code> Calendar </code>',
        'Doc : <code> Cookie notice </code>',
        'Doc : <code> Countup </code>',
        'Doc : <code> Draggable </code>',
        'Doc : <code> Emoji button </code>',
        'Doc : <code> React player </code>',
        'Doc : <code> React icons </code>',
        'Doc : <code> Scroll Bar </code>',
        'Doc : <code> Scrollspy </code>',
        'Doc : <code> Treeview </code>',
        'Component : <code> Treeview </code>',
        'Component : <code> CookieNotice </code>',
        'Plugin : <code>react-beautiful-dnd</code>',
        'Plugin : <code>react-icons</code>',
        'Plugin : <code>react-use-scrollspy</code>'
      ],
      Update: [
        'React-Bootstrap to v2.0.3',
        'Plugin : <strong>Removed</strong> <code>react-scrollspy</code>',
        'Plugin : <strong>Removed</strong> <code>video.js</code>',
        'Component : <strong>Removed</strong> <code>FalconVideoJS</code>',
        'Doc : Renamed bootstrap-components directory to docs-components'
      ],

      Migration: {
        Add: [
          '<code>src/components/app/kanban/**/*</code>',
          '<code>src/components/doc-components/charts-example/**/*</code>',
          '<code>src/widgets/**/*</code>',
          '<code>src/data/kanban.js</code>',
          '<code>src/helpers/chartjs-utils.js</code>',
          '<code>src/reducers/kanbanReducer.js</code>',
          '<code>src/components/common/CookieNotice.js</code>',
          '<code>src/components/common/Treeview.js</code>',
          '<code>src/components/doc-components/TreeviewExample.js</code>',
          '<code>src/components/doc-components/GoogleMapExample.js</code>',
          '<code>src/components/doc-components/LeafletMapExample.js</code>',
          '<code>src/components/doc-components/EmojiMart.js</code>',
          '<code>src/components/doc-components/DraggableExample.js</code>',
          '<code>src/components/doc-components/CalendarExample.js</code>',
          '<code>src/components/doc-components/CookieNoticeExample.js</code>',
          '<code>src/components/doc-components/CountUp.js</code>',
          '<code>src/components/doc-components/ReactIcons.js</code>',
          '<code>src/components/doc-components/ReactPlayerExample.js</code>',
          '<code>src/components/doc-components/Scrollbar.js</code>',
          '<code>src/components/doc-components/Scrollspy.js</code>',
          '<code>src/components/doc-components/DraggableExample.js</code>',
          '<code>src/assets/json/usa.json</code>',
          '<code>src/assets/scss/theme/_treeview.scss</code>'
        ],
        Update: [
          '<code>src/assets/scss/theme/_dropdown.scss</code>',
          '<code>src/assets/scss/theme/_kanban.scss</code>',
          '<code>src/assets/scss/theme/_mixed.scss</code>',
          '<code>src/assets/scss/theme/_theme.scss</code>',
          '<code>src/assets/scss/theme/_variables.scss</code>',
          '<code>src/assets/scss/theme/plugins/_full-calendar.scss</code>',
          '<code>src/components/app/e-commerce/ProductProvider.js</code>',
          '<code>src/components/app/e-commerce/QuantityController.js</code>',
          '<code>src/components/app/e-commerce/billing/Billing.js</code>',
          '<code>src/components/app/e-commerce/billing/BillingHeader.js</code>',
          '<code>src/components/app/e-commerce/checkout/Checkout.js</code>',
          '<code>src/components/app/e-commerce/checkout/OrderSummary.js</code>',
          '<code>src/components/app/events/event-detail/EventDetailsGmap.js</code>',
          '<code>src/components/app/social/feed/CreatePost.js</code>',
          '<code>src/components/app/social/feed/FeedCard.js</code>',
          '<code>src/components/app/social/feed/FeedContent.js</code>',
          '<code>src/components/common/FalconLink.js</code>',
          '<code>src/components/dashboards/analytics/active-users/ActiveUsers.js</code>',
          '<code>src/components/dashboards/analytics/audience/Audience.js</code>',
          '<code>src/components/dashboards/analytics/bounce-rate/BounceRate.js</code>',
          '<code>src/components/dashboards/analytics/index.js</code>',
          '<code>src/components/dashboards/analytics/top-pages/TopPages.js</code>',
          '<code>src/components/dashboards/default/ActiveUsers.js</code>',
          '<code>src/components/dashboards/default/BandwidthSaved.js</code>',
          '<code>src/components/dashboards/default/index.js</code>',
          '<code>src/components/dashboards/e-commerce/ProductShare/ProductShareChart.js</code>',
          '<code>src/components/dashboards/e-commerce/SalesPosLocation/SalesPosLocation.js</code>',
          '<code>src/components/dashboards/saas/DoMoreCard.js</code>',
          '<code>src/components/dashboards/saas/candle-chart/CandleChart.js</code>',
          '<code>src/components/dashboards/crm/ToDoList.js</code>',
          '<code>src/components/documentation/DarkMode.js</code>',
          '<code>src/components/navbar/top/NavbarTop.js</code>',
          '<code>src/components/navbar/vertical/NavbarVertical.js</code>',
          '<code>src/components/navbar/vertical/ToggleButton.js</code>',
          '<code>src/components/pages/asscociations/Associations.js</code>',
          '<code>src/components/pages/miscellaneous/privacy-policy/Account.js</code>',
          '<code>src/components/pages/miscellaneous/privacy-policy/Instructions.js</code>',
          '<code>src/components/pages/miscellaneous/privacy-policy/Liability.js</code>',
          '<code>src/components/pages/miscellaneous/privacy-policy/PrivacyPolicy.js</code>',
          '<code>src/components/pages/miscellaneous/privacy-policy/Rights.js</code>',
          '<code>src/components/pages/miscellaneous/privacy-policy/Rules.js</code>',
          '<code>src/components/pages/miscellaneous/privacy-policy/Subscription.js</code>',
          '<code>src/components/pages/miscellaneous/privacy-policy/Termination.js</code>',
          '<code>src/components/pages/user/profile/ActivityLog.js</code>',
          '<code>src/components/pages/user/profile/Events.js</code>',
          '<code>src/components/pages/user/profile/Followers.js</code>',
          '<code>src/components/pages/user/profile/Profile.js</code>',
          '<code>src/components/pages/user/settings/ExperienceForm.js</code>',
          '<code>src/components/pages/user/settings/ExperiencesSettings.js</code>',
          '<code>src/components/wizard/PersonalForm.js</code>',
          '<code>src/helpers/echart-utils.js</code>',
          '<code>src/helpers/initFA.js</code>',
          '<code>src/helpers/utils.js</code>',
          '<code>src/layouts/MainLayout.js</code>',
          '<code>src/layouts/MainRoutes.js</code>',
          '<code>src/routes/routes.js</code>',
          '<code>package.json</code>'
        ],
        Delete: ['<code>src/components/common/FalconVideoJS.js</code>']
      }
    }
  },
  {
    version: '3.0.0-beta2',
    title: 'Saker',
    publish: '17 November, 2021',
    logs: {
      New: [
        'Page : <code> E Commerce </code>',
        'Page : <code> Mangement </code>',
        'Page : <code> SaaS </code>',
        'Page : <code> Chat </code>',
        'Component : <code> AdvanceTable </code>',
        'Plugin : <code>react-textarea-autosize</code>',
        'Plugin : <code>react-leaflet</code>',
        'Plugin : <code>emoji-mart</code>',
        'Plugin : <code>react-chartjs-2</code>',
        'Plugin : <code>react-countup</code>'
      ],
      Update: [
        'Doc : Rename <code>src/components/bootstrap-components/AdvanceTable.js</code> to <code>src/components/bootstrap-components/AdvanceTableExamples.js</code>'
      ],

      Migration: {
        Add: [
          '<code>src/components/app/chat/**/*</code>',
          '<code>src/components/dashboards/e-commerce/**/*</code>',
          '<code>src/components/dashboards/project-management/**/*</code>',
          '<code>src/components/dashboards/saas/**/*</code>',
          '<code>src/data/chat/**/*</code>',
          '<code>src/data/dashboard/ecom.js</code>',
          '<code>src/data/dashboard/projectManagement.js</code>',
          '<code>src/data/dashboard/saas.js</code>',
          '<code>src/components/common/advance-table/AdvanceTable.js</code>',
          '<code>src/assets/scss/theme/plugins/_leaflet.scss</code>',
          '<code>src/assets/scss/theme/plugins/_emoji-mart.scss</code>'
        ],
        Update: [
          '<code>src/App.js</code>',
          '<code>src/config.js</code>',
          '<code>src/routes/routes.js</code>',
          '<code>src/layouts/MainRoutes.js</code>',
          '<code>src/helpers/utils.js</code>',
          '<code>src/helpers/initFA.js</code>',
          '<code>src/components/app/calendar/AddScheduleModal.js</code>',
          '<code>src/components/app/calendar/Calendar.js</code>',
          '<code>src/components/app/calendar/CalendarEventModal.js</code>',
          '<code>src/components/app/e-commerce/customers/Customers.js</code>',
          '<code>src/components/app/e-commerce/customers/CustomersTableHeader.js</code>',
          '<code>src/components/app/e-commerce/orders/order-list/Orders.js</code>',
          '<code>src/components/app/e-commerce/orders/order-list/OrdersTableHeader.js</code>',
          '<code>src/components/app/social/feed/FeedEvent.js</code>',
          '<code>src/components/common/Avatar.js</code>',
          '<code>src/components/common/BasicEChart.js</code>',
          '<code>src/components/common/CardDropdown.js</code>',
          '<code>src/components/common/FalconLink.js</code>',
          '<code>src/components/common/advance-table/AdvanceTableFooter.js</code>',
          '<code>src/components/common/advance-table/AdvanceTablePagination.js</code>',
          '<code>src/components/common/advance-table/AdvanceTableSearchBox.js</code>',
          '<code>src/components/common/advance-table/AdvanceTableWrapper.js</code>',
          '<code>src/components/dashboards/analytics/Intelligence.js</code>',
          '<code>src/components/dashboards/analytics/audience/Audience.js</code>',
          '<code>src/components/dashboards/analytics/bounce-rate/BounceRate.js</code>',
          '<code>src/components/dashboards/analytics/campaign-perfomance/CampaignPerfomance.js</code>',
          '<code>src/components/dashboards/analytics/session-by-browser/SessionByBrowser.js</code>',
          '<code>src/components/dashboards/analytics/top-pages/TopPages.js</code>',
          '<code>src/components/dashboards/analytics/traffic-source/TrafficSource.js</code>',
          '<code>src/components/dashboards/analytics/users-at-a-time/UsersAtTime.js</code>',
          '<code>src/components/dashboards/analytics/users-by-country/UsersByCountry.js</code>',
          '<code>src/components/dashboards/crm/LocationBySession/LocationBySession.js</code>',
          '<code>src/components/dashboards/crm/LocationBySession/LocationBySessionTable.js</code>',
          '<code>src/components/dashboards/crm/lead-conversation/LeadConversationChart.js</code>',
          '<code>src/components/dashboards/crm/recent-leads/RecentLeads.js</code>',
          '<code>src/components/dashboards/default/ActiveUsers.js</code>',
          '<code>src/components/dashboards/default/BandwidthSaved.js</code>',
          '<code>src/components/dashboards/default/MarketShare.js</code>',
          '<code>src/components/dashboards/default/SharedFiles.js</code>',
          '<code>src/components/dashboards/default/TopProducts.js</code>',
          '<code>src/components/dashboards/default/TotalOrder.js</code>',
          '<code>src/components/dashboards/default/WeeklySales.js</code>',
          '<code>src/components/dashboards/default/index.js</code>',
          '<code>src/components/documentation/Plugins.js</code>',
          '<code>src/data/common.js</code>',
          '<code>src/data/dashboard/analytics.js</code>',
          '<code>src/data/dashboard/default.js</code>',
          '<code>src/assets/scss/theme/_accordion.scss</code>',
          '<code>src/assets/scss/theme/_chat.scss</code>',
          '<code>src/assets/scss/theme/_forms.scss</code>',
          '<code>src/assets/scss/theme/_plugins.scss</code>',
          '<code>src/assets/scss/theme/_timeline.scss</code>',
          '<code>src/assets/scss/theme/plugins/_full-calendar.scss</code>'
        ],
        Delete: [
          '<code>src/components/dashboards/analytics/top-pages/TopPagesSearchBox.js</code>',
          '<code>src/components/dashboards/analytics/top-pages/TopPagesTable.js</code>',
          '<code>src/components/dashboards/crm/recent-leads/RecentLeadsTable.js</code>'
        ]
      }
    }
  },
  {
    version: '3.0.0-beta1',
    title: 'Merlin',
    publish: '31 October, 2021',
    logs: {
      New: [
        'Page : <code> Inbox </code>',
        'Page : <code> Email deatil </code>',
        'Page : <code> Compose </code>',
        'Page : <code> Product list </code>',
        'Page : <code> Product grid </code>',
        'Page : <code> Product details </code>',
        'Page : <code> Order list </code>',
        'Page : <code> Order details </code>',
        'Page : <code> Customers </code>',
        'Page : <code> Customer details </code>',
        'Page : <code> Shopping cart </code>',
        'Page : <code> Checkout </code>',
        'Page : <code> Billing </code>',
        'Page : <code> Invoice </code>',
        'Component : <code> CustomDateInput </code>',
        'Component : <code> MultiSelect </code>',
        'Component : <code> StarRating </code>',
        'Component : <code> TinymceEditor </code>',
        'Component : <code> Toast </code>',
        'Component : <code> AdvanceTable </code>',
        'Component : <code> AdvanceTableFooter </code>',
        'Component : <code> AdvanceTablePagination </code>',
        'Component : <code> AdvanceTableSearchBox </code>',
        'Component : <code> AdvanceTableWrapper </code>',
        'Component : <code> Googlemap </code>',
        'Doc : <code> Advance Select </code>',
        'Doc : <code> Editor </code>',
        'Doc : <code> Rating </code>',
        'Plugin : <code>@tinymce/tinymce-react</code>',
        'Plugin : <code>react-rating</code>',
        'Plugin : <code>google-maps-react</code>',
        'Plugin : <code>react-select</code>'
      ],
      Update: ['Bootstrap to v5.1.3', 'React-Bootstrap to v2.0.0'],

      Migration: {
        Add: [
          '<code>src/components/app/email/**/*</code>',
          '<code>src/components/app/events/**/*</code>',
          '<code>src/components/app/e-commerce/**/*</code>',
          '<code>src/components/bootstrap-components/AdvanceSelect.js</code>',
          '<code>src/components/bootstrap-components/Editor.js</code>',
          '<code>src/components/bootstrap-components/Rating.js</code>',
          '<code>src/components/map/Googlemap.js</code>',
          '<code>src/components/common/CustomDateInput.js</code>',
          '<code>src/components/common/MultiSelect.js</code>',
          '<code>src/components/common/StarRating.js</code>',
          '<code>src/components/common/TinymceEditor.js</code>',
          '<code>src/components/common/Toast.js</code>',
          '<code>src/components/common/advance-table/AdvanceTable.js</code>',
          '<code>src/components/common/advance-table/AdvanceTableFooter.js</code>',
          '<code>src/components/common/advance-table/AdvanceTablePagination.js</code>',
          '<code>src/components/common/advance-table/AdvanceTableSearchBox.js</code>',
          '<code>src/components/common/advance-table/AdvanceTableWrapper.js</code>',
          '<code>src/reducers/emailReducer.js</code>',
          '<code>src/reducers/productReducer.js</code>',
          '<code>src/hooks/useBulkSelect.js</code>',
          '<code>src/hooks/usePagination.js</code>',
          '<code>src/helpers/googleMapStyles.js</code>',
          '<code>src/data/events/timezones.js</code>',
          '<code>src/data/email/emails.js</code>',
          '<code>src/data/countries.js</code>',
          '<code>src/data/ecommerce/OrderDetailsData.js</code>',
          '<code>src/data/ecommerce/cartData.js</code>',
          '<code>src/data/ecommerce/checkoutData.js</code>',
          '<code>src/data/ecommerce/customerDetailsData.js</code>',
          '<code>src/data/ecommerce/customersData.js</code>',
          '<code>src/data/ecommerce/orderList.js</code>',
          '<code>src/data/ecommerce/productData.js</code>',
          '<code>src/data/socialIcons.js</code>',
          '<code>src/assets/scss/theme/plugins/_react-select.scss</code>',
          '<code>src/assets/scss/theme/plugins/_tinymce.scss</code>',
          '<code>src/assets/scss/theme/plugins/_toastify.scss</code>'
        ],
        Update: [
          '<code>src/App.js</code>',
          '<code>src/config.js</code>',
          '<code>src/routes/routes.js</code>',
          '<code>src/helpers/utils.js</code>',
          '<code>src/layouts/Layout.js</code>',
          '<code>src/layouts/MainLayout.js</code>',
          '<code>src/layouts/MainRoutes.js</code>',
          '<code>src/data/events/events.js</code>',
          '<code>src/data/footer/index.js</code>',
          '<code>src/components/bootstrap-components/AdvanceTable.js</code>',
          '<code>src/components/common/CardDropdown.js</code>',
          '<code>src/components/navbar/top/CartNotification.js</code>',
          '<code>src/components/navbar/vertical/NavbarVerticalMenu.js</code>',
          '<code>src/components/pages/faq/faq-alt/FaqAlt.js</code>',
          '<code>src/components/pages/landing/FooterStandard.js</code>',
          '<code>src/components/pages/user/profile/Events.js</code>',
          '<code>src/assets/scss/theme/_dashboard.scss </code>',
          '<code>src/assets/scss/theme/_mixed.scss </code>',
          '<code>src/assets/scss/theme/_plugins.scss </code>',
          '<code>src/assets/scss/theme/_reboot.scss </code>',
          '<code>src/assets/scss/theme/_variables.scss </code>',
          '<code>src/assets/scss/theme/root/_dark.scss </code>',
          '<code>src/assets/scss/theme/root/_light.scss </code>',
          '<code>package.json</code>'
        ],
        Delete: [
          '<code>src/data/footer/iconList.js</code>',
          '<code>src/components/common/AdvanceTable.js</code>'
        ]
      }
    }
  },
  {
    version: '3.0.0-alpha3',
    title: 'Grey kestrel',
    publish: '06 October, 2021',
    logs: {
      New: [
        'Page : <code> Crm </code>',
        'Page : <code> Calendar </code>',
        'Page : <code> Pricing default </code>',
        'Page : <code> Pricing alt </code>',
        'Page : <code> Faq basic </code>',
        'Page : <code> Faq alt </code>',
        'Page : <code> Faq accordion </code>',
        'Page : <code> Invite people </code>',
        'Page : <code> Privacy policy </code>',
        'Component : <code> DropdownFilter </code>',
        'Component : <code> IconItem </code>',
        'Plugin : <code>react-scrollspy</code>',
        'Plugin : <code>react-datepicker</code>',
        'Plugin : <code>@fullcalendar/bootstrap</code>',
        'Plugin : <code>@fullcalendar/daygrid</code>',
        'Plugin : <code>@fullcalendar/interaction</code>',
        'Plugin : <code>@fullcalendar/list</code>',
        'Plugin : <code>@fullcalendar/react</code>',
        'Plugin : <code>@fullcalendar/timegrid</code>',
        'Plugin : <code>@fullcalendar/daygrid</code>'
      ],
      Update: [
        'Doc : <code>Datepicker</code>',
        'Plugin : <strong>Removed</strong> <code>react-datetime</code>',
        'Component : Rename <code>UsersByCountryMap.js</code> to <code>WorldMap.js</code>'
      ],

      Migration: {
        Add: [
          '<code>src/components/dashboards/crm/**/*</code>',
          '<code>src/components/app/calendar/**/*</code>',
          '<code>src/components/pages/faq/**/*</code>',
          '<code>src/components/pages/miscellaneous/**/*</code>',
          '<code>src/components/pages/pricing/**/*</code>',
          '<code>src/components/common/icon/IconItem.js</code>',
          '<code>src/components/common/DropdownFilter.js</code>',
          '<code>src/data/calendar/events.js</code>',
          '<code>src/data/dashboard/crm.js</code>',
          '<code>src/data/faqs.js</code>',
          '<code>src/data/pricing.js</code>',
          '<code>src/hooks/useBreakpoints.js</code>',
          '<code>src/assets/scss/theme/plugins/_full-calendar.scss</code>',
          '<code>src/assets/scss/theme/plugins/_react-datepicker.scss</code>'
        ],
        Update: [
          '<code>src/assets/scss/theme/_dashboard.scss </code>',
          '<code>src/assets/scss/theme/_mixed.scss </code>',
          '<code>src/assets/scss/theme/_plugins.scss</code>',
          '<code>src/assets/scss/theme/_variables.scss</code>',
          '<code>src/assets/scss/theme/plugins/_echarts.scss</code>',
          '<code>src/assets/scss/theme/root/_dark.scss</code>',
          '<code>src/assets/scss/theme/root/_light.scss</code>',
          '<code>src/components/bootstrap-components/DatePicker.js</code>',
          '<code>src/components/common/CardDropdown.js</code>',
          '<code>src/components/common/PageHeader.js</code>',
          '<code>src/components/common/icon/IconGroup.js</code>',
          '<code>src/components/documentation/GettingStarted.js</code>',
          '<code>src/components/documentation/Plugins.js</code>',
          '<code>src/components/documentation/change-log/changelogs.js</code>',
          '<code>src/components/navbar/top/NavbarNavLink.js</code>',
          '<code>src/components/navbar/top/NavbarTopDropDownMenus.js</code>',
          '<code>src/components/navbar/vertical/NavbarVertical.js</code>',
          '<code>src/components/navbar/vertical/NavbarVerticalMenu.js</code>',
          '<code>src/components/pages/user/InputField.js</code>',
          '<code>src/components/wizard/BillingForm.js</code>',
          '<code>src/components/wizard/PersonalForm.js</code>',
          '<code>src/components/wizard/WizardInput.js</code>',
          '<code>src/config.js</code>',
          '<code>src/helpers/echart-utils.js</code>',
          '<code>src/helpers/initFA.js</code>',
          '<code>src/helpers/utils.js</code>',
          '<code>src/layouts/MainRoutes.js</code>',
          '<code>src/routes/routes.js</code>'
        ]
      }
    }
  },
  {
    version: '3.0.0-alpha2',
    title: "Dickinson's kestrel",
    publish: '07 September, 2021',
    logs: {
      New: [
        'Page : <code> Analytics </code>',
        'Page : <code> Feed </code>',
        'Page : <code> Activity Log </code>',
        'Page : <code> Notifications </code>',
        'Page : <code> Followers </code>',
        'Page : <code> Profile </code>',
        'Page : <code> Settings </code>',
        'Page : <code> Associations </code>',
        'Page : <code> Advance tables </code>',
        'Page : <code> Lightbox </code>',
        'Page : <code> Placeholder </code>',
        'Plugin : react-table',
        'Plugin : react-image-lightbox',
        'Plugin : video.js'
      ],
      Update: ['Bootstrap to v5.1.0', 'React-Bootstrap to v2.0.0-beta.6'],
      Migration: {
        Add: [
          '<code>src/components/dashboards/analytics/**/*</code>',
          '<code>src/components/app/**/*</code>',
          '<code>src/components/pages/user/**/*</code>',
          '<code>src/components/pages/asscociations/*</code>',
          '<code>src/components/notification/*</code>',
          '<code>src/components/common/SoftBadge.js</code>',
          '<code>src/components/common/FalconLink.js</code>',
          '<code>src/components/bootstrap-components/Placeholder.js</code>',
          '<code>src/components/bootstrap-components/Lightbox.js</code>',
          '<code>src/components/common/AdvanceTable.js</code>',
          '<code>src/components/bootstrap-components/AdvanceTable.js</code>',
          '<code>src/assets/json/world.json</code>',
          '<code>src/assets/scss/theme/plugins/_echarts.scss</code>',
          '<code>src/assets/scss/theme/plugins/_react-table.scss</code>',
          '<code>src/helpers/echart-utils.js</code>',
          '<code>src/reducers/feedReducer.js</code>'
        ],
        Update: [
          '<code> src/components/navbar/top/ProfileDropdown.js </code>',
          '<code> src/components/bootstrap-components/Badges.js </code>',
          '<code> src/components/bootstrap-components/ListGroup.js </code>',
          '<code> src/components/bootstrap-components/Tables.js </code>',
          '<code> src/components/dashboards/default/RunningProjects.js </code>',
          '<code> src/components/dashboards/default/WeeklySales.js </code>',
          '<code> src/components/navbar/top/SearchBox.js </code>',
          '<code> src/components/navbar/vertical/NavbarVerticalMenuItem.js</code>',
          '<code> src/components/pages/ComingSoon.js </code>',
          '<code> src/components/settings-panel/SettingsPanel.js </code>',
          '<code> src/components/bootstrap-components/FormValidation.js </code>',
          '<code> src/helpers/initFA.js </code>',
          '<code> src/assets/scss/_bootstrap.scss </code>',
          '<code> src/assets/scss/theme/_variables.scss </code>',
          '<code> src/assets/scss/theme/_avatar.scss </code>',
          '<code> src/assets/scss/theme/_functions.scss </code>',
          '<code> src/assets/scss/theme/_popover.scss </code>',
          '<code> src/assets/scss/theme/_popover.scss </code>',
          '<code> src/assets/scss/theme/_dashboard.scss </code>',
          '<code> src/assets/scss/theme/_plugins.scss </code>',
          '<code> src/assets/scss/theme/_table.scss </code>',
          '<code> src/assets/scss/theme/mixins/_utilities.scss </code>'
        ]
      },
      Fix: ['Authentication Modal issue']
    }
  },
  {
    version: '3.0.0-alpha1',
    title: 'initial release',
    publish: '12 August, 2021',
    children: 'Nothing to see here.'
  }
];
