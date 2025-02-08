(function () {
    const default_theme = '';
    window.selected_theme = default_theme;
    window.current_location_id = '';
    window.themegen_settings = {};
    window.editor_enabled = 0;
    const data_ark_id = 'hlpt-dashboard-customizer';
    const themecptb = 'https://nu7ox7c3x6.execute-api.us-east-2.amazonaws.com/clientportalsetup';
    const gfontslist = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDucHIP616GULLF0AUUesLQg0G925S4b6M';
    /// dev
    // const script_url = 'https://cdn.locationapi.co/test/clientportal/';
    /// live
    const script_url = 'https://cdn2.locationapi.co/clientportal/';
    ///////////////////// ******************** //////////////////////////
    ////////////////////////////// init obj  //////////////////////////////
    ///////////////////// ******************** //////////////////////////
    function getDashboardThemes() {
      return {
        location_key: 'REFERENCE_KEY',
        theme_data: {
          theme_darkcherry: {
            theme_name: 'Customize Theme',
            theme_font_family: 'Roboto',
            theme_font_family_h1: 'Roboto',
            theme_font_family_h2: 'Roboto',
            theme_font_family_h3: 'Roboto',
            theme_font_family_h4: 'Roboto',
            theme_font_family_sidemenu: 'Roboto',
            theme_font_family_topmenu: 'Roboto',
            theme_colors: ['#1d4981', '#f2f4f7', '#1D4981', '#000000', '#000000'],
            theme_styles_dashboard_adv: 'themes/darkcherry/dashboard-theme-darkcherry-adv.css',
            advanced_settings: {
              header_controls: {
                header_color: {
                  start_color: '#FFFFFF',
                  end_color: '#FFFFFF',
                  color_stop_perc: '55',
                  gradient_degree: '-45',
                  gradient_type: 'linear',
                },
                header_buttons: {
                  profile_btn: {
                    icon_color: '#666666',
                    icon_hover_color: '#666666',
                    icon_bg_color: '#ffffff',
                    icon_bg_hover_color: '#e5e5e5',
                  },
                  notification_btn: {
                    icon_color: '#666666',
                    icon_hover_color: '#666666',
                    icon_bg_color: '#ffffff',
                    icon_bg_hover_color: '#e5e5e5',
                  },
                  help_btn: {
                    icon_color: '#666666',
                    icon_hover_color: '#666666',
                    icon_bg_color: '#ffffff',
                    icon_bg_hover_color: '#e5e5e5',
                  },
                  viewchangelogs_btn: {
                    icon_color: '#666666',
                    icon_hover_color: '#666666',
                    icon_bg_color: '#ffffff',
                    icon_bg_hover_color: '#e5e5e5',
                  },
                  phone_btn: {
                    icon_color: '#666666',
                    icon_hover_color: '#666666',
                    icon_bg_color: '#ffffff',
                    icon_bg_hover_color: '#e5e5e5',
                  },
                },
              },
              left_sidebar: {
                background_color: {
                  start_color: '#FFFFFF',
                  end_color: '#FFFFFF',
                  color_stop_perc: '30',
                  gradient_degree: '45',
                  gradient_type: 'linear',
                },
                main_nav: {
                  text_hover_color: '#ffffff',
                  icon_hover_color: '#ffffff',
                  hover_active_bg_color: '#1D4981',
                },
              },
              topnav: {
                background_color: {
                  start_color: '#FFFFFF',
                  end_color: '#FFFFFF',
                  color_stop_perc: '30',
                  gradient_degree: '45',
                  gradient_type: 'linear',
                },
                nav: {
                  text_hover_color: '#666666',
                  icon_hover_color: '#1D4981',
                  hover_active_bg_color: '#ffffff',
                },
              },
              body_content: {
                background_color: {
                  start_color: '#EAECF0',
                  end_color: '#EAECF0',
                  color_stop_perc: '40',
                  gradient_degree: '45',
                  gradient_type: 'linear',
                },
                headings: {
                  h1: {
                    color: '#111111',
                    size: '20',
                  },
                  h2: {
                    color: '#111111',
                    size: '18',
                  },
                },
                body_text: {
                  text_color: '#111111',
                  link_color: '#155EEF',
                  text_size: '14',
                },
              },
  
              buttons: {
                primary_btn: {
                  btn_color: {
                    btn_bg_color: '#111111',
                    btn_bg_hover_color: '#1D4981',
                    btn_txt_color: '#FFFFFF',
                    btn_txt_hover_color: '#FFFFFF',
                  },
                  btn_border: {
                    border_thickness: '1px',
                    border_style: 'solid',
                    border_color: '#111111',
                    border_hover_color: '#1D4981',
                  },
                  btn_radius: {
                    radius_top: '5',
                  },
                },
                secondary_btn: {
                  btn_color: {
                    btn_bg_color: '#FFFFFF',
                    btn_bg_hover_color: '#1D4981',
                    btn_txt_color: '#1D4981',
                    btn_txt_hover_color: '#FFFFFF',
                  },
                  btn_border: {
                    border_thickness: '1',
                    border_style: 'solid',
                    border_color: '#FFFFFF',
                    border_hover_color: '#1D4981',
                  },
                  btn_radius: {
                    radius_top: '5',
                  },
                },
                default_btn: {
                  btn_color: {
                    btn_bg_color: '#111111',
                    btn_bg_hover_color: '#1D4981',
                    btn_txt_color: '#FFFFFF',
                    btn_txt_hover_color: '#FFFFFF',
                  },
                  btn_border: {
                    border_thickness: '1',
                    border_style: 'solid',
                    border_color: '#111111',
                    border_hover_color: '#1D4981',
                  },
                  btn_radius: {
                    radius_top: '5',
                  },
                },
                default_light_btn: {
                  btn_color: {
                    btn_bg_color: '#efefef',
                    btn_bg_hover_color: '#1D4981',
                    btn_txt_color: '#111111',
                    btn_txt_hover_color: '#FFFFFF',
                  },
                  btn_border: {
                    border_thickness: '1',
                    border_style: 'solid',
                    border_color: '#d7d7d7',
                    border_hover_color: '#1D4981',
                  },
                  btn_radius: {
                    radius_top: '5',
                  },
                },
              },
              loginform: {
                input_bg_col: '#ffffff',
                input_txt_col: '#000000',
                input_icon_col: '#000000',
                input_bdr_col: '#e2e2e2',
                input_bdr_hover_col: '#d0d0d0',
                input_bdr_radius: '5',
              },
            },
          },
          theme_custom: {
            theme_name: 'No Theme',
            theme_font_family: 'Roboto',
            theme_font_family_h1: 'Roboto',
            theme_font_family_h2: 'Roboto',
            theme_font_family_h3: 'Roboto',
            theme_font_family_h4: 'Roboto',
            theme_font_family_sidemenu: 'Roboto',
            theme_font_family_topmenu: 'Roboto',
            theme_colors: ['#1d4981', '#f2f4f7', '#1D4981', '#000000', '#000000'],
            theme_styles_dashboard_adv: 'themes/darkcherry/dashboard-theme-darkcherry-adv.css',
            advanced_settings: {
              header_controls: {
                header_color: {
                  start_color: '#1D4981',
                  end_color: '#111111',
                  color_stop_perc: '55',
                  gradient_degree: '-45',
                  gradient_type: 'linear',
                },
                header_buttons: {
                  profile_btn: {
                    icon_color: '#FFFFFF',
                    icon_hover_color: '#FFFFFF',
                    icon_bg_color: '#bd9275',
                    icon_bg_hover_color: '#bd9275',
                  },
                  notification_btn: {
                    icon_color: '#FFFFFF',
                    icon_hover_color: '#FFFFFF',
                    icon_bg_color: '#ffffff',
                    icon_bg_hover_color: '#f4f4f4',
                  },
                  help_btn: {
                    icon_color: '#FFFFFF',
                    icon_hover_color: '#FFFFFF',
                    icon_bg_color: '#188bf6',
                    icon_bg_hover_color: '#188bf6',
                  },
                  viewchangelogs_btn: {
                    icon_color: '#FFFFFF',
                    icon_hover_color: '#FFFFFF',
                    icon_bg_color: '#3ab6da',
                    icon_bg_hover_color: '#3ab6da',
                  },
                  phone_btn: {
                    icon_color: '#FFFFFF',
                    icon_hover_color: '#FFFFFF',
                    icon_bg_color: '#30ca30',
                    icon_bg_hover_color: '#30ca30',
                  },
                },
              },
              left_sidebar: {
                background_color: {
                  start_color: '#111111',
                  end_color: '#000000',
                  color_stop_perc: '30',
                  gradient_degree: '45',
                  gradient_type: 'linear',
                },
                main_nav: {
                  text_hover_color: '#ffffff',
                  icon_hover_color: '#ffffff',
                  hover_active_bg_color: '#1d4981',
                },
              },
              topnav: {
                background_color: {
                  start_color: '#ffffff',
                  end_color: '#ffffff',
                  color_stop_perc: '30',
                  gradient_degree: '45',
                  gradient_type: 'linear',
                },
                nav: {
                  text_hover_color: '#666666',
                  icon_hover_color: '#1D4981',
                  hover_active_bg_color: '#ffffff',
                },
              },
              body_content: {
                background_color: {
                  start_color: '#EAECF0',
                  end_color: '#EAECF0',
                  color_stop_perc: '40',
                  gradient_degree: '45',
                  gradient_type: 'linear',
                },
                headings: {
                  h1: {
                    color: '#111111',
                    size: '20',
                  },
                  h2: {
                    color: '#111111',
                    size: '18',
                  },
                },
                body_text: {
                  text_color: '#111111',
                  text_size: '14',
                },
              },
  
              buttons: {
                primary_btn: {
                  btn_color: {
                    btn_bg_color: '#111111',
                    btn_bg_hover_color: '#1D4981',
                    btn_txt_color: '#FFFFFF',
                    btn_txt_hover_color: '#FFFFFF',
                  },
                  btn_border: {
                    border_thickness: '1px',
                    border_style: 'solid',
                    border_color: '#111111',
                    border_hover_color: '#1D4981',
                  },
                  btn_radius: {
                    radius_top: '5',
                  },
                },
                secondary_btn: {
                  btn_color: {
                    btn_bg_color: '#FFFFFF',
                    btn_bg_hover_color: '#1D4981',
                    btn_txt_color: '#1D4981',
                    btn_txt_hover_color: '#FFFFFF',
                  },
                  btn_border: {
                    border_thickness: '1',
                    border_style: 'solid',
                    border_color: '#FFFFFF',
                    border_hover_color: '#1D4981',
                  },
                  btn_radius: {
                    radius_top: '5',
                  },
                },
                default_btn: {
                  btn_color: {
                    btn_bg_color: '#111111',
                    btn_bg_hover_color: '#1D4981',
                    btn_txt_color: '#FFFFFF',
                    btn_txt_hover_color: '#FFFFFF',
                  },
                  btn_border: {
                    border_thickness: '1',
                    border_style: 'solid',
                    border_color: '#111111',
                    border_hover_color: '#1D4981',
                  },
                  btn_radius: {
                    radius_top: '5',
                  },
                },
                default_light_btn: {
                  btn_color: {
                    btn_bg_color: '#efefef',
                    btn_bg_hover_color: '#1D4981',
                    btn_txt_color: '#111111',
                    btn_txt_hover_color: '#FFFFFF',
                  },
                  btn_border: {
                    border_thickness: '1',
                    border_style: 'solid',
                    border_color: '#d7d7d7',
                    border_hover_color: '#1D4981',
                  },
                  btn_radius: {
                    radius_top: '5',
                  },
                },
              },
              loginform: {
                input_bg_col: '#ffffff',
                input_txt_col: '#000000',
                input_icon_col: '#000000',
                input_bdr_col: '#e2e2e2',
                input_bdr_hover_col: '#d0d0d0',
                input_bdr_radius: '5',
              },
            },
          },
        },
        script_filename: {
          theme_builder_panel: 'css/dashboard-customizer.css',
          dashboard_theme_main_css: 'dynamic-css/',
          dashboard_theme_main_css_path: 'css/cptb-main-styles.css',
          dashboard_theme_preloader_css: 'dynamic-css-disabled/',
        },
      };
    }
    ///////////////////// ******************** //////////////////////////
    /////////////////////// localstorage & window obj  //////////////////
    ///////////////////// ******************** //////////////////////////
    ///// ls window obj general
    const dashboard_themes = getDashboardThemes();
    const get_ls_window_general = () => {
      let ls_window_general = {};
      const wts = window.themegen_settings;
      // general settings
      ls_window_general['selected_theme'] = wts.selected_theme;
      ls_window_general['theme_name'] = wts.theme_name;
      ls_window_general['theme_name_primary_col'] = wts.theme_name_primary_col;
      ls_window_general['theme_name_primary_bgcol'] = wts.theme_name_primary_bgcol;
      ls_window_general['theme_name_gradient_bgcol'] = wts.theme_name_gradient_bgcol;
      ls_window_general['theme_name_leftsidebar_txtcol'] = wts.theme_name_leftsidebar_txtcol;
      ls_window_general['theme_name_leftsidebar_iconcol'] = wts.theme_name_leftsidebar_iconcol;
  
      ls_window_general['theme_font_family'] = wts.theme_font_family;
      ls_window_general['theme_font_family_h1'] = wts.theme_font_family_h1;
      ls_window_general['theme_font_family_h2'] = wts.theme_font_family_h2;
      ls_window_general['theme_font_family_h3'] = wts.theme_font_family_h3;
      ls_window_general['theme_font_family_h4'] = wts.theme_font_family_h4;
      ls_window_general['theme_font_family_sidemenu'] = wts.theme_font_family_sidemenu;
      ls_window_general['theme_font_family_topmenu'] = wts.theme_font_family_topmenu;
  
      return ls_window_general;
    };
    ///// ls window obj advanced
    const get_ls_window_advanced = () => {
      let ls_window_advanced = {};
      const wts = window.themegen_settings;
      /* headerbgcolor - Header background color  */
      ls_window_advanced['theme_adv_headerbgcolor_start_col'] = wts.theme_adv_headerbgcolor_start_col;
      ls_window_advanced['theme_adv_headerbgcolor_end_col'] = wts.theme_adv_headerbgcolor_end_col;
      ls_window_advanced['theme_adv_headerbgcolor_stop_perc'] = wts.theme_adv_headerbgcolor_stop_perc;
      ls_window_advanced['theme_adv_headerbgcolor_gradient_deg'] = wts.theme_adv_headerbgcolor_gradient_deg;
      /* headercontrol button - profile  */
      ls_window_advanced['theme_adv_profile_btn_icon_col'] = wts.theme_adv_profile_btn_icon_col;
      ls_window_advanced['theme_adv_profile_btn_icon_hover_col'] = wts.theme_adv_profile_btn_icon_hover_col;
      ls_window_advanced['theme_adv_profile_btn_icon_bg_col'] = wts.theme_adv_profile_btn_icon_bg_col;
      ls_window_advanced['theme_adv_profile_btn_icon_bg_hover_col'] = wts.theme_adv_profile_btn_icon_bg_hover_col;
      /* headercontrol button - notification  */
      ls_window_advanced['theme_adv_notification_btn_icon_col'] = wts.theme_adv_notification_btn_icon_col;
      ls_window_advanced['theme_adv_notification_btn_icon_hover_col'] = wts.theme_adv_notification_btn_icon_hover_col;
      ls_window_advanced['theme_adv_notification_btn_icon_bg_col'] = wts.theme_adv_notification_btn_icon_bg_col;
      ls_window_advanced['theme_adv_notification_btn_icon_bg_hover_col'] = wts.theme_adv_notification_btn_icon_bg_hover_col;
      /* headercontrol button - help - Options btn  */
      ls_window_advanced['theme_adv_help_btn_icon_col'] = wts.theme_adv_help_btn_icon_col;
      ls_window_advanced['theme_adv_help_btn_icon_hover_col'] = wts.theme_adv_help_btn_icon_hover_col;
      ls_window_advanced['theme_adv_help_btn_icon_bg_col'] = wts.theme_adv_help_btn_icon_bg_col;
      ls_window_advanced['theme_adv_help_btn_icon_bg_hover_col'] = wts.theme_adv_help_btn_icon_bg_hover_col;
      /* headercontrol button - viewchangelogs - darkmode btn  */
      ls_window_advanced['theme_adv_viewchangelogs_btn_icon_col'] = wts.theme_adv_viewchangelogs_btn_icon_col;
      ls_window_advanced['theme_adv_viewchangelogs_btn_icon_hover_col'] = wts.theme_adv_viewchangelogs_btn_icon_hover_col;
      ls_window_advanced['theme_adv_viewchangelogs_btn_icon_bg_col'] = wts.theme_adv_viewchangelogs_btn_icon_bg_col;
      ls_window_advanced['theme_adv_viewchangelogs_btn_icon_bg_hover_col'] = wts.theme_adv_viewchangelogs_btn_icon_bg_hover_col;
      /* headercontrol button - phone - home btn */
      ls_window_advanced['theme_adv_phone_btn_icon_col'] = wts.theme_adv_phone_btn_icon_col;
      ls_window_advanced['theme_adv_phone_btn_icon_hover_col'] = wts.theme_adv_phone_btn_icon_hover_col;
      ls_window_advanced['theme_adv_phone_btn_icon_bg_col'] = wts.theme_adv_phone_btn_icon_bg_col;
      ls_window_advanced['theme_adv_phone_btn_icon_bg_hover_col'] = wts.theme_adv_phone_btn_icon_bg_hover_col;
      /* leftsidebarbgcolor - background color  */
      ls_window_advanced['theme_adv_leftsidebarbgcolor_start_col'] = wts.theme_adv_leftsidebarbgcolor_start_col;
      ls_window_advanced['theme_adv_leftsidebarbgcolor_end_col'] = wts.theme_adv_leftsidebarbgcolor_end_col;
      ls_window_advanced['theme_adv_leftsidebarbgcolor_stop_perc'] = wts.theme_adv_leftsidebarbgcolor_stop_perc;
      ls_window_advanced['theme_adv_leftsidebarbgcolor_gradient_deg'] = wts.theme_adv_leftsidebarbgcolor_gradient_deg;
      /* mainnav - text hover = icon hover = hover-active background colors */
      ls_window_advanced['theme_adv_mainnav_text_hover_color'] = wts.theme_adv_mainnav_text_hover_color;
      ls_window_advanced['theme_adv_mainnav_icon_hover_color'] = wts.theme_adv_mainnav_icon_hover_color;
      ls_window_advanced['theme_adv_mainnav_hover_active_bg_color'] = wts.theme_adv_mainnav_hover_active_bg_color;
      ///////////////////////
      /* topnavbgcolor - background color  */
      ls_window_advanced['theme_adv_topnavbgcolor_start_col'] = wts.theme_adv_topnavbgcolor_start_col;
      ls_window_advanced['theme_adv_topnavbgcolor_end_col'] = wts.theme_adv_topnavbgcolor_end_col;
      ls_window_advanced['theme_adv_topnavbgcolor_stop_perc'] = wts.theme_adv_topnavbgcolor_stop_perc;
      ls_window_advanced['theme_adv_topnavbgcolor_gradient_deg'] = wts.theme_adv_topnavbgcolor_gradient_deg;
      /* mainnav - text hover = icon hover = hover-active background colors */
      ls_window_advanced['theme_adv_topnav_text_hover_color'] = wts.theme_adv_topnav_text_hover_color;
      ls_window_advanced['theme_adv_topnav_icon_hover_color'] = wts.theme_adv_topnav_icon_hover_color;
      ls_window_advanced['theme_adv_topnav_hover_active_bg_color'] = wts.theme_adv_topnav_hover_active_bg_color;
      ////////////////////////
      /* bodycontent - background color  */
      ls_window_advanced['theme_adv_bodycontent_start_col'] = wts.theme_adv_bodycontent_start_col;
      ls_window_advanced['theme_adv_bodycontent_end_col'] = wts.theme_adv_bodycontent_end_col;
      ls_window_advanced['theme_adv_bodycontent_stop_perc'] = wts.theme_adv_bodycontent_stop_perc;
      ls_window_advanced['theme_adv_bodycontent_gradient_deg'] = wts.theme_adv_bodycontent_gradient_deg;
      /* bodycontent - text color  */
      ls_window_advanced['theme_adv_bodycontent_text_col'] = wts.theme_adv_bodycontent_text_col;
      ls_window_advanced['theme_adv_link_text_col'] = wts.theme_adv_link_text_col;
      /* bodycontent - h1 h2 color & size   */
      ls_window_advanced['theme_adv_bodycontent_h1_text_col'] = wts.theme_adv_bodycontent_h1_text_col;
      ls_window_advanced['theme_adv_bodycontent_h2_text_col'] = wts.theme_adv_bodycontent_h2_text_col;
      ls_window_advanced['theme_adv_bodycontent_h1_text_size'] = wts.theme_adv_bodycontent_h1_text_size;
      ls_window_advanced['theme_adv_bodycontent_h2_text_size'] = wts.theme_adv_bodycontent_h2_text_size;
  
      /* primary adv buttons */
      ls_window_advanced['theme_adv_primary_btn_bgcol'] = wts.theme_adv_primary_btn_bgcol;
      ls_window_advanced['theme_adv_primary_btn_bg_h_col'] = wts.theme_adv_primary_btn_bg_h_col;
      ls_window_advanced['theme_adv_primary_btn_txtcol'] = wts.theme_adv_primary_btn_txtcol;
      ls_window_advanced['theme_adv_primary_btn_txt_h_col'] = wts.theme_adv_primary_btn_txt_h_col;
      ls_window_advanced['theme_adv_primary_btn_bdrcol'] = wts.theme_adv_primary_btn_bdrcol;
      ls_window_advanced['theme_adv_primary_btn_bdr_h_col'] = wts.theme_adv_primary_btn_bdr_h_col;
      ls_window_advanced['theme_adv_primary_btn_radius'] = wts.theme_adv_primary_btn_radius;
      /* secondary adv buttons */
      ls_window_advanced['theme_adv_secondary_btn_bgcol'] = wts.theme_adv_secondary_btn_bgcol;
      ls_window_advanced['theme_adv_secondary_btn_bg_h_col'] = wts.theme_adv_secondary_btn_bg_h_col;
      ls_window_advanced['theme_adv_secondary_btn_txtcol'] = wts.theme_adv_secondary_btn_txtcol;
      ls_window_advanced['theme_adv_secondary_btn_txt_h_col'] = wts.theme_adv_secondary_btn_txt_h_col;
      ls_window_advanced['theme_adv_secondary_btn_bdrcol'] = wts.theme_adv_secondary_btn_bdrcol;
      ls_window_advanced['theme_adv_secondary_btn_bdr_h_col'] = wts.theme_adv_secondary_btn_bdr_h_col;
      ls_window_advanced['theme_adv_secondary_btn_radius'] = wts.theme_adv_secondary_btn_radius;
      /* default adv button */
      ls_window_advanced['theme_adv_default_btn_bgcol'] = wts.theme_adv_default_btn_bgcol;
      ls_window_advanced['theme_adv_default_btn_bg_h_col'] = wts.theme_adv_default_btn_bg_h_col;
      ls_window_advanced['theme_adv_default_btn_txtcol'] = wts.theme_adv_default_btn_txtcol;
      ls_window_advanced['theme_adv_default_btn_txt_h_col'] = wts.theme_adv_default_btn_txt_h_col;
      ls_window_advanced['theme_adv_default_btn_bdrcol'] = wts.theme_adv_default_btn_bdrcol;
      ls_window_advanced['theme_adv_default_btn_bdr_h_col'] = wts.theme_adv_default_btn_bdr_h_col;
      ls_window_advanced['theme_adv_default_btn_radius'] = wts.theme_adv_default_btn_radius;
      /* default_light adv button */
      ls_window_advanced['theme_adv_default_light_btn_bgcol'] = wts.theme_adv_default_light_btn_bgcol;
      ls_window_advanced['theme_adv_default_light_btn_bg_h_col'] = wts.theme_adv_default_light_btn_bg_h_col;
      ls_window_advanced['theme_adv_default_light_btn_txtcol'] = wts.theme_adv_default_light_btn_txtcol;
      ls_window_advanced['theme_adv_default_light_btn_txt_h_col'] = wts.theme_adv_default_light_btn_txt_h_col;
      ls_window_advanced['theme_adv_default_light_btn_bdrcol'] = wts.theme_adv_default_light_btn_bdrcol;
      ls_window_advanced['theme_adv_default_light_btn_bdr_h_col'] = wts.theme_adv_default_light_btn_bdr_h_col;
      ls_window_advanced['theme_adv_default_light_btn_radius'] = wts.theme_adv_default_light_btn_radius;
      /* login form */
      ls_window_advanced['theme_adv_input_bgcol'] = wts.theme_adv_input_bgcol;
      ls_window_advanced['theme_adv_input_txtcol'] = wts.theme_adv_input_txtcol;
      ls_window_advanced['theme_adv_input_iconcol'] = wts.theme_adv_input_iconcol;
      ls_window_advanced['theme_adv_input_bdrcol'] = wts.theme_adv_input_bdrcol;
      ls_window_advanced['theme_adv_input_bdrhover_col'] = wts.theme_adv_input_bdrhover_col;
      ls_window_advanced['theme_adv_input_radius_col'] = wts.theme_adv_input_radius_col;
      return ls_window_advanced;
    };
    ///// ls obj general
    const get_ls_obj_general = () => {
      let ls_obj_general = {};
      let selectedtheme = 'theme_custom';
      if (window.selected_theme) selectedtheme = window.selected_theme;
      ls_obj_general['selected_theme'] = window.selected_theme;
      ls_obj_general['theme_name'] = dashboard_themes.theme_data[selectedtheme].theme_name;
      ls_obj_general['theme_name_primary_col'] = dashboard_themes.theme_data[selectedtheme]['theme_colors'][0];
      ls_obj_general['theme_name_primary_bgcol'] = dashboard_themes.theme_data[selectedtheme]['theme_colors'][1];
      ls_obj_general['theme_name_gradient_bgcol'] = dashboard_themes.theme_data[selectedtheme]['theme_colors'][2];
      ls_obj_general['theme_name_leftsidebar_iconcol'] = dashboard_themes.theme_data[selectedtheme]['theme_colors'][3];
      ls_obj_general['theme_name_leftsidebar_txtcol'] = dashboard_themes.theme_data[selectedtheme]['theme_colors'][4];
  
      ls_obj_general['theme_font_family'] = dashboard_themes.theme_data[selectedtheme].theme_font_family;
      ls_obj_general['theme_font_family_h1'] = dashboard_themes.theme_data[selectedtheme].theme_font_family_h1;
      ls_obj_general['theme_font_family_h2'] = dashboard_themes.theme_data[selectedtheme].theme_font_family_h2;
      ls_obj_general['theme_font_family_h3'] = dashboard_themes.theme_data[selectedtheme].theme_font_family_h3;
      ls_obj_general['theme_font_family_h4'] = dashboard_themes.theme_data[selectedtheme].theme_font_family_h4;
      ls_obj_general['theme_font_family_sidemenu'] = dashboard_themes.theme_data[selectedtheme].theme_font_family_sidemenu;
      ls_obj_general['theme_font_family_topmenu'] = dashboard_themes.theme_data[selectedtheme].theme_font_family_topmenu;
      return ls_obj_general;
    };
    ///// ls obj advanced
    const get_ls_obj_advanced = () => {
      let ls_obj_advanced = {};
      let selectedtheme = 'theme_custom';
      if (window.selected_theme) selectedtheme = window.selected_theme;
      let selected_theme_advs_obj = dashboard_themes.theme_data[selectedtheme].advanced_settings;
      /* headerbgcolor - Header background color  */
      ls_obj_advanced['theme_adv_headerbgcolor_start_col'] = selected_theme_advs_obj.header_controls.header_color.start_color;
      ls_obj_advanced['theme_adv_headerbgcolor_end_col'] = selected_theme_advs_obj.header_controls.header_color.end_color;
      ls_obj_advanced['theme_adv_headerbgcolor_stop_perc'] = selected_theme_advs_obj.header_controls.header_color.color_stop_perc;
      ls_obj_advanced['theme_adv_headerbgcolor_gradient_deg'] = selected_theme_advs_obj.header_controls.header_color.gradient_degree;
      /* profile button - headercontrol    */
      ls_obj_advanced['theme_adv_profile_btn_icon_col'] = selected_theme_advs_obj.header_controls.header_buttons.profile_btn.icon_color;
      ls_obj_advanced['theme_adv_profile_btn_icon_hover_col'] = selected_theme_advs_obj.header_controls.header_buttons.profile_btn.icon_hover_color;
      ls_obj_advanced['theme_adv_profile_btn_icon_bg_col'] = selected_theme_advs_obj.header_controls.header_buttons.profile_btn.icon_bg_color;
      ls_obj_advanced['theme_adv_profile_btn_icon_bg_hover_col'] = selected_theme_advs_obj.header_controls.header_buttons.profile_btn.icon_bg_hover_color;
      /* notification button - headercontrol    */
      ls_obj_advanced['theme_adv_notification_btn_icon_col'] = selected_theme_advs_obj.header_controls.header_buttons.notification_btn.icon_color;
      ls_obj_advanced['theme_adv_notification_btn_icon_hover_col'] = selected_theme_advs_obj.header_controls.header_buttons.notification_btn.icon_hover_color;
      ls_obj_advanced['theme_adv_notification_btn_icon_bg_col'] = selected_theme_advs_obj.header_controls.header_buttons.notification_btn.icon_bg_color;
      ls_obj_advanced['theme_adv_notification_btn_icon_bg_hover_col'] = selected_theme_advs_obj.header_controls.header_buttons.notification_btn.icon_bg_hover_color;
      /* help button - headercontrol  - options btn  */
      ls_obj_advanced['theme_adv_help_btn_icon_col'] = selected_theme_advs_obj.header_controls.header_buttons.help_btn.icon_color;
      ls_obj_advanced['theme_adv_help_btn_icon_hover_col'] = selected_theme_advs_obj.header_controls.header_buttons.help_btn.icon_hover_color;
      ls_obj_advanced['theme_adv_help_btn_icon_bg_col'] = selected_theme_advs_obj.header_controls.header_buttons.help_btn.icon_bg_color;
      ls_obj_advanced['theme_adv_help_btn_icon_bg_hover_col'] = selected_theme_advs_obj.header_controls.header_buttons.help_btn.icon_bg_hover_color;
      /* viewchangelogs button - headercontrol  - darkmode btn  */
      ls_obj_advanced['theme_adv_viewchangelogs_btn_icon_col'] = selected_theme_advs_obj.header_controls.header_buttons.viewchangelogs_btn.icon_color;
      ls_obj_advanced['theme_adv_viewchangelogs_btn_icon_hover_col'] = selected_theme_advs_obj.header_controls.header_buttons.viewchangelogs_btn.icon_hover_color;
      ls_obj_advanced['theme_adv_viewchangelogs_btn_icon_bg_col'] = selected_theme_advs_obj.header_controls.header_buttons.viewchangelogs_btn.icon_bg_color;
      ls_obj_advanced['theme_adv_viewchangelogs_btn_icon_bg_hover_col'] = selected_theme_advs_obj.header_controls.header_buttons.viewchangelogs_btn.icon_bg_hover_color;
      /* phone button - headercontrol  - home btn  */
      ls_obj_advanced['theme_adv_phone_btn_icon_col'] = selected_theme_advs_obj.header_controls.header_buttons.phone_btn.icon_color;
      ls_obj_advanced['theme_adv_phone_btn_icon_hover_col'] = selected_theme_advs_obj.header_controls.header_buttons.phone_btn.icon_hover_color;
      ls_obj_advanced['theme_adv_phone_btn_icon_bg_col'] = selected_theme_advs_obj.header_controls.header_buttons.phone_btn.icon_bg_color;
      ls_obj_advanced['theme_adv_phone_btn_icon_bg_hover_col'] = selected_theme_advs_obj.header_controls.header_buttons.phone_btn.icon_bg_hover_color;
      /* leftsidebarbgcolor - Left Sidebar background color  */
      ls_obj_advanced['theme_adv_leftsidebarbgcolor_start_col'] = selected_theme_advs_obj.left_sidebar.background_color.start_color;
      ls_obj_advanced['theme_adv_leftsidebarbgcolor_end_col'] = selected_theme_advs_obj.left_sidebar.background_color.end_color;
      ls_obj_advanced['theme_adv_leftsidebarbgcolor_stop_perc'] = selected_theme_advs_obj.left_sidebar.background_color.color_stop_perc;
      ls_obj_advanced['theme_adv_leftsidebarbgcolor_gradient_deg'] = selected_theme_advs_obj.left_sidebar.background_color.gradient_degree;
      /* mainnav - text hover, icon hover, hover-active background colors   */
      ls_obj_advanced['theme_adv_mainnav_text_hover_color'] = selected_theme_advs_obj.left_sidebar.main_nav.text_hover_color;
      ls_obj_advanced['theme_adv_mainnav_icon_hover_color'] = selected_theme_advs_obj.left_sidebar.main_nav.icon_hover_color;
      ls_obj_advanced['theme_adv_mainnav_hover_active_bg_color'] = selected_theme_advs_obj.left_sidebar.main_nav.hover_active_bg_color;
      /////////////
      /* topnavbgcolor - Left Sidebar background color  */
      ls_obj_advanced['theme_adv_topnavbgcolor_start_col'] = selected_theme_advs_obj.topnav.background_color.start_color;
      ls_obj_advanced['theme_adv_topnavbgcolor_end_col'] = selected_theme_advs_obj.topnav.background_color.end_color;
      ls_obj_advanced['theme_adv_topnavbgcolor_stop_perc'] = selected_theme_advs_obj.topnav.background_color.color_stop_perc;
      ls_obj_advanced['theme_adv_topnavbgcolor_gradient_deg'] = selected_theme_advs_obj.topnav.background_color.gradient_degree;
      /* topnav - text hover, icon hover, hover-active background colors   */
      ls_obj_advanced['theme_adv_topnav_text_hover_color'] = selected_theme_advs_obj.topnav.nav.text_hover_color;
      ls_obj_advanced['theme_adv_topnav_icon_hover_color'] = selected_theme_advs_obj.topnav.nav.icon_hover_color;
      ls_obj_advanced['theme_adv_topnav_hover_active_bg_color'] = selected_theme_advs_obj.topnav.nav.hover_active_bg_color;
      ////////////////
      /* bodycontent - background color  */
      ls_obj_advanced['theme_adv_bodycontent_start_col'] = selected_theme_advs_obj.body_content.background_color.start_color;
      ls_obj_advanced['theme_adv_bodycontent_end_col'] = selected_theme_advs_obj.body_content.background_color.end_color;
      ls_obj_advanced['theme_adv_bodycontent_stop_perc'] = selected_theme_advs_obj.body_content.background_color.color_stop_perc;
      ls_obj_advanced['theme_adv_bodycontent_gradient_deg'] = selected_theme_advs_obj.body_content.background_color.gradient_degree;
      /* bodycontent - text color  */
      ls_obj_advanced['theme_adv_bodycontent_text_col'] = selected_theme_advs_obj.body_content.body_text.text_color;
      ls_obj_advanced['theme_adv_link_text_col'] = selected_theme_advs_obj.body_content.body_text.link_color;
      /* bodycontent - h1 h2 color & size   */
      ls_obj_advanced['theme_adv_bodycontent_h1_text_col'] = selected_theme_advs_obj.body_content.headings.h1.color;
      ls_obj_advanced['theme_adv_bodycontent_h2_text_col'] = selected_theme_advs_obj.body_content.headings.h2.color;
      ls_obj_advanced['theme_adv_bodycontent_h1_text_size'] = selected_theme_advs_obj.body_content.headings.h1.size;
      ls_obj_advanced['theme_adv_bodycontent_h2_text_size'] = selected_theme_advs_obj.body_content.headings.h2.size;
      /* primary adv button */
      ls_obj_advanced['theme_adv_primary_btn_bgcol'] = selected_theme_advs_obj.buttons.primary_btn.btn_color.btn_bg_color;
      ls_obj_advanced['theme_adv_primary_btn_bg_h_col'] = selected_theme_advs_obj.buttons.primary_btn.btn_color.btn_bg_hover_color;
      ls_obj_advanced['theme_adv_primary_btn_txtcol'] = selected_theme_advs_obj.buttons.primary_btn.btn_color.btn_txt_color;
      ls_obj_advanced['theme_adv_primary_btn_txt_h_col'] = selected_theme_advs_obj.buttons.primary_btn.btn_color.btn_txt_hover_color;
      ls_obj_advanced['theme_adv_primary_btn_bdrcol'] = selected_theme_advs_obj.buttons.primary_btn.btn_border.border_color;
      ls_obj_advanced['theme_adv_primary_btn_bdr_h_col'] = selected_theme_advs_obj.buttons.primary_btn.btn_border.border_hover_color;
      ls_obj_advanced['theme_adv_primary_btn_radius'] = selected_theme_advs_obj.buttons.primary_btn.btn_radius.radius_top;
      /* secondary adv button */
      ls_obj_advanced['theme_adv_secondary_btn_bgcol'] = selected_theme_advs_obj.buttons.secondary_btn.btn_color.btn_bg_color;
      ls_obj_advanced['theme_adv_secondary_btn_bg_h_col'] = selected_theme_advs_obj.buttons.secondary_btn.btn_color.btn_bg_hover_color;
      ls_obj_advanced['theme_adv_secondary_btn_txtcol'] = selected_theme_advs_obj.buttons.secondary_btn.btn_color.btn_txt_color;
      ls_obj_advanced['theme_adv_secondary_btn_txt_h_col'] = selected_theme_advs_obj.buttons.secondary_btn.btn_color.btn_txt_hover_color;
      ls_obj_advanced['theme_adv_secondary_btn_bdrcol'] = selected_theme_advs_obj.buttons.secondary_btn.btn_border.border_color;
      ls_obj_advanced['theme_adv_secondary_btn_bdr_h_col'] = selected_theme_advs_obj.buttons.secondary_btn.btn_border.border_hover_color;
      ls_obj_advanced['theme_adv_secondary_btn_radius'] = selected_theme_advs_obj.buttons.secondary_btn.btn_radius.radius_top;
      /* default adv button */
      ls_obj_advanced['theme_adv_default_btn_bgcol'] = selected_theme_advs_obj.buttons.default_btn.btn_color.btn_bg_color;
      ls_obj_advanced['theme_adv_default_btn_bg_h_col'] = selected_theme_advs_obj.buttons.default_btn.btn_color.btn_bg_hover_color;
      ls_obj_advanced['theme_adv_default_btn_txtcol'] = selected_theme_advs_obj.buttons.default_btn.btn_color.btn_txt_color;
      ls_obj_advanced['theme_adv_default_btn_txt_h_col'] = selected_theme_advs_obj.buttons.default_btn.btn_color.btn_txt_hover_color;
      ls_obj_advanced['theme_adv_default_btn_bdrcol'] = selected_theme_advs_obj.buttons.default_btn.btn_border.border_color;
      ls_obj_advanced['theme_adv_default_btn_bdr_h_col'] = selected_theme_advs_obj.buttons.default_btn.btn_border.border_hover_color;
      ls_obj_advanced['theme_adv_default_btn_radius'] = selected_theme_advs_obj.buttons.default_btn.btn_radius.radius_top;
      /* default_light adv button */
      ls_obj_advanced['theme_adv_default_light_btn_bgcol'] = selected_theme_advs_obj.buttons.default_light_btn.btn_color.btn_bg_color;
      ls_obj_advanced['theme_adv_default_light_btn_bg_h_col'] = selected_theme_advs_obj.buttons.default_light_btn.btn_color.btn_bg_hover_color;
      ls_obj_advanced['theme_adv_default_light_btn_txtcol'] = selected_theme_advs_obj.buttons.default_light_btn.btn_color.btn_txt_color;
      ls_obj_advanced['theme_adv_default_light_btn_txt_h_col'] = selected_theme_advs_obj.buttons.default_light_btn.btn_color.btn_txt_hover_color;
      ls_obj_advanced['theme_adv_default_light_btn_bdrcol'] = selected_theme_advs_obj.buttons.default_light_btn.btn_border.border_color;
      ls_obj_advanced['theme_adv_default_light_btn_bdr_h_col'] = selected_theme_advs_obj.buttons.default_light_btn.btn_border.border_hover_color;
      ls_obj_advanced['theme_adv_default_light_btn_radius'] = selected_theme_advs_obj.buttons.default_light_btn.btn_radius.radius_top;
      /* login form */
      ls_obj_advanced['theme_adv_input_bgcol'] = selected_theme_advs_obj.buttons.input_bg_col;
      ls_obj_advanced['theme_adv_input_txtcol'] = selected_theme_advs_obj.buttons.input_txt_col;
      ls_obj_advanced['theme_adv_input_iconcol'] = selected_theme_advs_obj.buttons.input_icon_col;
      ls_obj_advanced['theme_adv_input_bdrcol'] = selected_theme_advs_obj.buttons.input_bdr_col;
      ls_obj_advanced['theme_adv_input_bdrhover_col'] = selected_theme_advs_obj.buttons.input_bdr_hover_col;
      ls_obj_advanced['theme_adv_input_radius_col'] = selected_theme_advs_obj.buttons.input_bdr_radius;
      return ls_obj_advanced;
    };
    ///// ls no cc elements obj general
    const get_ls_elem_id_no_cc_general = () => {
      let ls_elem_id_no_cc_general = {};
      //// General Settings elemets
      ls_elem_id_no_cc_general['theme_name_primary_col'] = 'dc-colorPicker-primary';
      ls_elem_id_no_cc_general['theme_name_primary_bgcol'] = 'dc-colorPicker-primarybg';
      ls_elem_id_no_cc_general['theme_name_gradient_bgcol'] = 'dc-colorPicker-bg-gradient';
      ls_elem_id_no_cc_general['theme_name_leftsidebar_txtcol'] = 'dc-colorPicker-leftsidebar-txtcol';
      ls_elem_id_no_cc_general['theme_name_leftsidebar_iconcol'] = 'dc-colorPicker-leftsidebar-iconcol';
  
      ls_elem_id_no_cc_general['theme_font_family'] = 'dc-colorPicker-font-family';
      ls_elem_id_no_cc_general['theme_font_family_h1'] = 'dc-colorPicker-font-family-h1';
      ls_elem_id_no_cc_general['theme_font_family_h2'] = 'dc-colorPicker-font-family-h2';
      ls_elem_id_no_cc_general['theme_font_family_h3'] = 'dc-colorPicker-font-family-h3';
      ls_elem_id_no_cc_general['theme_font_family_h4'] = 'dc-colorPicker-font-family-h4';
      ls_elem_id_no_cc_general['theme_font_family_sidemenu'] = 'dc-colorPicker-font-family-sidemenu';
      ls_elem_id_no_cc_general['theme_font_family_topmenu'] = 'dc-colorPicker-font-family-topmenu';
      return ls_elem_id_no_cc_general;
    };
    ///// ls no cc elements obj advanced
    const get_ls_elem_id_no_cc_advanced = () => {
      let ls_elem_id_no_cc_advanced = {};
      /* headerbgcolor - Header background color  */
      ls_elem_id_no_cc_advanced['theme_adv_headerbgcolor_start_col'] = 'dc-colorPicker-adv-headerbgcolor-start-col';
      ls_elem_id_no_cc_advanced['theme_adv_headerbgcolor_end_col'] = 'dc-colorPicker-adv-headerbgcolor-end-col';
      ls_elem_id_no_cc_advanced['theme_adv_headerbgcolor_stop_perc'] = 'dc-colorPicker-adv-headerbgcolor-stop-perc';
      ls_elem_id_no_cc_advanced['theme_adv_headerbgcolor_gradient_deg'] = 'dc-colorPicker-adv-headerbgcolor-gradient-deg';
      /* headercontrol button - profile  */
      ls_elem_id_no_cc_advanced['theme_adv_profile_btn_icon_col'] = 'dc-colorPicker-adv-profile-btn-icon-col';
      ls_elem_id_no_cc_advanced['theme_adv_profile_btn_icon_hover_col'] = 'dc-colorPicker-adv-profile-btn-icon-hover-col';
      ls_elem_id_no_cc_advanced['theme_adv_profile_btn_icon_bg_col'] = 'dc-colorPicker-adv-profile-btn-icon-bg-col';
      ls_elem_id_no_cc_advanced['theme_adv_profile_btn_icon_bg_hover_col'] = 'dc-colorPicker-adv-profile-btn-icon-bg-hover-col';
      /* headercontrol button - notification  */
      ls_elem_id_no_cc_advanced['theme_adv_notification_btn_icon_col'] = 'dc-colorPicker-adv-notification-btn-icon-col';
      ls_elem_id_no_cc_advanced['theme_adv_notification_btn_icon_hover_col'] = 'dc-colorPicker-adv-notification-btn-icon-hover-col';
      ls_elem_id_no_cc_advanced['theme_adv_notification_btn_icon_bg_col'] = 'dc-colorPicker-adv-notification-btn-icon-bg-col';
      ls_elem_id_no_cc_advanced['theme_adv_notification_btn_icon_bg_hover_col'] = 'dc-colorPicker-adv-notification-btn-icon-bg-hover-col';
      /* headercontrol button - help - option btn  */
      ls_elem_id_no_cc_advanced['theme_adv_help_btn_icon_col'] = 'dc-colorPicker-adv-help-btn-icon-col';
      ls_elem_id_no_cc_advanced['theme_adv_help_btn_icon_hover_col'] = 'dc-colorPicker-adv-help-btn-icon-hover-col';
      ls_elem_id_no_cc_advanced['theme_adv_help_btn_icon_bg_col'] = 'dc-colorPicker-adv-help-btn-icon-bg-col';
      ls_elem_id_no_cc_advanced['theme_adv_help_btn_icon_bg_hover_col'] = 'dc-colorPicker-adv-help-btn-icon-bg-hover-col';
      /* headercontrol button - viewchangelogs  - darkmode btn */
      ls_elem_id_no_cc_advanced['theme_adv_viewchangelogs_btn_icon_col'] = 'dc-colorPicker-adv-viewchangelogs-btn-icon-col';
      ls_elem_id_no_cc_advanced['theme_adv_viewchangelogs_btn_icon_hover_col'] = 'dc-colorPicker-adv-viewchangelogs-btn-icon-hover-col';
      ls_elem_id_no_cc_advanced['theme_adv_viewchangelogs_btn_icon_bg_col'] = 'dc-colorPicker-adv-viewchangelogs-btn-icon-bg-col';
      ls_elem_id_no_cc_advanced['theme_adv_viewchangelogs_btn_icon_bg_hover_col'] = 'dc-colorPicker-adv-viewchangelogs-btn-icon-bg-hover-col';
      /* headercontrol button - phone - home btn */
      ls_elem_id_no_cc_advanced['theme_adv_phone_btn_icon_col'] = 'dc-colorPicker-adv-phone-btn-icon-col';
      ls_elem_id_no_cc_advanced['theme_adv_phone_btn_icon_hover_col'] = 'dc-colorPicker-adv-phone-btn-icon-hover-col';
      ls_elem_id_no_cc_advanced['theme_adv_phone_btn_icon_bg_col'] = 'dc-colorPicker-adv-phone-btn-icon-bg-col';
      ls_elem_id_no_cc_advanced['theme_adv_phone_btn_icon_bg_hover_col'] = 'dc-colorPicker-adv-phone-btn-icon-bg-hover-col';
      /* leftsidebarbgcolor - background color  */
      ls_elem_id_no_cc_advanced['theme_adv_leftsidebarbgcolor_start_col'] = 'dc-colorPicker-adv-leftsidebarbgcolor-start-col';
      ls_elem_id_no_cc_advanced['theme_adv_leftsidebarbgcolor_end_col'] = 'dc-colorPicker-adv-leftsidebarbgcolor-end-col';
      ls_elem_id_no_cc_advanced['theme_adv_leftsidebarbgcolor_stop_perc'] = 'dc-colorPicker-adv-leftsidebarbgcolor-stop-perc';
      ls_elem_id_no_cc_advanced['theme_adv_leftsidebarbgcolor_gradient_deg'] = 'dc-colorPicker-adv-leftsidebarbgcolor-gradient-deg';
      /* mainnav - text hover, icon hover, hover-active background colors */
      ls_elem_id_no_cc_advanced['theme_adv_mainnav_text_hover_color'] = 'dc-colorPicker-adv-mainnav-text-hover-color';
      ls_elem_id_no_cc_advanced['theme_adv_mainnav_icon_hover_color'] = 'dc-colorPicker-adv-mainnav-icon-hover-color';
      ls_elem_id_no_cc_advanced['theme_adv_mainnav_hover_active_bg_color'] = 'dc-colorPicker-adv-mainnav-hover-active-bg-color';
      /////////////
      /* topnavbgcolor - background color  */
      ls_elem_id_no_cc_advanced['theme_adv_topnavbgcolor_start_col'] = 'dc-colorPicker-adv-topnavbgcolor-start-col';
      ls_elem_id_no_cc_advanced['theme_adv_topnavbgcolor_end_col'] = 'dc-colorPicker-adv-topnavbgcolor-end-col';
      ls_elem_id_no_cc_advanced['theme_adv_topnavbgcolor_stop_perc'] = 'dc-colorPicker-adv-topnavbgcolor-stop-perc';
      ls_elem_id_no_cc_advanced['theme_adv_topnavbgcolor_gradient_deg'] = 'dc-colorPicker-adv-topnavbgcolor-gradient-deg';
      /* topnav - text hover, icon hover, hover-active background colors */
      ls_elem_id_no_cc_advanced['theme_adv_topnav_text_hover_color'] = 'dc-colorPicker-adv-topnav-text-hover-color';
      ls_elem_id_no_cc_advanced['theme_adv_topnav_icon_hover_color'] = 'dc-colorPicker-adv-topnav-icon-hover-color';
      ls_elem_id_no_cc_advanced['theme_adv_topnav_hover_active_bg_color'] = 'dc-colorPicker-adv-topnav-hover-active-bg-color';
      /////////////
      /* bodycontent - background color  */
      ls_elem_id_no_cc_advanced['theme_adv_bodycontent_start_col'] = 'dc-colorPicker-adv-bodycontent-start-col';
      ls_elem_id_no_cc_advanced['theme_adv_bodycontent_end_col'] = 'dc-colorPicker-adv-bodycontent-end-col';
      ls_elem_id_no_cc_advanced['theme_adv_bodycontent_stop_perc'] = 'dc-colorPicker-adv-bodycontent-stop-perc';
      ls_elem_id_no_cc_advanced['theme_adv_bodycontent_gradient_deg'] = 'dc-colorPicker-adv-bodycontent-gradient-deg';
      /* bodycontent - background color  */
      ls_elem_id_no_cc_advanced['theme_adv_bodycontent_text_col'] = 'dc-colorPicker-adv-bodycontent-text-col';
      ls_elem_id_no_cc_advanced['theme_adv_link_text_col'] = 'dc-colorPicker-adv-link-text-col';
      /* bodycontent - h1 h2 color & size   */
      ls_elem_id_no_cc_advanced['theme_adv_bodycontent_h1_text_col'] = 'dc-colorPicker-adv-bodycontent-h1-text-col';
      ls_elem_id_no_cc_advanced['theme_adv_bodycontent_h2_text_col'] = 'dc-colorPicker-adv-bodycontent-h2-text-col';
      ls_elem_id_no_cc_advanced['theme_adv_bodycontent_h1_text_size'] = 'dc-colorPicker-adv-bodycontent-h1-text-size';
      ls_elem_id_no_cc_advanced['theme_adv_bodycontent_h2_text_size'] = 'dc-colorPicker-adv-bodycontent-h2-text-size';
      /* adv primary button */
      ls_elem_id_no_cc_advanced['theme_adv_primary_btn_bgcol'] = 'dc-colorPicker-adv-primary-btn-bgcol';
      ls_elem_id_no_cc_advanced['theme_adv_primary_btn_bg_h_col'] = 'dc-colorPicker-adv-primary-btn-bg-h-col';
      ls_elem_id_no_cc_advanced['theme_adv_primary_btn_txtcol'] = 'dc-colorPicker-adv-primary-btn-txtcol';
      ls_elem_id_no_cc_advanced['theme_adv_primary_btn_txt_h_col'] = 'dc-colorPicker-adv-primary-btn-txt-h-col';
      ls_elem_id_no_cc_advanced['theme_adv_primary_btn_bdrcol'] = 'dc-colorPicker-adv-primary-btn-bdrcol';
      ls_elem_id_no_cc_advanced['theme_adv_primary_btn_bdr_h_col'] = 'dc-colorPicker-adv-primary-btn-bdr-h-col';
      ls_elem_id_no_cc_advanced['theme_adv_primary_btn_radius'] = 'dc-colorPicker-adv-primary-btn-radius';
      /* secondary adv buttons */
      ls_elem_id_no_cc_advanced['theme_adv_secondary_btn_bgcol'] = 'dc-colorPicker-adv-secondary-btn-bgcol';
      ls_elem_id_no_cc_advanced['theme_adv_secondary_btn_bg_h_col'] = 'dc-colorPicker-adv-secondary-btn-bg-h-col';
      ls_elem_id_no_cc_advanced['theme_adv_secondary_btn_txtcol'] = 'dc-colorPicker-adv-secondary-btn-txtcol';
      ls_elem_id_no_cc_advanced['theme_adv_secondary_btn_txt_h_col'] = 'dc-colorPicker-adv-secondary-btn-txt-h-col';
      ls_elem_id_no_cc_advanced['theme_adv_secondary_btn_bdrcol'] = 'dc-colorPicker-adv-secondary-btn-bdrcol';
      ls_elem_id_no_cc_advanced['theme_adv_secondary_btn_bdr_h_col'] = 'dc-colorPicker-adv-secondary-btn-bdr-h-col';
      ls_elem_id_no_cc_advanced['theme_adv_secondary_btn_radius'] = 'dc-colorPicker-adv-secondary-btn-radius';
      /* default adv button */
      ls_elem_id_no_cc_advanced['theme_adv_default_btn_bgcol'] = 'dc-colorPicker-adv-default-btn-bgcol';
      ls_elem_id_no_cc_advanced['theme_adv_default_btn_bg_h_col'] = 'dc-colorPicker-adv-default-btn-bg-h-col';
      ls_elem_id_no_cc_advanced['theme_adv_default_btn_txtcol'] = 'dc-colorPicker-adv-default-btn-txtcol';
      ls_elem_id_no_cc_advanced['theme_adv_default_btn_txt_h_col'] = 'dc-colorPicker-adv-default-btn-txt-h-col';
      ls_elem_id_no_cc_advanced['theme_adv_default_btn_bdrcol'] = 'dc-colorPicker-adv-default-btn-bdrcol';
      ls_elem_id_no_cc_advanced['theme_adv_default_btn_bdr_h_col'] = 'dc-colorPicker-adv-default-btn-bdr-h-col';
      ls_elem_id_no_cc_advanced['theme_adv_default_btn_radius'] = 'dc-colorPicker-adv-default-btn-radius';
      /* default_light adv button */
      ls_elem_id_no_cc_advanced['theme_adv_default_light_btn_bgcol'] = 'dc-colorPicker-adv-default_light-btn-bgcol';
      ls_elem_id_no_cc_advanced['theme_adv_default_light_btn_bg_h_col'] = 'dc-colorPicker-adv-default_light-btn-bg-h-col';
      ls_elem_id_no_cc_advanced['theme_adv_default_light_btn_txtcol'] = 'dc-colorPicker-adv-default_light-btn-txtcol';
      ls_elem_id_no_cc_advanced['theme_adv_default_light_btn_txt_h_col'] = 'dc-colorPicker-adv-default_light-btn-txt-h-col';
      ls_elem_id_no_cc_advanced['theme_adv_default_light_btn_bdrcol'] = 'dc-colorPicker-adv-default_light-btn-bdrcol';
      ls_elem_id_no_cc_advanced['theme_adv_default_light_btn_bdr_h_col'] = 'dc-colorPicker-adv-default_light-btn-bdr-h-col';
      ls_elem_id_no_cc_advanced['theme_adv_default_light_btn_radius'] = 'dc-colorPicker-adv-default_light-btn-radius';
      /* login form */
      ls_elem_id_no_cc_advanced['theme_adv_input_bgcol'] = 'dc-colorPicker-adv-input-bgcol';
      ls_elem_id_no_cc_advanced['theme_adv_input_txtcol'] = 'dc-colorPicker-adv-input-txtcol';
      ls_elem_id_no_cc_advanced['theme_adv_input_iconcol'] = 'dc-colorPicker-adv-input-iconcol';
      ls_elem_id_no_cc_advanced['theme_adv_input_bdrcol'] = 'dc-colorPicker-adv-input-bdrcol';
      ls_elem_id_no_cc_advanced['theme_adv_input_bdrhover_col'] = 'dc-colorPicker-adv-input-bdrhover-col';
      ls_elem_id_no_cc_advanced['theme_adv_input_radius_col'] = 'dc-colorPicker-adv-input-radius';
      return ls_elem_id_no_cc_advanced;
    };
    ///// ls cc elements obj general
    const get_ls_elem_id_cc_general = () => {
      let ls_elem_id_cc_general = {};
      //// general settings elements
      ls_elem_id_cc_general['theme_name_primary_col'] = 'dc-colorCode-primary';
      ls_elem_id_cc_general['theme_name_primary_bgcol'] = 'dc-colorCode-primarybg';
      ls_elem_id_cc_general['theme_name_gradient_bgcol'] = 'dc-colorCode-bg-gradient';
      ls_elem_id_cc_general['theme_name_leftsidebar_txtcol'] = 'dc-colorCode-leftsidebar-txtcol';
      ls_elem_id_cc_general['theme_name_leftsidebar_iconcol'] = 'dc-colorCode-leftsidebar-iconcol';
      return ls_elem_id_cc_general;
    };
    ///// ls cc elements obj advanced
    const get_ls_elem_id_cc_advanced = () => {
      let ls_elem_id_cc_advanced = {};
      /* headerbgcolor - Header background color  */
      ls_elem_id_cc_advanced['theme_adv_headerbgcolor_start_col'] = 'dc-colorCode-adv-headerbgcolor-start-col';
      ls_elem_id_cc_advanced['theme_adv_headerbgcolor_end_col'] = 'dc-colorCode-adv-headerbgcolor-end-col';
      /* headercontrol button - profile  */
      ls_elem_id_cc_advanced['theme_adv_profile_btn_icon_col'] = 'dc-colorCode-adv-profile-btn-icon-col';
      ls_elem_id_cc_advanced['theme_adv_profile_btn_icon_hover_col'] = 'dc-colorCode-adv-profile-btn-icon-hover-col';
      ls_elem_id_cc_advanced['theme_adv_profile_btn_icon_bg_col'] = 'dc-colorCode-adv-profile-btn-icon-bg-col';
      ls_elem_id_cc_advanced['theme_adv_profile_btn_icon_bg_hover_col'] = 'dc-colorCode-adv-profile-btn-icon-bg-hover-col';
      /* headercontrol button - notification  */
      ls_elem_id_cc_advanced['theme_adv_notification_btn_icon_col'] = 'dc-colorCode-adv-notification-btn-icon-col';
      ls_elem_id_cc_advanced['theme_adv_notification_btn_icon_hover_col'] = 'dc-colorCode-adv-notification-btn-icon-hover-col';
      ls_elem_id_cc_advanced['theme_adv_notification_btn_icon_bg_col'] = 'dc-colorCode-adv-notification-btn-icon-bg-col';
      ls_elem_id_cc_advanced['theme_adv_notification_btn_icon_bg_hover_col'] = 'dc-colorCode-adv-notification-btn-icon-bg-hover-col';
      /* headercontrol button - help  - option btn*/
      ls_elem_id_cc_advanced['theme_adv_help_btn_icon_col'] = 'dc-colorCode-adv-help-btn-icon-col';
      ls_elem_id_cc_advanced['theme_adv_help_btn_icon_hover_col'] = 'dc-colorCode-adv-help-btn-icon-hover-col';
      ls_elem_id_cc_advanced['theme_adv_help_btn_icon_bg_col'] = 'dc-colorCode-adv-help-btn-icon-bg-col';
      ls_elem_id_cc_advanced['theme_adv_help_btn_icon_bg_hover_col'] = 'dc-colorCode-adv-help-btn-icon-bg-hover-col';
      /* headercontrol button - viewchangelogs  - darkmode btn*/
      ls_elem_id_cc_advanced['theme_adv_viewchangelogs_btn_icon_col'] = 'dc-colorCode-adv-viewchangelogs-btn-icon-col';
      ls_elem_id_cc_advanced['theme_adv_viewchangelogs_btn_icon_hover_col'] = 'dc-colorCode-adv-viewchangelogs-btn-icon-hover-col';
      ls_elem_id_cc_advanced['theme_adv_viewchangelogs_btn_icon_bg_col'] = 'dc-colorCode-adv-viewchangelogs-btn-icon-bg-col';
      ls_elem_id_cc_advanced['theme_adv_viewchangelogs_btn_icon_bg_hover_col'] = 'dc-colorCode-adv-viewchangelogs-btn-icon-bg-hover-col';
      /* headercontrol button - phone - home btn */
      ls_elem_id_cc_advanced['theme_adv_phone_btn_icon_col'] = 'dc-colorCode-one-btn-icon-col';
      ls_elem_id_cc_advanced['theme_adv_phone_btn_icon_hover_col'] = 'dc-colorCode-adv-phone-btn-icon-hover-col';
      ls_elem_id_cc_advanced['theme_adv_phone_btn_icon_bg_col'] = 'dc-colorCode-adv-phone-btn-icon-bg-col';
      ls_elem_id_cc_advanced['theme_adv_phone_btn_icon_bg_hover_col'] = 'dc-colorCode-adv-phone-btn-icon-bg-hover-col';
      /* leftsidebarbgcolor - background color  */
      ls_elem_id_cc_advanced['theme_adv_leftsidebarbgcolor_start_col'] = 'dc-colorCode-adv-leftsidebarbgcolor-start-col';
      ls_elem_id_cc_advanced['theme_adv_leftsidebarbgcolor_end_col'] = 'dc-colorCode-adv-leftsidebarbgcolor-end-col';
      /* mainnav - text hover, icon hover, hover-active background colors */
      ls_elem_id_cc_advanced['theme_adv_mainnav_text_hover_color'] = 'dc-colorCode-adv-mainnav-text-hover-color';
      ls_elem_id_cc_advanced['theme_adv_mainnav_icon_hover_color'] = 'dc-colorCode-adv-mainnav-icon-hover-color';
      ls_elem_id_cc_advanced['theme_adv_mainnav_hover_active_bg_color'] = 'dc-colorCode-adv-mainnav-hover-active-bg-color';
      //////////////////
      /* topnavbgcolor - background color  */
      ls_elem_id_cc_advanced['theme_adv_topnavbgcolor_start_col'] = 'dc-colorCode-adv-topnavbgcolor-start-col';
      ls_elem_id_cc_advanced['theme_adv_topnavbgcolor_end_col'] = 'dc-colorCode-adv-topnavbgcolor-end-col';
      /* topnav - text hover, icon hover, hover-active background colors */
      ls_elem_id_cc_advanced['theme_adv_topnav_text_hover_color'] = 'dc-colorCode-adv-topnav-text-hover-color';
      ls_elem_id_cc_advanced['theme_adv_topnav_icon_hover_color'] = 'dc-colorCode-adv-topnav-icon-hover-color';
      ls_elem_id_cc_advanced['theme_adv_topnav_hover_active_bg_color'] = 'dc-colorCode-adv-topnav-hover-active-bg-color';
      //////////////////
      /* bodycontent - background color  */
      ls_elem_id_cc_advanced['theme_adv_bodycontent_start_col'] = 'dc-colorCode-adv-bodycontent-start-col';
      ls_elem_id_cc_advanced['theme_adv_bodycontent_end_col'] = 'dc-colorCode-adv-bodycontent-end-col';
      /* bodycontent - text color */
      ls_elem_id_cc_advanced['theme_adv_bodycontent_text_col'] = 'dc-colorCode-adv-bodycontent-text-col';
      ls_elem_id_cc_advanced['theme_adv_link_text_col'] = 'dc-colorCode-adv-link-text-col';
      /* bodycontent - h1 h2 color & size   */
      ls_elem_id_cc_advanced['theme_adv_bodycontent_h1_text_col'] = 'dc-colorCode-adv-bodycontent-h1-text-col';
      ls_elem_id_cc_advanced['theme_adv_bodycontent_h2_text_col'] = 'dc-colorCode-adv-bodycontent-h2-text-col';
      /* primary adv button */
      ls_elem_id_cc_advanced['theme_adv_primary_btn_bgcol'] = 'dc-colorCode-adv-primary-btn-bgcol';
      ls_elem_id_cc_advanced['theme_adv_primary_btn_bg_h_col'] = 'dc-colorCode-adv-primary-btn-bg-h-col';
      ls_elem_id_cc_advanced['theme_adv_primary_btn_txtcol'] = 'dc-colorCode-adv-primary-btn-txtcol';
      ls_elem_id_cc_advanced['theme_adv_primary_btn_txt_h_col'] = 'dc-colorCode-adv-primary-btn-txt-h-col';
      ls_elem_id_cc_advanced['theme_adv_primary_btn_bdrcol'] = 'dc-colorCode-adv-primary-btn-bdrcol';
      ls_elem_id_cc_advanced['theme_adv_primary_btn_bdr_h_col'] = 'dc-colorCode-adv-primary-btn-bdr-h-col';
      /* secondary adv buttons */
      ls_elem_id_cc_advanced['theme_adv_secondary_btn_bgcol'] = 'dc-colorCode-adv-secondary-btn-bgcol';
      ls_elem_id_cc_advanced['theme_adv_secondary_btn_bg_h_col'] = 'dc-colorCode-adv-secondary-btn-bg-h-col';
      ls_elem_id_cc_advanced['theme_adv_secondary_btn_txtcol'] = 'dc-colorCode-adv-secondary-btn-txtcol';
      ls_elem_id_cc_advanced['theme_adv_secondary_btn_txt_h_col'] = 'dc-colorCode-adv-secondary-btn-txt-h-col';
      ls_elem_id_cc_advanced['theme_adv_secondary_btn_bdrcol'] = 'dc-colorCode-adv-secondary-btn-bdrcol';
      ls_elem_id_cc_advanced['theme_adv_secondary_btn_bdr_h_col'] = 'dc-colorCode-adv-secondary-btn-bdr-h-col';
      /* default adv button */
      ls_elem_id_cc_advanced['theme_adv_default_btn_bgcol'] = 'dc-colorCode-adv-default-btn-bgcol';
      ls_elem_id_cc_advanced['theme_adv_default_btn_bg_h_col'] = 'dc-colorCode-adv-default-btn-bg-h-col';
      ls_elem_id_cc_advanced['theme_adv_default_btn_txtcol'] = 'dc-colorCode-adv-default-btn-txtcol';
      ls_elem_id_cc_advanced['theme_adv_default_btn_txt_h_col'] = 'dc-colorCode-adv-default-btn-txt-h-col';
      ls_elem_id_cc_advanced['theme_adv_default_btn_bdrcol'] = 'dc-colorCode-adv-default-btn-bdrcol';
      ls_elem_id_cc_advanced['theme_adv_default_btn_bdr_h_col'] = 'dc-colorCode-adv-default-btn-bdr-h-col';
      /* default_light adv button */
      ls_elem_id_cc_advanced['theme_adv_default_light_btn_bgcol'] = 'dc-colorCode-adv-default_light-btn-bgcol';
      ls_elem_id_cc_advanced['theme_adv_default_light_btn_bg_h_col'] = 'dc-colorCode-adv-default_light-btn-bg-h-col';
      ls_elem_id_cc_advanced['theme_adv_default_light_btn_txtcol'] = 'dc-colorCode-adv-default_light-btn-txtcol';
      ls_elem_id_cc_advanced['theme_adv_default_light_btn_txt_h_col'] = 'dc-colorCode-adv-default_light-btn-txt-h-col';
      ls_elem_id_cc_advanced['theme_adv_default_light_btn_bdrcol'] = 'dc-colorCode-adv-default_light-btn-bdrcol';
      ls_elem_id_cc_advanced['theme_adv_default_light_btn_bdr_h_col'] = 'dc-colorCode-adv-default_light-btn-bdr-h-col';
      /* login form */
      ls_elem_id_cc_advanced['theme_adv_input_bgcol'] = 'dc-colorCode-adv-input-bgcol';
      ls_elem_id_cc_advanced['theme_adv_input_txtcol'] = 'dc-colorCode-adv-input-txtcol';
      ls_elem_id_cc_advanced['theme_adv_input_iconcol'] = 'dc-colorCode-adv-input-iconcol';
      ls_elem_id_cc_advanced['theme_adv_input_bdrcol'] = 'dc-colorCode-adv-input-bdrcol';
      ls_elem_id_cc_advanced['theme_adv_input_bdrhover_col'] = 'dc-colorCode-adv-input-bdrhover-col';
      ls_elem_id_cc_advanced['theme_adv_input_radius_col'] = 'dc-colorCode-adv-input-radius';
      return ls_elem_id_cc_advanced;
    };
    ///// ls root vars obj general
    const get_ls_rvars_general = () => {
      let ls_rvars_general = {};
      /////General Settings
      ls_rvars_general['theme_name_primary_col'] = '--hlpt-primary-theme-color';
      ls_rvars_general['theme_name_primary_col_tint'] = '--hlpt-primary-theme-color-tint';
      ls_rvars_general['theme_name_primary_bgcol'] = '--hlpt-primary-theme-bg-color';
      ls_rvars_general['theme_name_primary_bgcol_tint'] = '--hlpt-primary-theme-bg-color-tint';
      ls_rvars_general['theme_name_gradient_bgcol'] = '--hlpt-secondary-theme-bg-color';
      ls_rvars_general['theme_name_gradient_bgcol_tint'] = '--hlpt-secondary-theme-bg-color-tint';
      ls_rvars_general['theme_name_leftsidebar_txtcol'] = '--hlpt-left-nav-color';
      ls_rvars_general['theme_name_leftsidebar_iconcol'] = '--hlpt-left-nav-icon-color';
  
      ls_rvars_general['theme_font_family'] = '--dynamic-font-family';
      ls_rvars_general['theme_font_family_h1'] = '--dynamic-font-family-h1';
      ls_rvars_general['theme_font_family_h2'] = '--dynamic-font-family-h2';
      ls_rvars_general['theme_font_family_h3'] = '--dynamic-font-family-h3';
      ls_rvars_general['theme_font_family_h4'] = '--dynamic-font-family-h4';
      ls_rvars_general['theme_font_family_sidemenu'] = '--dynamic-font-family-sidemenu';
      ls_rvars_general['theme_font_family_topmenu'] = '--dynamic-font-family-topmenu';
      return ls_rvars_general;
    };
    ///// ls root vars obj advanced
    const get_ls_rvars_advanced = () => {
      let ls_rvars_advanced = {};
      /* headerbgcolor - Header background color  */
      ls_rvars_advanced['theme_adv_headerbgcolor_start_col'] = '--hlpt-adv-headerbgcolor-start-col';
      ls_rvars_advanced['theme_adv_headerbgcolor_end_col'] = '--hlpt-adv-headerbgcolor-end-col';
      ls_rvars_advanced['theme_adv_headerbgcolor_stop_perc'] = '--hlpt-adv-headerbgcolor-stop-perc';
      ls_rvars_advanced['theme_adv_headerbgcolor_gradient_deg'] = '--hlpt-adv-headerbgcolor-gradient-deg';
      /* headercontrol button - profile  */
      ls_rvars_advanced['theme_adv_profile_btn_icon_col'] = '--hlpt-adv-profile-btn-icon-col';
      ls_rvars_advanced['theme_adv_profile_btn_icon_hover_col'] = '--hlpt-adv-profile-btn-icon-hover-col';
      ls_rvars_advanced['theme_adv_profile_btn_icon_bg_col'] = '--hlpt-adv-profile-btn-icon-bg-col';
      ls_rvars_advanced['theme_adv_profile_btn_icon_bg_hover_col'] = '--hlpt-adv-profile-btn-icon-bg-hover-col';
      /* headercontrol button - notification  */
      ls_rvars_advanced['theme_adv_notification_btn_icon_col'] = '--hlpt-adv-notification-btn-icon-col';
      ls_rvars_advanced['theme_adv_notification_btn_icon_hover_col'] = '--hlpt-adv-notification-btn-icon-hover-col';
      ls_rvars_advanced['theme_adv_notification_btn_icon_bg_col'] = '--hlpt-adv-notification-btn-icon-bg-col';
      ls_rvars_advanced['theme_adv_notification_btn_icon_bg_hover_col'] = '--hlpt-adv-notification-btn-icon-bg-hover-col';
      /* headercontrol button - help  - options btn*/
      ls_rvars_advanced['theme_adv_help_btn_icon_col'] = '--hlpt-adv-help-btn-icon-col';
      ls_rvars_advanced['theme_adv_help_btn_icon_hover_col'] = '--hlpt-adv-help-btn-icon-hover-col';
      ls_rvars_advanced['theme_adv_help_btn_icon_bg_col'] = '--hlpt-adv-help-btn-icon-bg-col';
      ls_rvars_advanced['theme_adv_help_btn_icon_bg_hover_col'] = '--hlpt-adv-help-btn-icon-bg-hover-col';
      /* headercontrol button - viewchangelogs  - darkmode btn */
      ls_rvars_advanced['theme_adv_viewchangelogs_btn_icon_col'] = '--hlpt-adv-viewchangelogs-btn-icon-col';
      ls_rvars_advanced['theme_adv_viewchangelogs_btn_icon_hover_col'] = '--hlpt-adv-viewchangelogs-btn-icon-hover-col';
      ls_rvars_advanced['theme_adv_viewchangelogs_btn_icon_bg_col'] = '--hlpt-adv-viewchangelogs-btn-icon-bg-col';
      ls_rvars_advanced['theme_adv_viewchangelogs_btn_icon_bg_hover_col'] = '--hlpt-adv-viewchangelogs-btn-icon-bg-hover-col';
      /* headercontrol button - phone - home btn */
      ls_rvars_advanced['theme_adv_phone_btn_icon_col'] = '--hlpt-adv-phone-btn-icon-col';
      ls_rvars_advanced['theme_adv_phone_btn_icon_hover_col'] = '--hlpt-adv-phone-btn-icon-hover-col';
      ls_rvars_advanced['theme_adv_phone_btn_icon_bg_col'] = '--hlpt-adv-phone-btn-icon-bg-col';
      ls_rvars_advanced['theme_adv_phone_btn_icon_bg_hover_col'] = '--hlpt-adv-phone-btn-icon-bg-hover-col';
      /* leftsidebarbgcolor - background color  */
      ls_rvars_advanced['theme_adv_leftsidebarbgcolor_start_col'] = '--hlpt-adv-leftsidebarbgcolor-start-col';
      ls_rvars_advanced['theme_adv_leftsidebarbgcolor_end_col'] = '--hlpt-adv-leftsidebarbgcolor-end-col';
      ls_rvars_advanced['theme_adv_leftsidebarbgcolor_stop_perc'] = '--hlpt-adv-leftsidebarbgcolor-stop-perc';
      ls_rvars_advanced['theme_adv_leftsidebarbgcolor_gradient_deg'] = '--hlpt-adv-leftsidebarbgcolor-gradient-deg';
      /* mainnav - text hover, icon hover, hover-active background colors */
      ls_rvars_advanced['theme_adv_mainnav_text_hover_color'] = '--hlpt-adv-mainnav-text-hover-color';
      ls_rvars_advanced['theme_adv_mainnav_icon_hover_color'] = '--hlpt-adv-mainnav-icon-hover-color';
      ls_rvars_advanced['theme_adv_mainnav_hover_active_bg_color'] = '--hlpt-adv-mainnav-hover-active-bg-color';
      ///////////////////
      /* topnavbgcolor - background color  */
      ls_rvars_advanced['theme_adv_topnavbgcolor_start_col'] = '--hlpt-adv-topnavbgcolor-start-col';
      ls_rvars_advanced['theme_adv_topnavbgcolor_end_col'] = '--hlpt-adv-topnavbgcolor-end-col';
      ls_rvars_advanced['theme_adv_topnavbgcolor_stop_perc'] = '--hlpt-adv-topnavbgcolor-stop-perc';
      ls_rvars_advanced['theme_adv_topnavbgcolor_gradient_deg'] = '--hlpt-adv-topnavbgcolor-gradient-deg';
      /* topnav - text hover, icon hover, hover-active background colors */
      ls_rvars_advanced['theme_adv_topnav_text_hover_color'] = '--hlpt-adv-topnav-text-hover-color';
      ls_rvars_advanced['theme_adv_topnav_icon_hover_color'] = '--hlpt-adv-topnav-icon-hover-color';
      ls_rvars_advanced['theme_adv_topnav_hover_active_bg_color'] = '--hlpt-adv-topnav-hover-active-bg-color';
      ///////////////////
      /* bodycontent - background color  */
      ls_rvars_advanced['theme_adv_bodycontent_start_col'] = '--hlpt-adv-bodycontent-start-col';
      ls_rvars_advanced['theme_adv_bodycontent_end_col'] = '--hlpt-adv-bodycontent-end-col';
      ls_rvars_advanced['theme_adv_bodycontent_stop_perc'] = '--hlpt-adv-bodycontent-stop-perc';
      ls_rvars_advanced['theme_adv_bodycontent_gradient_deg'] = '--hlpt-adv-bodycontent-gradient-deg';
      /* bodycontent - text color */
      ls_rvars_advanced['theme_adv_bodycontent_text_col'] = '--hlpt-adv-bodycontent-text-col';
      ls_rvars_advanced['theme_adv_link_text_col'] = '--hlpt-adv-link-text-col';
      /* bodycontent - h1 h2 color & size   */
      ls_rvars_advanced['theme_adv_bodycontent_h1_text_col'] = '--hlpt-adv-bodycontent-h1-text-col';
      ls_rvars_advanced['theme_adv_bodycontent_h2_text_col'] = '--hlpt-adv-bodycontent-h2-text-col';
      ls_rvars_advanced['theme_adv_bodycontent_h1_text_size'] = '--hlpt-adv-bodycontent-h1-text-size';
      ls_rvars_advanced['theme_adv_bodycontent_h2_text_size'] = '--hlpt-adv-bodycontent-h2-text-size';
      /* primary adv button */
      ls_rvars_advanced['theme_adv_primary_btn_bgcol'] = '--hlpt-adv-primary-btn-bg-color';
      ls_rvars_advanced['theme_adv_primary_btn_bg_h_col'] = '--hlpt-adv-primary-btn-bg-hover-color';
      ls_rvars_advanced['theme_adv_primary_btn_txtcol'] = '--hlpt-adv-primary-btn-text-color';
      ls_rvars_advanced['theme_adv_primary_btn_txt_h_col'] = '--hlpt-adv-primary-btn-text-hover-color';
      ls_rvars_advanced['theme_adv_primary_btn_bdrcol'] = '--hlpt-adv-primary-btn-border-color';
      ls_rvars_advanced['theme_adv_primary_btn_bdr_h_col'] = '--hlpt-adv-primary-btn-border-hover-color';
      ls_rvars_advanced['theme_adv_primary_btn_radius'] = '--hlpt-adv-primary-btn-radius';
      /* secondary adv buttons */
      ls_rvars_advanced['theme_adv_secondary_btn_bgcol'] = '--hlpt-adv-secondary-btn-bg-color';
      ls_rvars_advanced['theme_adv_secondary_btn_bg_h_col'] = '--hlpt-adv-secondary-btn-bg-hover-color';
      ls_rvars_advanced['theme_adv_secondary_btn_txtcol'] = '--hlpt-adv-secondary-btn-text-color';
      ls_rvars_advanced['theme_adv_secondary_btn_txt_h_col'] = '--hlpt-adv-secondary-btn-text-hover-color';
      ls_rvars_advanced['theme_adv_secondary_btn_bdrcol'] = '--hlpt-adv-secondary-btn-border-color';
      ls_rvars_advanced['theme_adv_secondary_btn_bdr_h_col'] = '--hlpt-adv-secondary-btn-border-hover-color';
      ls_rvars_advanced['theme_adv_secondary_btn_radius'] = '--hlpt-adv-secondary-btn-radius';
      /* default adv button */
      ls_rvars_advanced['theme_adv_default_btn_bgcol'] = '--hlpt-adv-default-btn-bg-color';
      ls_rvars_advanced['theme_adv_default_btn_bg_h_col'] = '--hlpt-adv-default-btn-bg-hover-color';
      ls_rvars_advanced['theme_adv_default_btn_txtcol'] = '--hlpt-adv-default-btn-text-color';
      ls_rvars_advanced['theme_adv_default_btn_txt_h_col'] = '--hlpt-adv-default-btn-text-hover-color';
      ls_rvars_advanced['theme_adv_default_btn_bdrcol'] = '--hlpt-adv-default-btn-border-color';
      ls_rvars_advanced['theme_adv_default_btn_bdr_h_col'] = '--hlpt-adv-default-btn-border-hover-color';
      ls_rvars_advanced['theme_adv_default_btn_radius'] = '--hlpt-adv-default-btn-radius';
      /* default_light adv button */
      ls_rvars_advanced['theme_adv_default_light_btn_bgcol'] = '--hlpt-adv-default-light-btn-bg-color';
      ls_rvars_advanced['theme_adv_default_light_btn_bg_h_col'] = '--hlpt-adv-default-light-btn-bg-hover-color';
      ls_rvars_advanced['theme_adv_default_light_btn_txtcol'] = '--hlpt-adv-default-light-btn-text-color';
      ls_rvars_advanced['theme_adv_default_light_btn_txt_h_col'] = '--hlpt-adv-default-light-btn-text-hover-color';
      ls_rvars_advanced['theme_adv_default_light_btn_bdrcol'] = '--hlpt-adv-default-light-btn-border-color';
      ls_rvars_advanced['theme_adv_default_light_btn_bdr_h_col'] = '--hlpt-adv-default-light-btn-border-hover-color';
      ls_rvars_advanced['theme_adv_default_light_btn_radius'] = '--hlpt-adv-default-light-btn-radius';
      /* login form */
      ls_rvars_advanced['theme_adv_input_bgcol'] = '--hlpt-adv-input-bgcol';
      ls_rvars_advanced['theme_adv_input_txtcol'] = '--hlpt-adv-input-txtcol';
      ls_rvars_advanced['theme_adv_input_iconcol'] = '--hlpt-adv-input-iconcol';
      ls_rvars_advanced['theme_adv_input_bdrcol'] = '--hlpt-adv-input-bdrcol';
      ls_rvars_advanced['theme_adv_input_bdrhover_col'] = '--hlpt-adv-input-bdrhover-col';
      ls_rvars_advanced['theme_adv_input_radius_col'] = '--hlpt-adv-input-radius';
      return ls_rvars_advanced;
    };
    // assigncolor another combined rvar elements rvar elemets with ID
    const get_rvar_elements = () => {
      var rvar_elements = {};
      rvar_elements['--hlpt-primary-theme-color'] = 'dc-colorPicker-primary, dc-colorCode-primary';
      rvar_elements['--hlpt-primary-theme-color-tint'] = 'dc-colorPicker-primary';
      rvar_elements['--hlpt-primary-theme-bg-color'] = 'dc-colorPicker-primarybg, dc-colorCode-primarybg';
      rvar_elements['--hlpt-primary-theme-bg-color-tint'] = 'dc-colorPicker-primarybg';
      rvar_elements['--hlpt-secondary-theme-bg-color'] = 'dc-colorPicker-bg-gradient, dc-colorCode-bg-gradient';
      rvar_elements['--hlpt-secondary-theme-bg-color-tint'] = 'dc-colorPicker-bg-gradient';
      rvar_elements['--hlpt-left-nav-color'] = 'dc-colorPicker-leftsidebar-txtcol, dc-colorCode-leftsidebar-txtcol';
      rvar_elements['--hlpt-left-nav-icon-color'] = 'dc-colorPicker-leftsidebar-iconcol, dc-colorCode-leftsidebar-iconcol';
      /* fontfamilies -app  */
      rvar_elements['--dynamic-font-family'] = 'dc-colorPicker-font-family';
      rvar_elements['--dynamic-font-family-h1'] = 'dc-colorPicker-font-family-h1';
      rvar_elements['--dynamic-font-family-h2'] = 'dc-colorPicker-font-family-h2';
      rvar_elements['--dynamic-font-family-h3'] = 'dc-colorPicker-font-family-h3';
      rvar_elements['--dynamic-font-family-h4'] = 'dc-colorPicker-font-family-h4';
      rvar_elements['--dynamic-font-family-sidemenu'] = 'dc-colorPicker-font-family-sidemenu';
      rvar_elements['--dynamic-font-family-topmenu'] = 'dc-colorPicker-font-family-topmenu';
      /* headerbgcolor - Header background color  */
      rvar_elements['--hlpt-adv-headerbgcolor-start-col'] = 'dc-colorPicker-adv-headerbgcolor-start-col, dc-colorCode-adv-headerbgcolor-start-col';
      rvar_elements['--hlpt-adv-headerbgcolor-end-col'] = 'dc-colorPicker-adv-headerbgcolor-end-col, dc-colorCode-adv-headerbgcolor-end-col';
      rvar_elements['--hlpt-adv-headerbgcolor-stop-perc'] = 'dc-colorPicker-adv-headerbgcolor-stop-perc';
      rvar_elements['--hlpt-adv-headerbgcolor-gradient-deg'] = 'dc-colorPicker-adv-headerbgcolor-gradient-deg';
      /* headercontrol button - profile  */
      rvar_elements['--hlpt-adv-profile-btn-icon-col'] = 'dc-colorPicker-adv-profile-btn-icon-col, dc-colorCode-adv-profile-btn-icon-col';
      rvar_elements['--hlpt-adv-profile-btn-icon-hover-col'] = 'dc-colorPicker-adv-profile-btn-icon-hover-col, dc-colorCode-adv-profile-btn-icon-hover-col';
      rvar_elements['--hlpt-adv-profile-btn-icon-bg-col'] = 'dc-colorPicker-adv-profile-btn-icon-bg-col, dc-colorCode-adv-profile-btn-icon-bg-col';
      rvar_elements['--hlpt-adv-profile-btn-icon-bg-hover-col'] = 'dc-colorPicker-adv-profile-btn-icon-bg-hover-col, dc-colorCode-adv-profile-btn-icon-bg-hover-col';
      /* headercontrol button - notification  */
      rvar_elements['--hlpt-adv-notification-btn-icon-col'] = 'dc-colorPicker-adv-notification-btn-icon-col, dc-colorCode-adv-notification-btn-icon-col';
      rvar_elements['--hlpt-adv-notification-btn-icon-hover-col'] = 'dc-colorPicker-adv-notification-btn-icon-hover-col, dc-colorCode-adv-notification-btn-icon-hover-col';
      rvar_elements['--hlpt-adv-notification-btn-icon-bg-col'] = 'dc-colorPicker-adv-notification-btn-icon-bg-col, dc-colorCode-adv-notification-btn-icon-bg-col';
      rvar_elements['--hlpt-adv-notification-btn-icon-bg-hover-col'] = 'dc-colorPicker-adv-notification-btn-icon-bg-hover-col, dc-colorCode-adv-notification-btn-icon-bg-hover-col';
      /* headercontrol button - help - options btn */
      rvar_elements['--hlpt-adv-help-btn-icon-col'] = 'dc-colorPicker-adv-help-btn-icon-col, dc-colorCode-adv-help-btn-icon-col';
      rvar_elements['--hlpt-adv-help-btn-icon-hover-col'] = 'dc-colorPicker-adv-help-btn-icon-hover-col, dc-colorCode-adv-help-btn-icon-hover-col';
      rvar_elements['--hlpt-adv-help-btn-icon-bg-col'] = 'dc-colorPicker-adv-help-btn-icon-bg-col, dc-colorCode-adv-help-btn-icon-bg-col';
      rvar_elements['--hlpt-adv-help-btn-icon-bg-hover-col'] = 'dc-colorPicker-adv-help-btn-icon-bg-hover-col, dc-colorCode-adv-help-btn-icon-bg-hover-col';
      /* headercontrol button - viewchangelogs  darkmode btn*/
      rvar_elements['--hlpt-adv-viewchangelogs-btn-icon-col'] = 'dc-colorPicker-adv-viewchangelogs-btn-icon-col, dc-colorCode-adv-viewchangelogs-btn-icon-col';
      rvar_elements['--hlpt-adv-viewchangelogs-btn-icon-hover-col'] = 'dc-colorPicker-adv-viewchangelogs-btn-icon-hover-col, dc-colorCode-adv-viewchangelogs-btn-icon-hover-col';
      rvar_elements['--hlpt-adv-viewchangelogs-btn-icon-bg-col'] = 'dc-colorPicker-adv-viewchangelogs-btn-icon-bg-col, dc-colorCode-adv-viewchangelogs-btn-icon-bg-col';
      rvar_elements['--hlpt-adv-viewchangelogs-btn-icon-bg-hover-col'] = 'dc-colorPicker-adv-viewchangelogs-btn-icon-bg-hover-col, dc-colorCode-adv-viewchangelogs-btn-icon-bg-hover-col';
      /* headercontrol button - phone  - home btn */
      rvar_elements['--hlpt-adv-phone-btn-icon-col'] = 'dc-colorPicker-adv-phone-btn-icon-col, dc-colorCode-one-btn-icon-col';
      rvar_elements['--hlpt-adv-phone-btn-icon-hover-col'] = 'dc-colorPicker-adv-phone-btn-icon-hover-col, dc-colorCode-adv-phone-btn-icon-hover-col';
      rvar_elements['--hlpt-adv-phone-btn-icon-bg-col'] = 'dc-colorPicker-adv-phone-btn-icon-bg-col, dc-colorCode-adv-phone-btn-icon-bg-col';
      rvar_elements['--hlpt-adv-phone-btn-icon-bg-hover-col'] = 'dc-colorPicker-adv-phone-btn-icon-bg-hover-col, dc-colorCode-adv-phone-btn-icon-bg-hover-col';
      /* leftsidebarbgcolor - background color  */
      rvar_elements['--hlpt-adv-leftsidebarbgcolor-start-col'] = 'dc-colorPicker-adv-leftsidebarbgcolor-start-col, dc-colorCode-adv-leftsidebarbgcolor-start-col';
      rvar_elements['--hlpt-adv-leftsidebarbgcolor-end-col'] = 'dc-colorPicker-adv-leftsidebarbgcolor-end-col, dc-colorCode-adv-leftsidebarbgcolor-end-col';
      rvar_elements['--hlpt-adv-leftsidebarbgcolor-stop-perc'] = 'dc-colorPicker-adv-leftsidebarbgcolor-stop-perc';
      rvar_elements['--hlpt-adv-leftsidebarbgcolor-gradient-deg'] = 'dc-colorPicker-adv-leftsidebarbgcolor-gradient-deg';
      /* mainnav - text hover, icon hover, hover-active background colors */
      rvar_elements['--hlpt-adv-mainnav-text-hover-color'] = 'dc-colorPicker-adv-mainnav-text-hover-color, dc-colorCode-adv-mainnav-text-hover-color';
      rvar_elements['--hlpt-adv-mainnav-icon-hover-color'] = 'dc-colorPicker-adv-mainnav-icon-hover-color, dc-colorCode-adv-mainnav-icon-hover-color';
      rvar_elements['--hlpt-adv-mainnav-hover-active-bg-color'] = 'dc-colorPicker-adv-mainnav-hover-active-bg-color, dc-colorCode-adv-mainnav-hover-active-bg-color';
      //////////////
      /* topnavbgcolor - background color  */
      rvar_elements['--hlpt-adv-topnavbgcolor-start-col'] = 'dc-colorPicker-adv-topnavbgcolor-start-col, dc-colorCode-adv-topnavbgcolor-start-col';
      rvar_elements['--hlpt-adv-topnavbgcolor-end-col'] = 'dc-colorPicker-adv-topnavbgcolor-end-col, dc-colorCode-adv-topnavbgcolor-end-col';
      rvar_elements['--hlpt-adv-topnavbgcolor-stop-perc'] = 'dc-colorPicker-adv-topnavbgcolor-stop-perc';
      rvar_elements['--hlpt-adv-topnavbgcolor-gradient-deg'] = 'dc-colorPicker-adv-topnavbgcolor-gradient-deg';
      /* mainnav - text hover, icon hover, hover-active background colors */
      rvar_elements['--hlpt-adv-topnav-text-hover-color'] = 'dc-colorPicker-adv-topnav-text-hover-color, dc-colorCode-adv-topnav-text-hover-color';
      rvar_elements['--hlpt-adv-topnav-icon-hover-color'] = 'dc-colorPicker-adv-topnav-icon-hover-color, dc-colorCode-adv-topnav-icon-hover-color';
      rvar_elements['--hlpt-adv-topnav-hover-active-bg-color'] = 'dc-colorPicker-adv-topnav-hover-active-bg-color, dc-colorCode-adv-topnav-hover-active-bg-color';
      //////////////
      /* bodycontent - background color  */
      rvar_elements['--hlpt-adv-bodycontent-start-col'] = 'dc-colorPicker-adv-bodycontent-start-col, dc-colorCode-adv-bodycontent-start-col';
      rvar_elements['--hlpt-adv-bodycontent-end-col'] = 'dc-colorPicker-adv-bodycontent-end-col, dc-colorCode-adv-bodycontent-end-col';
      rvar_elements['--hlpt-adv-bodycontent-stop-perc'] = 'dc-colorPicker-adv-bodycontent-stop-perc';
      rvar_elements['--hlpt-adv-bodycontent-gradient-deg'] = 'dc-colorPicker-adv-bodycontent-gradient-deg';
      /* bodycontent - text color */
      rvar_elements['--hlpt-adv-bodycontent-text-col'] = 'dc-colorPicker-adv-bodycontent-text-col, dc-colorCode-adv-bodycontent-text-col';
      rvar_elements['--hlpt-adv-link-text-col'] = 'dc-colorPicker-adv-link-text-col, dc-colorCode-adv-link-text-col';
      /* bodycontent - h1 h2 color & size   */
      rvar_elements['--hlpt-adv-bodycontent-h1-text-col'] = 'dc-colorPicker-adv-bodycontent-h1-text-col, dc-colorCode-adv-bodycontent-h1-text-col';
      rvar_elements['--hlpt-adv-bodycontent-h2-text-col'] = 'dc-colorPicker-adv-bodycontent-h2-text-col, dc-colorCode-adv-bodycontent-h2-text-col';
      rvar_elements['--hlpt-adv-bodycontent-h1-text-size'] = 'dc-colorPicker-adv-bodycontent-h1-text-size';
      rvar_elements['--hlpt-adv-bodycontent-h2-text-size'] = 'dc-colorPicker-adv-bodycontent-h2-text-size';
      /* primary adv button */
      rvar_elements['--hlpt-adv-primary-btn-bg-color'] = 'dc-colorPicker-adv-primary-btn-bgcol, dc-colorCode-adv-primary-btn-bgcol';
      rvar_elements['--hlpt-adv-primary-btn-bg-hover-color'] = 'dc-colorPicker-adv-primary-btn-bg-h-col, dc-colorCode-adv-primary-btn-bg-h-col';
      rvar_elements['--hlpt-adv-primary-btn-text-color'] = 'dc-colorPicker-adv-primary-btn-txtcol, dc-colorCode-adv-primary-btn-txtcol';
      rvar_elements['--hlpt-adv-primary-btn-text-hover-color'] = 'dc-colorPicker-adv-primary-btn-txt-h-col, dc-colorCode-adv-primary-btn-txt-h-col';
      rvar_elements['--hlpt-adv-primary-btn-border-color'] = 'dc-colorPicker-adv-primary-btn-bdrcol, dc-colorCode-adv-primary-btn-bdrcol';
      rvar_elements['--hlpt-adv-primary-btn-border-hover-color'] = 'dc-colorPicker-adv-primary-btn-bdr-h-col, dc-colorCode-adv-primary-btn-bdr-h-col';
      rvar_elements['--hlpt-adv-primary-btn-radius'] = 'dc-colorPicker-adv-primary-btn-radius';
      /* secondary adv buttons */
      rvar_elements['--hlpt-adv-secondary-btn-bg-color'] = 'dc-colorPicker-adv-secondary-btn-bgcol, dc-colorCode-adv-secondary-btn-bgcol';
      rvar_elements['--hlpt-adv-secondary-btn-bg-hover-color'] = 'dc-colorPicker-adv-secondary-btn-bg-h-col, dc-colorCode-adv-secondary-btn-bg-h-col';
      rvar_elements['--hlpt-adv-secondary-btn-text-color'] = 'dc-colorPicker-adv-secondary-btn-txtcol, dc-colorCode-adv-secondary-btn-txtcol';
      rvar_elements['--hlpt-adv-secondary-btn-text-hover-color'] = 'dc-colorPicker-adv-secondary-btn-txt-h-col, dc-colorCode-adv-secondary-btn-txt-h-col';
      rvar_elements['--hlpt-adv-secondary-btn-border-color'] = 'dc-colorPicker-adv-secondary-btn-bdrcol, dc-colorCode-adv-secondary-btn-bdrcol';
      rvar_elements['--hlpt-adv-secondary-btn-border-hover-color'] = 'dc-colorPicker-adv-secondary-btn-bdr-h-col, dc-colorCode-adv-secondary-btn-bdr-h-col';
      rvar_elements['--hlpt-adv-secondary-btn-radius'] = 'dc-colorPicker-adv-secondary-btn-radius';
      /* default adv button */
      rvar_elements['--hlpt-adv-default-btn-bg-color'] = 'dc-colorPicker-adv-default-btn-bgcol, dc-colorCode-adv-default-btn-bgcol';
      rvar_elements['--hlpt-adv-default-btn-bg-hover-color'] = 'dc-colorPicker-adv-default-btn-bg-h-col, dc-colorCode-adv-default-btn-bg-h-col';
      rvar_elements['--hlpt-adv-default-btn-text-color'] = 'dc-colorPicker-adv-default-btn-txtcol, dc-colorCode-adv-default-btn-txtcol';
      rvar_elements['--hlpt-adv-default-btn-text-hover-color'] = 'dc-colorPicker-adv-default-btn-txt-h-col, dc-colorCode-adv-default-btn-txt-h-col';
      rvar_elements['--hlpt-adv-default-btn-border-color'] = 'dc-colorPicker-adv-default-btn-bdrcol, dc-colorCode-adv-default-btn-bdrcol';
      rvar_elements['--hlpt-adv-default-btn-border-hover-color'] = 'dc-colorPicker-adv-default-btn-bdr-h-col, dc-colorCode-adv-default-btn-bdr-h-col';
      rvar_elements['--hlpt-adv-default-btn-radius'] = 'dc-colorPicker-adv-default-btn-radius';
      /* default_light adv button */
      rvar_elements['--hlpt-adv-default-light-btn-bg-color'] = 'dc-colorPicker-adv-default_light-btn-bgcol, dc-colorCode-adv-default_light-btn-bgcol';
      rvar_elements['--hlpt-adv-default-light-btn-bg-hover-color'] = 'dc-colorPicker-adv-default_light-btn-bg-h-col, dc-colorCode-adv-default_light-btn-bg-h-col';
      rvar_elements['--hlpt-adv-default-light-btn-text-color'] = 'dc-colorPicker-adv-default_light-btn-txtcol, dc-colorCode-adv-default_light-btn-txtcol';
      rvar_elements['--hlpt-adv-default-light-btn-text-hover-color'] = 'dc-colorPicker-adv-default_light-btn-txt-h-col, dc-colorCode-adv-default_light-btn-txt-h-col';
      rvar_elements['--hlpt-adv-default-light-btn-border-color'] = 'dc-colorPicker-adv-default_light-btn-bdrcol, dc-colorCode-adv-default_light-btn-bdrcol';
      rvar_elements['--hlpt-adv-default-light-btn-border-hover-color'] = 'dc-colorPicker-adv-default_light-btn-bdr-h-col, dc-colorCode-adv-default_light-btn-bdr-h-col';
      rvar_elements['--hlpt-adv-default-light-btn-radius'] = 'dc-colorPicker-adv-default_light-btn-radius';
      /* login form */
      (rvar_elements['--hlpt-adv-input-bgcol'] = 'dc-colorPicker-adv-input-bgcol'), 'dc-colorCode-adv-input-bgcol';
      (rvar_elements['--hlpt-adv-input-txtcol'] = 'dc-colorPicker-adv-input-txtcol'), 'dc-colorCode-adv-input-txtcol';
      (rvar_elements['--hlpt-adv-input-iconcol'] = 'dc-colorPicker-adv-input-iconcol'), 'dc-colorCode-adv-input-iconcol';
      (rvar_elements['--hlpt-adv-input-bdrcol'] = 'dc-colorPicker-adv-input-bdrcol'), 'dc-colorCode-adv-input-bdrcol';
      (rvar_elements['--hlpt-adv-input-bdrhover-col'] = 'dc-colorPicker-adv-input-bdrhover-col'), 'dc-colorCode-adv-input-bdrhover-col';
      (rvar_elements['--hlpt-adv-input-radius'] = 'dc-colorPicker-adv-input-radius'), 'dc-colorCode-adv-input-radius';
      return rvar_elements;
    };
    /// Rootvars Unit Values
    const get_rootvar_unit_values = () => {
      var unit_values = {};
      unit_values['--hlpt-primary-theme-color'] = 'FF';
      unit_values['--hlpt-primary-theme-color-tint'] = '1A';
      unit_values['--hlpt-primary-theme-bg-color'] = 'FF';
      unit_values['--hlpt-primary-theme-bg-color-tint'] = '1A';
      /* font families */
      unit_values['--dynamic-font-family'] = '';
      unit_values['--dynamic-font-family-h1'] = '';
      unit_values['--dynamic-font-family-h2'] = '';
      unit_values['--dynamic-font-family-h3'] = '';
      unit_values['--dynamic-font-family-h4'] = '';
      unit_values['--dynamic-font-family-sidemenu'] = '';
      unit_values['--dynamic-font-family-topmenu'] = '';
      /* headerbgcolor - Header background color  */
      unit_values['--hlpt-adv-headerbgcolor-start-col'] = 'FF';
      unit_values['--hlpt-adv-headerbgcolor-end-col'] = 'FF';
      unit_values['--hlpt-adv-headerbgcolor-stop-perc'] = '%';
      unit_values['--hlpt-adv-headerbgcolor-gradient-deg'] = 'deg';
      /* headercontrol button - profile  */
      unit_values['--hlpt-adv-profile-btn-icon-col'] = 'FF';
      unit_values['--hlpt-adv-profile-btn-icon-hover-col'] = 'FF';
      unit_values['--hlpt-adv-profile-btn-icon-bg-col'] = 'FF';
      unit_values['--hlpt-adv-profile-btn-icon-bg-hover-col'] = 'FF';
      /* headercontrol button - notification  */
      unit_values['--hlpt-adv-notification-btn-icon-col'] = 'FF';
      unit_values['--hlpt-adv-notification-btn-icon-hover-col'] = 'FF';
      unit_values['--hlpt-adv-notification-btn-icon-bg-col'] = 'FF';
      unit_values['--hlpt-adv-notification-btn-icon-bg-hover-col'] = 'FF';
      /* headercontrol button - help  - options btn */
      unit_values['--hlpt-adv-help-btn-icon-col'] = 'FF';
      unit_values['--hlpt-adv-help-btn-icon-hover-col'] = 'FF';
      unit_values['--hlpt-adv-help-btn-icon-bg-col'] = 'FF';
      unit_values['--hlpt-adv-help-btn-icon-bg-hover-col'] = 'FF';
      /* headercontrol button - viewchangelogs  - darkmode btn */
      unit_values['--hlpt-adv-viewchangelogs-btn-icon-col'] = 'FF';
      unit_values['--hlpt-adv-viewchangelogs-btn-icon-hover-col'] = 'FF';
      unit_values['--hlpt-adv-viewchangelogs-btn-icon-bg-col'] = 'FF';
      unit_values['--hlpt-adv-viewchangelogs-btn-icon-bg-hover-col'] = 'FF';
      /* headercontrol button - phone - home btn */
      unit_values['--hlpt-adv-phone-btn-icon-col'] = 'FF';
      unit_values['--hlpt-adv-phone-btn-icon-hover-col'] = 'FF';
      unit_values['--hlpt-adv-phone-btn-icon-bg-col'] = 'FF';
      unit_values['--hlpt-adv-phone-btn-icon-bg-hover-col'] = 'FF';
      /* leftsidebarbgcolor - background color  */
      unit_values['--hlpt-adv-leftsidebarbgcolor-start-col'] = 'FF';
      unit_values['--hlpt-adv-leftsidebarbgcolor-end-col'] = 'FF';
      unit_values['--hlpt-adv-leftsidebarbgcolor-stop-perc'] = '%';
      unit_values['--hlpt-adv-leftsidebarbgcolor-gradient-deg'] = 'deg';
      /* mainnav - text hover, icon hover, hover-active background colors */
      unit_values['--hlpt-adv-mainnav-text-hover-color'] = 'FF';
      unit_values['--hlpt-adv-mainnav-icon-hover-color'] = 'FF';
      unit_values['--hlpt-adv-mainnav-hover-active-bg-color'] = 'FF';
      //////////////
      /* topnavbgcolor - background color  */
      unit_values['--hlpt-adv-topnavbgcolor-start-col'] = 'FF';
      unit_values['--hlpt-adv-topnavbgcolor-end-col'] = 'FF';
      unit_values['--hlpt-adv-topnavbgcolor-stop-perc'] = '%';
      unit_values['--hlpt-adv-topnavbgcolor-gradient-deg'] = 'deg';
      /* topnav - text hover, icon hover, hover-active background colors */
      unit_values['--hlpt-adv-topnav-text-hover-color'] = 'FF';
      unit_values['--hlpt-adv-topnav-icon-hover-color'] = 'FF';
      unit_values['--hlpt-adv-topnav-hover-active-bg-color'] = 'FF';
      //////////////
      /* bodycontent - background color  */
      unit_values['--hlpt-adv-bodycontent-start-col'] = 'FF';
      unit_values['--hlpt-adv-bodycontent-end-col'] = 'FF';
      unit_values['--hlpt-adv-bodycontent-stop-perc'] = '%';
      unit_values['--hlpt-adv-bodycontent-gradient-deg'] = 'deg';
      /* bodycontent - text color */
      unit_values['--hlpt-adv-bodycontent-text-col'] = 'FF';
      unit_values['--hlpt-adv-link-text-col'] = 'FF';
      /* bodycontent - h1 h2 color & size   */
      unit_values['--hlpt-adv-bodycontent-h1-text-col'] = 'FF';
      unit_values['--hlpt-adv-bodycontent-h2-text-col'] = 'FF';
      unit_values['--hlpt-adv-bodycontent-h1-text-size'] = 'px';
      unit_values['--hlpt-adv-bodycontent-h2-text-size'] = 'px';
      /* primary adv button */
      unit_values['--hlpt-adv-primary-btn-bg-color'] = 'FF';
      unit_values['--hlpt-adv-primary-btn-bg-hover-color'] = 'FF';
      unit_values['--hlpt-adv-primary-btn-text-color'] = 'FF';
      unit_values['--hlpt-adv-primary-btn-text-hover-color'] = 'FF';
      unit_values['--hlpt-adv-primary-btn-border-color'] = 'FF';
      unit_values['--hlpt-adv-primary-btn-border-hover-color'] = 'FF';
      unit_values['--hlpt-adv-primary-btn-radius'] = 'px';
      /* secondary adv buttons */
      unit_values['--hlpt-adv-secondary-btn-bg-color'] = 'FF';
      unit_values['--hlpt-adv-secondary-btn-bg-hover-color'] = 'FF';
      unit_values['--hlpt-adv-secondary-btn-text-color'] = 'FF';
      unit_values['--hlpt-adv-secondary-btn-text-hover-color'] = 'FF';
      unit_values['--hlpt-adv-secondary-btn-border-color'] = 'FF';
      unit_values['--hlpt-adv-secondary-btn-border-hover-color'] = 'FF';
      unit_values['--hlpt-adv-secondary-btn-radius'] = 'px';
      /* default adv button */
      unit_values['--hlpt-adv-default-btn-bg-color'] = 'FF';
      unit_values['--hlpt-adv-default-btn-bg-hover-color'] = 'FF';
      unit_values['--hlpt-adv-default-btn-text-color'] = 'FF';
      unit_values['--hlpt-adv-default-btn-text-hover-color'] = 'FF';
      unit_values['--hlpt-adv-default-btn-border-color'] = 'FF';
      unit_values['--hlpt-adv-default-btn-border-hover-color'] = 'FF';
      unit_values['--hlpt-adv-default-btn-radius'] = 'px';
      /* default_light adv button */
      unit_values['--hlpt-adv-default-light-btn-bg-color'] = 'FF';
      unit_values['--hlpt-adv-default-light-btn-bg-hover-color'] = 'FF';
      unit_values['--hlpt-adv-default-light-btn-text-color'] = 'FF';
      unit_values['--hlpt-adv-default-light-btn-text-hover-color'] = 'FF';
      unit_values['--hlpt-adv-default-light-btn-border-color'] = 'FF';
      unit_values['--hlpt-adv-default-light-btn-border-hover-color'] = 'FF';
      unit_values['--hlpt-adv-default-light-btn-radius'] = 'px';
      /* login form */
      unit_values['--hlpt-adv-input-bgcol'] = 'FF';
      unit_values['--hlpt-adv-input-txtcol'] = 'FF';
      unit_values['--hlpt-adv-input-iconcol'] = 'FF';
      unit_values['--hlpt-adv-input-bdrcol'] = 'FF';
      unit_values['--hlpt-adv-input-bdrhover-col'] = 'FF';
      unit_values['--hlpt-adv-input-radius'] = 'px';
      return unit_values;
    };
    /// Draggable Element IDs
    const get_draggable_elems = () => {
      var draggable_elems = {};
      draggable_elems['generate_script_js'] = 'generate-script-js';
      draggable_elems['generate_script_varcss'] = 'generate-script-varcss';
      draggable_elems['copytoclipboard_btn'] = 'copytoclipboard-btn';
      draggable_elems['unsaved_theme_notifier'] = 'unsaved-theme-notifier';
      draggable_elems['right'] = 'right';
      draggable_elems['left'] = 'left';
      draggable_elems['center'] = 'center';
      return get_draggable_elems;
    };
    ///// ls cleanwhite icon values obj
    const get_cw_icons_values = () => {
      var cw_icons_values = {};
      cw_icons_values['e027'] = 'rocket-launch';
      return cw_icons_values;
    };
    ///// ls reset obj advanced
    const get_reset_btn_obj_advanced = () => {
      var reset_btn_obj = {};
      /* headerbgcolor - Header background color  */
      reset_btn_obj['resetbtn-header-settings'] = [];
      reset_btn_obj['resetbtn-header-settings'].push('theme_adv_headerbgcolor_start_col');
      reset_btn_obj['resetbtn-header-settings'].push('theme_adv_headerbgcolor_end_col');
      reset_btn_obj['resetbtn-header-settings'].push('theme_adv_headerbgcolor_stop_perc');
      reset_btn_obj['resetbtn-header-settings'].push('theme_adv_headerbgcolor_gradient_deg');
      /* profile button - headercontrol    */
      reset_btn_obj['resetbtn-header-settings'].push('theme_adv_profile_btn_icon_col');
      reset_btn_obj['resetbtn-header-settings'].push('theme_adv_profile_btn_icon_hover_col');
      reset_btn_obj['resetbtn-header-settings'].push('theme_adv_profile_btn_icon_bg_col');
      reset_btn_obj['resetbtn-header-settings'].push('theme_adv_profile_btn_icon_bg_hover_col');
      /* notification button - headercontrol    */
      reset_btn_obj['resetbtn-header-settings'].push('theme_adv_notification_btn_icon_col');
      reset_btn_obj['resetbtn-header-settings'].push('theme_adv_notification_btn_icon_hover_col');
      reset_btn_obj['resetbtn-header-settings'].push('theme_adv_notification_btn_icon_bg_col');
      reset_btn_obj['resetbtn-header-settings'].push('theme_adv_notification_btn_icon_bg_hover_col');
      /* help button - headercontrol - options btn   */
      reset_btn_obj['resetbtn-header-settings'].push('theme_adv_help_btn_icon_col');
      reset_btn_obj['resetbtn-header-settings'].push('theme_adv_help_btn_icon_hover_col');
      reset_btn_obj['resetbtn-header-settings'].push('theme_adv_help_btn_icon_bg_col');
      reset_btn_obj['resetbtn-header-settings'].push('theme_adv_help_btn_icon_bg_hover_col');
      /* viewchangelogs button - headercontrol  - darkmode btn  */
      reset_btn_obj['resetbtn-header-settings'].push('theme_adv_viewchangelogs_btn_icon_col');
      reset_btn_obj['resetbtn-header-settings'].push('theme_adv_viewchangelogs_btn_icon_hover_col');
      reset_btn_obj['resetbtn-header-settings'].push('theme_adv_viewchangelogs_btn_icon_bg_col');
      reset_btn_obj['resetbtn-header-settings'].push('theme_adv_viewchangelogs_btn_icon_bg_hover_col');
      /* phone button - headercontrol  - home btn */
      reset_btn_obj['resetbtn-header-settings'].push('theme_adv_phone_btn_icon_col');
      reset_btn_obj['resetbtn-header-settings'].push('theme_adv_phone_btn_icon_hover_col');
      reset_btn_obj['resetbtn-header-settings'].push('theme_adv_phone_btn_icon_bg_col');
      reset_btn_obj['resetbtn-header-settings'].push('theme_adv_phone_btn_icon_bg_hover_col');
      /* leftsidebarbgcolor - Left Sidebar background color  */
      reset_btn_obj['resetbtn-leftsidebar-settings'] = [];
      reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_leftsidebarbgcolor_start_col');
      reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_leftsidebarbgcolor_end_col');
      reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_leftsidebarbgcolor_stop_perc');
      reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_leftsidebarbgcolor_gradient_deg');
      /* mainnav - text hover, icon hover, hover-active background colors   */
      reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_text_hover_color');
      reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_icon_hover_color');
      reset_btn_obj['resetbtn-leftsidebar-settings'].push('theme_adv_mainnav_hover_active_bg_color');
      ///////////////
      /* topnavbgcolor - Top Nav background color  */
      reset_btn_obj['resetbtn-topnav-settings'] = [];
      reset_btn_obj['resetbtn-topnav-settings'].push('theme_adv_topnavbgcolor_start_col');
      reset_btn_obj['resetbtn-topnav-settings'].push('theme_adv_topnavbgcolor_end_col');
      reset_btn_obj['resetbtn-topnav-settings'].push('theme_adv_topnavbgcolor_stop_perc');
      reset_btn_obj['resetbtn-topnav-settings'].push('theme_adv_topnavbgcolor_gradient_deg');
      /* topnav - text hover, icon hover, hover-active background colors   */
      reset_btn_obj['resetbtn-topnav-settings'].push('theme_adv_topnav_text_hover_color');
      reset_btn_obj['resetbtn-topnav-settings'].push('theme_adv_topnav_icon_hover_color');
      reset_btn_obj['resetbtn-topnav-settings'].push('theme_adv_topnav_hover_active_bg_color');
      ///////////////
      /* bodycontent - background color  */
      reset_btn_obj['resetbtn-body-settings'] = [];
      reset_btn_obj['resetbtn-body-settings'].push('theme_adv_bodycontent_start_col');
      reset_btn_obj['resetbtn-body-settings'].push('theme_adv_bodycontent_end_col');
      reset_btn_obj['resetbtn-body-settings'].push('theme_adv_bodycontent_stop_perc');
      reset_btn_obj['resetbtn-body-settings'].push('theme_adv_bodycontent_gradient_deg');
      /* bodycontent - text color  */
      reset_btn_obj['resetbtn-body-settings'].push('theme_adv_bodycontent_text_col');
      reset_btn_obj['resetbtn-body-settings'].push('theme_adv_link_text_col');
      /* bodycontent - h1 h2 color & size   */
      reset_btn_obj['resetbtn-heading-settings'] = [];
      reset_btn_obj['resetbtn-heading-settings'].push('theme_adv_bodycontent_h1_text_col');
      reset_btn_obj['resetbtn-heading-settings'].push('theme_adv_bodycontent_h2_text_col');
      reset_btn_obj['resetbtn-heading-settings'].push('theme_adv_bodycontent_h1_text_size');
      reset_btn_obj['resetbtn-heading-settings'].push('theme_adv_bodycontent_h2_text_size');
      /* primary adv button */
      reset_btn_obj['resetbtn-button-settings'] = [];
      reset_btn_obj['resetbtn-button-settings'].push('theme_adv_primary_btn_bgcol');
      reset_btn_obj['resetbtn-button-settings'].push('theme_adv_primary_btn_bg_h_col');
      reset_btn_obj['resetbtn-button-settings'].push('theme_adv_primary_btn_txtcol');
      reset_btn_obj['resetbtn-button-settings'].push('theme_adv_primary_btn_txt_h_col');
      reset_btn_obj['resetbtn-button-settings'].push('theme_adv_primary_btn_bdrcol');
      reset_btn_obj['resetbtn-button-settings'].push('theme_adv_primary_btn_bdr_h_col');
      reset_btn_obj['resetbtn-button-settings'].push('theme_adv_primary_btn_radius');
      /* secondary adv button */
      reset_btn_obj['resetbtn-button-settings'].push('theme_adv_secondary_btn_bgcol');
      reset_btn_obj['resetbtn-button-settings'].push('theme_adv_secondary_btn_bg_h_col');
      reset_btn_obj['resetbtn-button-settings'].push('theme_adv_secondary_btn_txtcol');
      reset_btn_obj['resetbtn-button-settings'].push('theme_adv_secondary_btn_txt_h_col');
      reset_btn_obj['resetbtn-button-settings'].push('theme_adv_secondary_btn_bdrcol');
      reset_btn_obj['resetbtn-button-settings'].push('theme_adv_secondary_btn_bdr_h_col');
      reset_btn_obj['resetbtn-button-settings'].push('theme_adv_secondary_btn_radius');
      /* default adv button */
      reset_btn_obj['resetbtn-button-settings'].push('theme_adv_default_btn_bgcol');
      reset_btn_obj['resetbtn-button-settings'].push('theme_adv_default_btn_bg_h_col');
      reset_btn_obj['resetbtn-button-settings'].push('theme_adv_default_btn_txtcol');
      reset_btn_obj['resetbtn-button-settings'].push('theme_adv_default_btn_txt_h_col');
      reset_btn_obj['resetbtn-button-settings'].push('theme_adv_default_btn_bdrcol');
      reset_btn_obj['resetbtn-button-settings'].push('theme_adv_default_btn_bdr_h_col');
      reset_btn_obj['resetbtn-button-settings'].push('theme_adv_default_btn_radius');
      /* default_light adv button */
      reset_btn_obj['resetbtn-button-settings'].push('theme_adv_default_light_btn_bgcol');
      reset_btn_obj['resetbtn-button-settings'].push('theme_adv_default_light_btn_bg_h_col');
      reset_btn_obj['resetbtn-button-settings'].push('theme_adv_default_light_btn_txtcol');
      reset_btn_obj['resetbtn-button-settings'].push('theme_adv_default_light_btn_txt_h_col');
      reset_btn_obj['resetbtn-button-settings'].push('theme_adv_default_light_btn_bdrcol');
      reset_btn_obj['resetbtn-button-settings'].push('theme_adv_default_light_btn_bdr_h_col');
      reset_btn_obj['resetbtn-button-settings'].push('theme_adv_default_light_btn_radius');
      return reset_btn_obj;
    };
    ///////////////////// ******************** //////////////////////////
    ///////////////////// end of ls win objs  ///////////////////////////
    ///////////////////// ******************** //////////////////////////
  
    ///////////////////// ******************** //////////////////////////
    ///////////////////////////// tb panel  //////////////////////////////
    ///////////////////// ******************** //////////////////////////
    ///// setup customizer panel input values
    const get_panel_input_value = (panel_vars, var_name) => {
      var panel_input_value = '';
      if (typeof panel_vars === 'object' && panel_vars.hasOwnProperty(var_name) && panel_vars[var_name]) {
        panel_input_value = panel_vars[var_name];
      }
      return panel_input_value;
    };
  
    const getGoogleFontsList = (function () {
      let fontsArray = [];
      const includedFonts = [
        'Roboto',
        'Roboto Condensed',
        'Roboto Mono',
        'Montserrat',
        'IBM Plex Sans',
        'Inter',
        'PT Sans',
        'Raleway',
        'Helvetica',
        'Palatino',
        'Ubuntu',
        'Lato',
        'Trebuchet MS',
        'Open Sans',
        'Oswald',
        'Impact',
        'Merriweather',
        'Lobster',
        'Work Sans',
        'Raleway Dots',
        'Playfair Display',
        'Nunito',
        'OCR A Std',
        'Snell Roundhand',
        'Gill Sans',
        'Lucida',
        'Bookman',
        'Andale Mono',
        'Courier New',
        'Comic Sans MS',
        'Didot',
        'Georgia',
        'American Typewriter',
        'Apple Chancery',
        'Bradley Hand',
        'Brush Script MT',
        'URW Chancery L',
        'Luminari',
        'Chalkduster',
        'Marker Felt',
        'Trattatello',
        'Titillium Web',
        'Oxygen',
        'Cabin',
        'Josefin Sans',
        'Pacifico',
        'Vollkorn',
        'Catamaran',
        'Comfortaa',
        'Rubik',
        'Exo',
        'Amatic SC',
        'Dancing Script',
        'Roboto Slab',
        'Abril Fatface',
        'Cinzel',
        'Orbitron',
        'Barlow',
        'Noto Serif',
        'Cabin Condensed',
        'Cormorant',
        'Old Standard TT',
        'Bitter',
        'Karla',
      ];
  
      const desiredWeights = ['200', '300', '400', '500', '600', '700', '800', '900'];
  
      function createStaticFontsList() {
        includedFonts.forEach(function (font) {
          desiredWeights.forEach(function (weight) {
            const fontDisplayName = `${font} ${weight}`;
            const option = `<option value="${font}:${weight}" style="font-family: ${font}; font-weight: ${weight}; font-style: normal;">${fontDisplayName}</option>`;
            fontsArray.push(option);
          });
        });
        return fontsArray;
      }
  
      return function () {
        if (fontsArray.length > 0) {
          return fontsArray;
        }
  
        const xhr = new XMLHttpRequest();
        xhr.open('GET', gfontslist, false);
        xhr.send();
        if (xhr.readyState === 4 && xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          const fonts = data.items;
          fonts.forEach(function (font) {
            if (includedFonts.includes(font.family)) {
              font.variants.forEach(function (variant) {
                const weightMatch = variant.match(/\d+/);
                if (weightMatch && desiredWeights.includes(weightMatch[0]) && !variant.includes('italic')) {
                  const weight = weightMatch[0] ? ` ${weightMatch[0]}` : '';
                  const fontDisplayName = `${font.family}${weight}`;
                  const option = `<option value="${font.family}:${variant}" style="font-family: ${font.family}; font-weight: ${weight.trim()}; font-style: normal;">${fontDisplayName}</option>`;
                  fontsArray.push(option);
                }
              });
            }
          });
          return fontsArray;
        } else {
          // console.error('Error fetching Google Fonts list.');
          return createStaticFontsList();
        }
      };
    })();
  
    function tb_panel() {
      var ls_obj_general = get_ls_obj_general();
      var ls_obj_advanced = get_ls_obj_advanced();
      let ls_obj = {
        ...ls_obj_general,
        ...ls_obj_advanced,
      };
      var ls_window_general = get_ls_window_general();
      var ls_window_advanced = get_ls_window_advanced();
      let ls_window = {
        ...ls_window_general,
        ...ls_window_advanced,
      };
      const panel_vars = {};
      var ls_obj_keys = Object.keys(ls_obj);
      if (Array.isArray(ls_obj_keys) && ls_obj_keys.length) {
        for (var i = 0; i < ls_obj_keys.length; i++) {
          var ls_key = ls_obj_keys[i];
          if (ls_key) {
            if (typeof ls_window === 'object' && ls_window.hasOwnProperty(ls_key) && ls_window[ls_key]) {
              var ls_window_ls_key = ls_window[ls_key];
              panel_vars[ls_key] = ls_window_ls_key;
            } else {
              panel_vars[ls_key] = ls_obj[ls_key];
            }
          }
        }
      }
  
      const dashboard_themes = getDashboardThemes();
      const add_elem_dc_panel = document.createElement('div');
      const panel_Reference = document.querySelector('#dashboard-customizer-panel');
      if (!document.body.contains(panel_Reference)) {
        let selected_theme_name = window.themegen_settings.theme_name;
        let published_theme_option = '';
        let theme_custom_name = 'My Theme';
        let modifytheme_message = '';
        const selected_theme_message = window.selected_theme !== 'theme_custom' ? 'Selected Theme' : 'Select Theme To Enable';
        const selected_theme_save_btn_message = window.selected_theme === 'theme_custom' ? 'SAVE AND APPLY NO THEME' : 'SAVE AND APPLY THEME';
        if (typeof window.themegen_settings === 'object' && window.themegen_settings.hasOwnProperty('theme_name')) {
          const theme_published_vs_disabled =
            window.selected_theme !== 'theme_custom' ? `<span class="modify-theme-btn"> \u2190 Published (â˜…)</span>` : '<span class="modify-theme-btn"> \u2190 Theme Disabled</span>';
          // published_theme_option = `${window.themegen_settings.theme_name} ${theme_published_vs_disabled}`;
          published_theme_option = `${theme_custom_name} ${theme_published_vs_disabled}`;
          modifytheme_message = selected_theme_message;
        } else {
          published_theme_option = '---Select Theme---';
          modifytheme_message = 'Select The Theme';
        }
        let theme_font_families = getGoogleFontsList();
        let theme_gen_overlay_html = ``;
        theme_gen_overlay_html += `
      
  <!-- starts here -->
  <div class="card tsg-panel">
    <div class="card-header dc-card-header">
      <a class="close-theme-customizer"><i class="fa-solid fa-xmark-large" style="color: #ffffff"></i></a>
      <div class="close-theme-customizer-wrapper">
        <div id="unsaved-theme-notifier" class="unsaved-theme-notifier">
          <div class="tooltip">You have unsaved theme changes. The unsaved changes will be discarded and revert as soon as you refresh or reload the page.</div>
        </div>
      </div>
      <h3 style="width: 100%" class="card-header-h3"><span class="card-header-h5">Client Portal</span><br />Theme Builder<sup class="supcp">Client Portal</sup></h3>
    </div>
    <div class="card-body dashboard-customizer-card-body">
      <div class="hl-oe__item-wrap dc-wrap">
        <div class="hl-oe__item-info dc-info">
          <div class="hl-oe__item-title dc-title">Style your Client Portal to look as per your brand <i class="fa-solid fa-circle-check"></i></div>
          <div class="hl-oe__item-descriptio dc-item-description">
            <p>This allows you to choose the color, icons, and layout of your choice to match to the brand and apply to the client portal and login page.</p>
            <div class="license-themename">
              <div class="dc-colorpicker-group">
                <label for="dc-themeName" id="mainlabel">Choose a theme & start customization</label>
                <div class="dc-colorpicker-group" style="display: none !important">
                  <p class="notice-text">Reload Page required to update settings</p>
                  <div class="refresh-active text-center">
                    <button id="refreshButton" class="btn btn-success refresh-col">Click to Reload Page</button>
                  </div>
                </div>
                <div class="toggle-arrow-dc">
                  <div id="notifier" class="notifier">
                    <ul class="callouts">
                      <li class="callouts--bottom">${modifytheme_message}</li>
                    </ul>
                  </div>
                </div>
                <div class="dc-themeName-wrap select-theme-elem">
                      <select name="themename" id="dc-themeName">
                        `;
        theme_gen_overlay_html += `
                        <option class="themeoptions" id="pub-opt" value="">${published_theme_option}</option>
                        `;
        let themeName = '';
        let htmlOptions = '';
        let selected_theme_attrib = '';
        for (const key in dashboard_themes.theme_data) {
          themeName = key;
          if (selected_theme_name === dashboard_themes.theme_data[themeName].theme_name) selected_theme_attrib = 'selected1';
          htmlOptions = `
                        <option class="themeoptions" value="${themeName}" ${selected_theme_attrib}>${dashboard_themes.theme_data[themeName].theme_name}</option>
                        `;
          theme_gen_overlay_html += `${htmlOptions}`;
        }
        theme_gen_overlay_html += `
                      </select>
                    </div>
              </div>
            </div>
          </div>
          <div class="showmore-step2">
            <div id="show-hide-sections" class="show-hide-sections">
              <ul id="accordion" class="accordion">
                <li>
                  <div id="section-global-settings" class="link section-global-settings"><i class="fa fa-cog"></i>General Settings <i class="fa fa-chevron-down"></i></div>
                  <ul id="section-global-content" class="submenu">
                    <li>
                      <div class="tsg-disabled overflow-frame scrollable">
                        <div class="hl-card">
                          <div class="hl-card-header"><strong>Quick & Simple Setup</strong></div>
                          <div class="hl-card-content">
                            <div class="tsg-disabled">
                              <div class="dc-colorpicker-group">
                                <label for="dc-colorPicker-primary">Primary Color:</label>
                                <input type="color" value="${get_panel_input_value(panel_vars, 'theme_name_primary_col')}" id="dc-colorPicker-primary" class="themeselectoptions" />
                                <b
                                  ><label for="dc-colorPicker-primary" class="colorcode-label"><code id="dc-colorCode-primary"></code></label
                                ></b>
                              </div>
                              <div class="dc-colorpicker-group">
                                <label for="dc-colorPicker-primarybg">Secondary Color:</label>
                                <input type="color" value="${get_panel_input_value(panel_vars, 'theme_name_primary_bg_col')}" id="dc-colorPicker-primarybg" class="themeselectoptions" />
                                <b
                                  ><label for="dc-colorPicker-primarybg" class="colorcode-label"><code id="dc-colorCode-primarybg"></code></label
                                ></b>
                              </div>
                              <div class="dc-colorpicker-group">
                                <label for="dc-colorPicker-bg-gradient" class="dc-colorPicker-bg-gradient">Left sidebar Tab BG color</label>
                                <input type="color" value="${get_panel_input_value(panel_vars, 'theme_name_primary_gradient_col')}" id="dc-colorPicker-bg-gradient" class="themeselectoptions" />
                                <b
                                  ><label for="dc-colorPicker-bg-gradient" class="colorcode-label"><code id="dc-colorCode-bg-gradient"></code></label
                                ></b>
                              </div>
                              <div class="dc-colorpicker-group">
                                <label for="dc-colorPicker-leftsidebar-txtcol">Left Sidebar Text Color:</label>
                                <input
                                  type="color"
                                  value="${get_panel_input_value(panel_vars, 'theme_name_primary_sidebartxt_col')}"
                                  id="dc-colorPicker-leftsidebar-txtcol"
                                  class="themeselectoptions" />
                                <b
                                  ><label for="dc-colorPicker-leftsidebar-txtcol" class="colorcode-label"><code id="dc-colorCode-leftsidebar-txtcol"></code></label
                                ></b>
                              </div>
                              <div id="leftsidebar-icon-col-elem">
                                <div class="dc-colorpicker-group">
                                  <label for="dc-colorPicker-leftsidebar-iconcol">Left Sidebar Icon Color:</label>
                                  <input
                                    type="color"
                                    value="${get_panel_input_value(panel_vars, 'theme_name_primary_sidebaricon_col')}"
                                    id="dc-colorPicker-leftsidebar-iconcol"
                                    class="themeselectoptions" />
                                  <b
                                    ><label for="dc-colorPicker-leftsidebar-iconcol" class="colorcode-label"><code id="dc-colorCode-leftsidebar-iconcol"></code></label
                                  ></b>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      <div id="section-advance-settings-wrap" class="tsg-disabled">
                      <div class="hl-card gradient-color-settings">
                        <div class="hl-card-header">
                          <div class="flex reset-wrap">
                            <div class="hl-text-md-normal"><strong>Header Controls âŸ¶ Settings</strong></div>
                            <button id="resetbtn-header-settings" class="btn reset-option-profilebtn" data-toggle="tooltip" data-placement="top" title="Reset">
                              <i class="fa-solid fa-arrow-rotate-left"></i>
                            </button>
                          </div>
                        </div>
                        <div class="hl-card-content">
                          <div class="flex w-full">
                            <div class="w-full">
                              <!-- header gradient color -->
                              <div class="w-full gradient-color-settings">
                                <div class="pl-0 pr-0 pt-0">
                                  <div id="activate-hcontrols-bl">
                                    <div class="hl-card">
                                      <div class="hl-card-content">
                                        <div class="dc-colorpicker-group">
                                          <label for="hcontrols-bl">Bottom Left Header Controls</label>
                                          <div class="hcontrols-bl">
                                            <input type="checkbox" id="hcontrols-bl" />
                                          </div>
                                        </div>
                                        <div class="dc-colorpicker-group">
                                          <label class="hcontrols-bl-sm" for="hcontrols-bl-sm">Header Controls as Small Icons </label>
                                          <div class="hcontrols-bl-sm">
                                            <input type="checkbox" id="hcontrols-bl-sm" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="items-center pb-2 pt-3">
                                    <div class="hl-text-sm-regular">Header Background Color</div>
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-headerbgcolor-start-col">Color Start:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_headerbgcolor_start_col')}"
                                      id="dc-colorPicker-adv-headerbgcolor-start-col"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-headerbgcolor-start-col" class="colorcode-label-adv-headerbgcolor-start-col"
                                        ><code id="dc-colorCode-adv-headerbgcolor-start-col">#8f98fa</code></label
                                      ></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-headerbgcolor-end-col">Color End:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_headerbgcolor_end_col')}"
                                      id="dc-colorPicker-adv-headerbgcolor-end-col"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-headerbgcolor-end-col" class="colorcode-label-adv-headerbgcolor-end-col"
                                        ><code id="dc-colorCode-adv-headerbgcolor-end-col">#8f98fa</code></label
                                      ></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-headerbgcolor-stop-perc">Color Stop Percentage:</label>
                                    <input
                                      class="small-input-px"
                                      type="number"
                                      id="dc-colorPicker-adv-headerbgcolor-stop-perc"
                                      name="dc-colorPicker-adv-headerbgcolor-stop-perc"
                                      placeholder="50"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_headerbgcolor_stop_perc')}"
                                      min="0"
                                      max="100"
                                      step="5" />
                                    <i class="input-unit">%</i>
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-headerbgcolor-gradient-deg">Gradient Angle:</label>
                                    <input
                                      class="small-input-px"
                                      type="text"
                                      id="dc-colorPicker-adv-headerbgcolor-gradient-deg"
                                      name="dc-colorPicker-adv-headerbgcolor-gradient-deg"
                                      placeholder="45"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_headerbgcolor_gradient_deg')}" />
                                    <i class="input-unit">Â°deg</i>
                                  </div>
                                  <div class="topnav-notes">For flat color in header: Choose same color for start & end, stop percentage: 0%, gradient angle: 0</div>
                                </div>
                              </div>
                              <!--ends here -->
                              <!-- Profile Button -->
                              <div class="w-full gradient-color-settings pt-3 d-none">
                                <div class="pl-0 pr-0 pt-0">
                                  <div class="items-center pb-2">
                                    <div class="hl-text-sm-regular">User Profile Button</div>
                                  </div>
  
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-profile-btn-icon-col">Icon Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_profile_btn_icon_col')}"
                                      id="dc-colorPicker-adv-profile-btn-icon-col"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-profile-btn-icon-col" class="colorcode-label-adv-profile-btn-icon-col"
                                        ><code id="dc-colorCode-adv-profile-btn-icon-col">#8f98fa</code></label
                                      ></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-profile-btn-icon-hover-col">Icon Hover Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_profile_btn_icon_hover_col')}"
                                      id="dc-colorPicker-adv-profile-btn-icon-hover-col"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-profile-btn-icon-hover-col" class="colorcode-label-adv-profile-btn-icon-hover-col"
                                        ><code id="dc-colorCode-adv-profile-btn-icon-hover-col">#8f98fa</code></label
                                      ></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-profile-btn-icon-bg-col">Icon Background Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_profile_btn_icon_bg_col')}"
                                      id="dc-colorPicker-adv-profile-btn-icon-bg-col"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-profile-btn-icon-bg-col" class="colorcode-label-adv-profile-btn-icon-bg-col"
                                        ><code id="dc-colorCode-adv-profile-btn-icon-bg-col">#8f98fa</code></label
                                      ></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-profile-btn-icon-bg-hover-col">Icon Bg Hover Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_profile_btn_icon_bg_hover_col')}"
                                      id="dc-colorPicker-adv-profile-btn-icon-bg-hover-col"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-profile-btn-icon-bg-hover-col" class="colorcode-label-adv-profile-btn-icon-bg-hover-col"
                                        ><code id="dc-colorCode-adv-profile-btn-icon-bg-hover-col">#8f98fa</code></label
                                      ></b
                                    >
                                  </div>
                                </div>
                              </div>
                              <!-- ends here -->
                              <div class="nodisplay-blsm pt-3 ">
                                <!-- Notification Button -->
                                <div class="w-full gradient-color-settings pt-3">
                                  <div class="pl-0 pr-0">
                                    <div class="items-center pb-2">
                                      <div class="hl-text-sm-regular d-none">Notification Button</div>
                                      <div class="hl-text-sm-regular">Header Buttons</div>
                                    </div>
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-notification-btn-icon-col">Icon Color:</label>
                                      <input
                                        type="color"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_notification_btn_icon_col')}"
                                        id="dc-colorPicker-adv-notification-btn-icon-col"
                                        class="themeselectoptions" />
                                      <b
                                        ><label for="dc-colorPicker-adv-notification-btn-icon-col" class="colorcode-label-adv-notification-btn-icon-col"
                                          ><code id="dc-colorCode-adv-notification-btn-icon-col">#8f98fa</code></label
                                        ></b
                                      >
                                    </div>
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-notification-btn-icon-hover-col">Icon Hover Color:</label>
                                      <input
                                        type="color"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_notification_btn_icon_hover_col')}"
                                        id="dc-colorPicker-adv-notification-btn-icon-hover-col"
                                        class="themeselectoptions" />
                                      <b
                                        ><label for="dc-colorPicker-adv-notification-btn-icon-hover-col" class="colorcode-label-adv-notification-btn-icon-hover-col"
                                          ><code id="dc-colorCode-adv-notification-btn-icon-hover-col">#8f98fa</code></label
                                        ></b
                                      >
                                    </div>
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-notification-btn-icon-bg-col">Icon Background Color:</label>
                                      <input
                                        type="color"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_notification_btn_icon_bg_col')}"
                                        id="dc-colorPicker-adv-notification-btn-icon-bg-col"
                                        class="themeselectoptions" />
                                      <b
                                        ><label for="dc-colorPicker-adv-notification-btn-icon-bg-col" class="colorcode-label-adv-notification-btn-icon-bg-col"
                                          ><code id="dc-colorCode-adv-notification-btn-icon-bg-col">#8f98fa</code></label
                                        ></b
                                      >
                                    </div>
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-notification-btn-icon-bg-hover-col">Icon Bg Hover Color:</label>
                                      <input
                                        type="color"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_notification_btn_icon_bg_hover_col ')}"
                                        id="dc-colorPicker-adv-notification-btn-icon-bg-hover-col"
                                        class="themeselectoptions" />
                                      <b
                                        ><label for="dc-colorPicker-adv-notification-btn-icon-bg-hover-col" class="colorcode-label-adv-notification-btn-icon-bg-hover-col"
                                          ><code id="dc-colorCode-adv-notification-btn-icon-bg-hover-col">#8f98fa</code></label
                                        ></b
                                      >
                                    </div>
                                  </div>
                                </div>
                                <!--ends here -->
                                <!-- App Button -->
                                <div class="w-full gradient-color-settings pt-3 d-none">
                                  <div class="pl-0 pr-0">
                                    <div class="items-center pb-2">
                                      <div class="hl-text-sm-regular">Options Button</div>
                                    </div>
  
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-help-btn-icon-col">Icon Color:</label>
                                      <input
                                        type="color"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_help_btn_icon_col')}"
                                        id="dc-colorPicker-adv-help-btn-icon-col"
                                        class="themeselectoptions" />
                                      <b
                                        ><label for="dc-colorPicker-adv-help-btn-icon-col" class="colorcode-label-adv-help-btn-icon-col"
                                          ><code id="dc-colorCode-adv-help-btn-icon-col">#8f98fa</code></label
                                        ></b
                                      >
                                    </div>
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-help-btn-icon-hover-col">Icon Hover Color:</label>
                                      <input
                                        type="color"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_help_btn_icon_hover_col')}"
                                        id="dc-colorPicker-adv-help-btn-icon-hover-col"
                                        class="themeselectoptions" />
                                      <b
                                        ><label for="dc-colorPicker-adv-help-btn-icon-hover-col" class="colorcode-label-adv-help-btn-icon-hover-col"
                                          ><code id="dc-colorCode-adv-help-btn-icon-hover-col">#8f98fa</code></label
                                        ></b
                                      >
                                    </div>
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-help-btn-icon-bg-col">Icon Background Color:</label>
                                      <input
                                        type="color"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_help_btn_icon_bg_col')}"
                                        id="dc-colorPicker-adv-help-btn-icon-bg-col"
                                        class="themeselectoptions" />
                                      <b
                                        ><label for="dc-colorPicker-adv-help-btn-icon-bg-col" class="colorcode-label-adv-help-btn-icon-bg-col"
                                          ><code id="dc-colorCode-adv-help-btn-icon-bg-col">#8f98fa</code></label
                                        ></b
                                      >
                                    </div>
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-help-btn-icon-bg-hover-col">Icon Bg Hover Color:</label>
                                      <input
                                        type="color"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_help_btn_icon_bg_hover_col')}"
                                        id="dc-colorPicker-adv-help-btn-icon-bg-hover-col"
                                        class="themeselectoptions" />
                                      <b
                                        ><label for="dc-colorPicker-adv-help-btn-icon-bg-hover-col" class="colorcode-label-adv-help-btn-icon-bg-hover-col"
                                          ><code id="dc-colorCode-adv-help-btn-icon-bg-hover-col">#8f98fa</code></label
                                        ></b
                                      >
                                    </div>
                                  </div>
                                </div>
                                <!--ends here -->
                                <!-- View Change Logs Button -->
                                <div class="w-full gradient-color-settings pt-3 d-none">
                                  <div class="pl-0 pr-0">
                                    <div class="items-center pb-2">
                                      <div class="hl-text-sm-regular">Light Dark Button</div>
                                    </div>
  
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-viewchangelogs-btn-icon-col">Icon Color:</label>
                                      <input
                                        type="color"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_viewchangelogs_btn_icon_col')}"
                                        id="dc-colorPicker-adv-viewchangelogs-btn-icon-col"
                                        class="themeselectoptions" />
                                      <b
                                        ><label for="dc-colorPicker-adv-viewchangelogs-btn-icon-col" class="colorcode-label-adv-viewchangelogs-btn-icon-col"
                                          ><code id="dc-colorCode-adv-viewchangelogs-btn-icon-col">#8f98fa</code></label
                                        ></b
                                      >
                                    </div>
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-viewchangelogs-btn-icon-hover-col">Icon Hover Color:</label>
                                      <input
                                        type="color"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_viewchangelogs_btn_icon_hover_col')}"
                                        id="dc-colorPicker-adv-viewchangelogs-btn-icon-hover-col"
                                        class="themeselectoptions" />
                                      <b
                                        ><label for="dc-colorPicker-adv-viewchangelogs-btn-icon-hover-col" class="colorcode-label-adv-viewchangelogs-btn-icon-hover-col"
                                          ><code id="dc-colorCode-adv-viewchangelogs-btn-icon-hover-col">#8f98fa</code></label
                                        ></b
                                      >
                                    </div>
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-viewchangelogs-btn-icon-bg-col">Icon Background Color:</label>
                                      <input
                                        type="color"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_viewchangelogs_btn_icon_bg_col')}"
                                        id="dc-colorPicker-adv-viewchangelogs-btn-icon-bg-col"
                                        class="themeselectoptions" />
                                      <b
                                        ><label for="dc-colorPicker-adv-viewchangelogs-btn-icon-bg-col" class="colorcode-label-adv-viewchangelogs-btn-icon-bg-col"
                                          ><code id="dc-colorCode-adv-viewchangelogs-btn-icon-bg-col">#8f98fa</code></label
                                        ></b
                                      >
                                    </div>
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-viewchangelogs-btn-icon-bg-hover-col">Icon Bg Hover Color:</label>
                                      <input
                                        type="color"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_viewchangelogs_btn_icon_bg_hover_col')}"
                                        id="dc-colorPicker-adv-viewchangelogs-btn-icon-bg-hover-col"
                                        class="themeselectoptions" />
                                      <b
                                        ><label for="dc-colorPicker-adv-viewchangelogs-btn-icon-bg-hover-col" class="colorcode-label-adv-viewchangelogs-btn-icon-bg-hover-col"
                                          ><code id="dc-colorCode-adv-viewchangelogs-btn-icon-bg-hover-col">#8f98fa</code></label
                                        ></b
                                      >
                                    </div>
                                  </div>
                                </div>
                                <!--ends here -->
                                <!-- Phone Button -->
                                <div class="w-full gradient-color-settings pt-3 d-none">
                                  <div class="pl-0 pr-0">
                                    <div class="items-center pb-2">
                                      <div class="hl-text-sm-regular">Home Button</div>
                                    </div>
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-phone-btn-icon-col">Icon Color:</label>
                                      <input
                                        type="color"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_phone_btn_icon_col')}"
                                        id="dc-colorPicker-adv-phone-btn-icon-col"
                                        class="themeselectoptions" />
                                      <b
                                        ><label for="dc-colorPicker-adv-phone-btn-icon-col" class="colorcode-label-adv-phone-btn-icon-col"
                                          ><code id="dc-colorCode-adv-phone-btn-icon-col">#8f98fa</code></label
                                        ></b
                                      >
                                    </div>
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-phone-btn-icon-hover-col">Icon Hover Color:</label>
                                      <input
                                        type="color"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_phone_btn_icon_hover_col')}"
                                        id="dc-colorPicker-adv-phone-btn-icon-hover-col"
                                        class="themeselectoptions" />
                                      <b
                                        ><label for="dc-colorPicker-adv-phone-btn-icon-hover-col" class="colorcode-label-adv-phone-btn-icon-hover-col"
                                          ><code id="dc-colorCode-adv-phone-btn-icon-hover-col">#8f98fa</code></label
                                        ></b
                                      >
                                    </div>
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-phone-btn-icon-bg-col">Icon Background Color:</label>
                                      <input
                                        type="color"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_phone_btn_icon_bg_col')}"
                                        id="dc-colorPicker-adv-phone-btn-icon-bg-col"
                                        class="themeselectoptions" />
                                      <b
                                        ><label for="dc-colorPicker-adv-phone-btn-icon-bg-col" class="colorcode-label-adv-phone-btn-icon-bg-col"
                                          ><code id="dc-colorCode-adv-phone-btn-icon-bg-col">#8f98fa</code></label
                                        ></b
                                      >
                                    </div>
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-phone-btn-icon-bg-hover-col">Icon Bg Hover Color:</label>
                                      <input
                                        type="color"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_phone_btn_icon_bg_hover_col')}"
                                        id="dc-colorPicker-adv-phone-btn-icon-bg-hover-col"
                                        class="themeselectoptions" />
                                      <b
                                        ><label for="dc-colorPicker-adv-phone-btn-icon-bg-hover-col" class="colorcode-label-adv-phone-btn-icon-bg-hover-col"
                                          ><code id="dc-colorCode-adv-phone-btn-icon-bg-hover-col">#8f98fa</code></label
                                        ></b
                                      >
                                    </div>
                                  </div>
                                </div>
                                <!--ends here -->
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Left Sidebar settings  here -->
                      <div id="lss" class="hl-card gradient-color-settings">
                        <div class="hl-card-header">
                          <div class="flex reset-wrap">
                            <div class="hl-text-md-normal"><strong>Left Sidebar âŸ¶ Settings</strong></div>
                            <button id="resetbtn-leftsidebar-settings" class="btn reset-option-profilebtn" data-toggle="tooltip" data-placement="top" title="Reset">
                              <i class="fa-solid fa-arrow-rotate-left"></i>
                            </button>
                          </div>
                        </div>
                        <div class="hl-card-content">
                          <div class="flex w-full">
                            <div class="w-full">
                              <!-- leftsidebar  gradient color -->
                              <div class="w-full gradient-color-settings">
                                <div class="pl-0 pr-0 pt-2">
                                  <div class="items-center pb-2">
                                    <div class="hl-text-sm-regular">Background Gradient Color</div>
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-leftsidebarbgcolor-start-col">Color Start:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_leftsidebarbgcolor_start_col')}"
                                      id="dc-colorPicker-adv-leftsidebarbgcolor-start-col"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-leftsidebarbgcolor-start-col" class="colorcode-label-adv-leftsidebarbgcolor-start-col"
                                        ><code id="dc-colorCode-adv-leftsidebarbgcolor-start-col">#8f98fa</code></label
                                      ></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-leftsidebarbgcolor-end-col">Color End:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_leftsidebarbgcolor_end_col')}"
                                      id="dc-colorPicker-adv-leftsidebarbgcolor-end-col"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-leftsidebarbgcolor-end-col" class="colorcode-label-adv-leftsidebarbgcolor-end-col"
                                        ><code id="dc-colorCode-adv-leftsidebarbgcolor-end-col">#8f98fa</code></label
                                      ></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-leftsidebarbgcolor-stop-perc">Color Stop Percentage:</label>
                                    <input
                                      class="small-input-px"
                                      type="number"
                                      id="dc-colorPicker-adv-leftsidebarbgcolor-stop-perc"
                                      name="dc-colorPicker-adv-leftsidebarbgcolor-stop-perc"
                                      placeholder="50"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_leftsidebarbgcolor_stop_perc')}"
                                      min="0"
                                      max="100"
                                      step="5" />
                                    <i class="input-unit">%</i>
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-leftsidebarbgcolor-gradient-deg">Gradient Angle:</label>
                                    <input
                                      class="small-input-px"
                                      type="text"
                                      id="dc-colorPicker-adv-leftsidebarbgcolor-gradient-deg"
                                      name="dc-colorPicker-adv-leftsidebarbgcolor-gradient-deg"
                                      placeholder="45"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_leftsidebarbgcolor_gradient_deg')}" />
                                    <i class="input-unit">Â°deg</i>
                                  </div>
                                  <div class="topnav-notes">For flat color in Left Sidebar: Choose same color for start & end, stop percentage: 0%, gradient angle: 0</div>
                                </div>
                              </div>
                              <!--ends here -->
                              <div class="w-full gradient-color-settings">
                                <div class="w-full pt-3 gradient-color-settings left-nav-text-icon-hover">
                                  <div class="pl-0 pr-0">
                                    <div class="items-center pb-2">
                                      <div class="hl-text-sm-regular">Sidebar Tabs (Text & Icons color)</div>
                                    </div>
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-text-hover-color">Text Hover & Active Color:</label>
                                      <input
                                        type="color"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_text_hover_color')}"
                                        id="dc-colorPicker-adv-mainnav-text-hover-color"
                                        class="themeselectoptions" />
                                      <b
                                        ><label for="dc-colorPicker-adv-mainnav-text-hover-color" class="colorcode-label-adv-mainnav-text-hover-color"
                                          ><code id="dc-colorCode-adv-mainnav-text-hover-color">#8f98fa</code></label
                                        ></b
                                      >
                                    </div>
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-icon-hover-color">Icon Hover & Active Color:</label>
                                      <input
                                        type="color"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_icon_hover_color')}"
                                        id="dc-colorPicker-adv-mainnav-icon-hover-color"
                                        class="themeselectoptions" />
                                      <b
                                        ><label for="dc-colorPicker-adv-mainnav-icon-hover-color" class="colorcode-label-adv-mainnav-icon-hover-color"
                                          ><code id="dc-colorCode-adv-mainnav-icon-hover-color">#8f98fa</code></label
                                        ></b
                                      >
                                    </div>
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-mainnav-hover-active-bg-color">Hover & Active BG Color:</label>
                                      <input
                                        type="color"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_mainnav_hover_active_bg_color')}"
                                        id="dc-colorPicker-adv-mainnav-hover-active-bg-color"
                                        class="themeselectoptions" />
                                      <b
                                        ><label for="dc-colorPicker-adv-mainnav-hover-active-bg-color" class="colorcode-label-adv-mainnav-hover-active-bg-color"
                                          ><code id="dc-colorCode-adv-mainnav-hover-active-bg-color">#8f98fa</code></label
                                        ></b
                                      >
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- ends here -->
                      <!-- Top Nav -->
                      <div id="lss" class="hl-card gradient-color-settings">
                        <div class="hl-card-header">
                          <div class="flex reset-wrap">
                            <div class="hl-text-md-normal"><strong>Top Navigation âŸ¶ Settings</strong></div>
                            <button id="resetbtn-topnav-settings" class="btn reset-option-topnav" data-toggle="tooltip" data-placement="top" title="Reset">
                              <i class="fa-solid fa-arrow-rotate-left"></i>
                            </button>
                          </div>
                        </div>
                        <div class="hl-card-content">
                          <div class="flex w-full">
                            <div class="w-full">
                              <!-- topnav  gradient color -->
                              <div class="w-full gradient-color-settings">
                                <div class="pl-0 pr-0 pt-2">
                                  <div class="items-center pb-2">
                                    <div class="hl-text-sm-regular">Background Gradient Color</div>
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-topnavbgcolor-start-col">Color Start:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_topnavbgcolor_start_col')}"
                                      id="dc-colorPicker-adv-topnavbgcolor-start-col"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-topnavbgcolor-start-col" class="colorcode-label-adv-topnavbgcolor-start-col"
                                        ><code id="dc-colorCode-adv-topnavbgcolor-start-col">#8f98fa</code></label
                                      ></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-topnavbgcolor-end-col">Color End:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_topnavbgcolor_end_col')}"
                                      id="dc-colorPicker-adv-topnavbgcolor-end-col"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-topnavbgcolor-end-col" class="colorcode-label-adv-topnavbgcolor-end-col"
                                        ><code id="dc-colorCode-adv-topnavbgcolor-end-col">#8f98fa</code></label
                                      ></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-topnavbgcolor-stop-perc">Color Stop Percentage:</label>
                                    <input
                                      class="small-input-px"
                                      type="number"
                                      id="dc-colorPicker-adv-topnavbgcolor-stop-perc"
                                      name="dc-colorPicker-adv-topnavbgcolor-stop-perc"
                                      placeholder="50"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_topnavbgcolor_stop_perc')}"
                                      min="0"
                                      max="100"
                                      step="5" />
                                    <i class="input-unit">%</i>
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-topnavbgcolor-gradient-deg">Gradient Angle:</label>
                                    <input
                                      class="small-input-px"
                                      type="text"
                                      id="dc-colorPicker-adv-topnavbgcolor-gradient-deg"
                                      name="dc-colorPicker-adv-topnavbgcolor-gradient-deg"
                                      placeholder="45"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_topnavbgcolor_gradient_deg')}" />
                                    <i class="input-unit">Â°deg</i>
                                  </div>
                                  <div class="topnav-notes">For flat color in Top Navigation: Choose same color for start & end, stop percentage: 0%, gradient angle: 0</div>
                                </div>
                              </div>
                              <!--ends here -->
                              <div class="w-full gradient-color-settings">
                                <div class="w-full pt-3 gradient-color-settings left-nav-text-icon-hover">
                                  <div class="pl-0 pr-0">
                                    <div class="items-center pb-2">
                                      <div class="hl-text-sm-regular">Navigation Tabs (Text & Icons hover color)</div>
                                    </div>
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-topnav-text-hover-color">Link Text Color:</label>
                                      <input
                                        type="color"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_topnav_text_hover_color')}"
                                        id="dc-colorPicker-adv-topnav-text-hover-color"
                                        class="themeselectoptions" />
                                      <b
                                        ><label for="dc-colorPicker-adv-topnav-text-hover-color" class="colorcode-label-adv-topnav-text-hover-color"
                                          ><code id="dc-colorCode-adv-topnav-text-hover-color">#8f98fa</code></label
                                        ></b
                                      >
                                    </div>
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-topnav-icon-hover-color">Link Text Active & Hover:</label>
                                      <input
                                        type="color"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_topnav_icon_hover_color')}"
                                        id="dc-colorPicker-adv-topnav-icon-hover-color"
                                        class="themeselectoptions" />
                                      <b
                                        ><label for="dc-colorPicker-adv-topnav-icon-hover-color" class="colorcode-label-adv-topnav-icon-hover-color"
                                          ><code id="dc-colorCode-adv-topnav-icon-hover-color">#8f98fa</code></label
                                        ></b
                                      >
                                    </div>
                                    <div class="dc-colorpicker-group">
                                      <label for="dc-colorPicker-adv-topnav-hover-active-bg-color">Hover & Active BG Color:</label>
                                      <input
                                        type="color"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_topnav_hover_active_bg_color')}"
                                        id="dc-colorPicker-adv-topnav-hover-active-bg-color"
                                        class="themeselectoptions" />
                                      <b
                                        ><label for="dc-colorPicker-adv-topnav-hover-active-bg-color" class="colorcode-label-adv-topnav-hover-active-bg-color"
                                          ><code id="dc-colorCode-adv-topnav-hover-active-bg-color">#8f98fa</code></label
                                        ></b
                                      >
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- ends here -->
                      <!-- Body Content -->
                      <div class="hl-card gradient-color-settings">
                        <div class="hl-card-header">
                          <div class="flex reset-wrap">
                            <div class="hl-text-md-normal"><strong> Content Body âŸ¶ Settings</strong></div>
                            <button id="resetbtn-body-settings" class="btn reset-option-profilebtn" data-toggle="tooltip" data-placement="top" title="Reset">
                              <i class="fa-solid fa-arrow-rotate-left"></i>
                            </button>
                          </div>
                        </div>
                        <div class="hl-card-content">
                          <div class="flex w-full">
                            <div class="w-full">
                              <!-- contentbody  gradient color -->
                              <div class="w-full gradient-color-settings">
                                <div class="pl-0 pr-0 pt-2">
                                  <div class="items-center pb-2">
                                    <div class="hl-text-sm-regular">Background Color</div>
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-bodycontent-start-col">Color Start:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_bodycontent_start_col')}"
                                      id="dc-colorPicker-adv-bodycontent-start-col"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-bodycontent-start-col" class="colorcode-label-adv-bodycontent-start-col"
                                        ><code id="dc-colorCode-adv-bodycontent-start-col">#8f98fa</code></label
                                      ></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-bodycontent-end-col">Color End:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_bodycontent_end_col')}"
                                      id="dc-colorPicker-adv-bodycontent-end-col"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-bodycontent-end-col" class="colorcode-label-adv-bodycontent-end-col"
                                        ><code id="dc-colorCode-adv-bodycontent-end-col">#8f98fa</code></label
                                      ></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-bodycontent-stop-perc">Color Stop Percentage:</label>
                                    <input
                                      class="small-input-px"
                                      type="number"
                                      id="dc-colorPicker-adv-bodycontent-stop-perc"
                                      name="dc-colorPicker-adv-bodycontent-stop-perc"
                                      placeholder="50"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_bodycontent_stop_perc')}"
                                      min="0"
                                      max="100"
                                      step="5" />
                                    <i class="input-unit">%</i>
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-bodycontent-gradient-deg">Gradient Angle:</label>
                                    <input
                                      class="small-input-px"
                                      type="text"
                                      id="dc-colorPicker-adv-bodycontent-gradient-deg"
                                      name="dc-colorPicker-adv-bodycontent-gradient-deg"
                                      placeholder="45"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_bodycontent_gradient_deg')}" />
                                    <i class="input-unit">Â°deg</i>
                                  </div>
                                  <div class="topnav-notes">For flat color in Content Body, choose same color for start & end, stop percentage: 0%, gradient angle: 0</div>
  
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-bodycontent-text-col">Content Text Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_bodycontent_text_col')}"
                                      id="dc-colorPicker-adv-bodycontent-text-col"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-bodycontent-text-col" class="colorcode-label-adv-bodycontent-text-col"
                                        ><code id="dc-colorCode-adv-bodycontent-text-col">#8f98fa</code></label
                                      ></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-link-text-col">Link Text Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_link_text_col')}"
                                      id="dc-colorPicker-adv-link-text-col"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-link-text-col" class="colorcode-label-adv-link-text-col"
                                        ><code id="dc-colorCode-adv-link-text-col">#8f98fa</code></label
                                      ></b
                                    >
                                  </div>
                                </div>
                              </div>
                              <!--ends here -->
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- ends here -->
                      <!-- Global button settins -->
                      <div class="hl-card buttons-settings">
                        <div class="hl-card-header">
                          <div class="flex reset-wrap">
                            <div class="hl-text-md-normal"><strong>Button âŸ¶ Settings</strong></div>
                            <button id="resetbtn-button-settings" class="btn reset-option-profilebtn" data-toggle="tooltip" data-placement="top" title="Reset">
                              <i class="fa-solid fa-arrow-rotate-left"></i>
                            </button>
                          </div>
                        </div>
                        <div class="hl-card-content">
                          <div class="flex w-full">
                            <div class="w-full">
                              <div class="w-full button-primary-settings">
                                <div class="pl-0 pr-0 pt-2">
                                  <div class="items-center pb-2">
                                    <div class="hl-text-sm-regular">Primary Button</div>
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-primary-btn-bgcol">Background Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_primary_btn_bgcol')}"
                                      id="dc-colorPicker-adv-primary-btn-bgcol"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-primary-btn-bgcol" class="colorcode-label-advanced"><code id="dc-colorCode-adv-primary-btn-bgcol">#8f98fa</code></label></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-primary-btn-bg-h-col">Background Hover Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_primary_btn_bg_h_col')}"
                                      id="dc-colorPicker-adv-primary-btn-bg-h-col"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-primary-btn-bg-h-col" class="colorcode-label-advanced"><code id="dc-colorCode-adv-primary-btn-bg-h-col">#8f98fa</code></label></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-primary-btn-txtcol">Text Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_primary_btn_txtcol')}"
                                      id="dc-colorPicker-adv-primary-btn-txtcol"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-primary-btn-txtcol" class="colorcode-label-advanced"><code id="dc-colorCode-adv-primary-btn-txtcol">#8f98fa</code></label></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-primary-btn-txt-h-col">Text Hover Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_primary_btn_txt_h_col')}"
                                      id="dc-colorPicker-adv-primary-btn-txt-h-col"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-primary-btn-txt-h-col" class="colorcode-label-advanced"><code id="dc-colorCode-adv-primary-btn-txt-h-col">#8f98fa</code></label></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-primary-btn-bdrcol">Border Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_primary_btn_bdrcol')}"
                                      id="dc-colorPicker-adv-primary-btn-bdrcol"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-primary-btn-bdrcol" class="colorcode-label-advanced"><code id="dc-colorCode-adv-primary-btn-bdrcol">#8f98fa</code></label></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-primary-btn-bdr-h-col">Border Hover Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_primary_btn_bdr_h_col')}"
                                      id="dc-colorPicker-adv-primary-btn-bdr-h-col"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-primary-btn-bdr-h-col" class="colorcode-label-advanced"><code id="dc-colorCode-adv-primary-btn-bdr-h-col">#8f98fa</code></label></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-primary-btn-radius">Border Radius:</label>
                                    <input
                                      class="small-input-px"
                                      type="text"
                                      id="dc-colorPicker-adv-primary-btn-radius"
                                      name="dc-colorPicker-adv-primary-btn-radius"
                                      placeholder="0px"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_primary_btn_radius')}" />
                                    <i class="input-unit">px</i>
                                  </div>
                                </div>
                              </div>
                              <div class="w-full button-secondary-settings">
                                <div class="pl-0 pr-0">
                                  <div class="items-center pb-2">
                                    <div class="hl-text-sm-regular">Secondary Button</div>
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-secondary-btn-bgcol">Background Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_secondary_btn_bgcol')}"
                                      id="dc-colorPicker-adv-secondary-btn-bgcol"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-secondary-btn-bgcol" class="colorcode-label-advanced"><code id="dc-colorCode-adv-secondary-btn-bgcol">#8f98fa</code></label></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-secondary-btn-bg-h-col">Background Hover Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_secondary_btn_bg_h_col')}"
                                      id="dc-colorPicker-adv-secondary-btn-bg-h-col"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-secondary-btn-bg-h-col" class="colorcode-label-advanced"
                                        ><code id="dc-colorCode-adv-secondary-btn-bg-h-col">#8f98fa</code></label
                                      ></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-secondary-btn-txtcol">Text Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_secondary_btn_txtcol')}"
                                      id="dc-colorPicker-adv-secondary-btn-txtcol"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-secondary-btn-txtcol" class="colorcode-label-advanced"><code id="dc-colorCode-adv-secondary-btn-txtcol">#8f98fa</code></label></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-secondary-btn-txt-h-col">Text Hover Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_secondary_btn_txt_h_col')}"
                                      id="dc-colorPicker-adv-secondary-btn-txt-h-col"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-secondary-btn-txt-h-col" class="colorcode-label-advanced"
                                        ><code id="dc-colorCode-adv-secondary-btn-txt-h-col">#8f98fa</code></label
                                      ></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-secondary-btn-bdrcol">Border Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_secondary_btn_bdrcol')}"
                                      id="dc-colorPicker-adv-secondary-btn-bdrcol"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-secondary-btn-bdrcol" class="colorcode-label-advanced"><code id="dc-colorCode-adv-secondary-btn-bdrcol">#8f98fa</code></label></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-secondary-btn-bdr-h-col">Border Hover Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_secondary_btn_bdr_h_col')}"
                                      id="dc-colorPicker-adv-secondary-btn-bdr-h-col"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-secondary-btn-bdr-h-col" class="colorcode-label-advanced"
                                        ><code id="dc-colorCode-adv-secondary-btn-bdr-h-col">#8f98fa</code></label
                                      ></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-secondary-btn-radius">Border Radius:</label>
                                    <input
                                      class="small-input-px"
                                      type="text"
                                      id="dc-colorPicker-adv-secondary-btn-radius"
                                      name="dc-colorPicker-adv-secondary-btn-radius"
                                      placeholder="0px"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_secondary_btn_radius')}" />
                                    <i class="input-unit">px</i>
                                  </div>
                                </div>
                              </div>
                              <div class="w-full button-default-settings">
                                <div class="pl-0 pr-0">
                                  <div class="items-center pb-2">
                                    <div class="hl-text-sm-regular">Default Button</div>
                                  </div>
  
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-default-btn-bgcol">Background Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_default_btn_bgcol')}"
                                      id="dc-colorPicker-adv-default-btn-bgcol"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-default-btn-bgcol" class="colorcode-label-advanced"><code id="dc-colorCode-adv-default-btn-bgcol">#8f98fa</code></label></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-default-btn-bg-h-col">Background Hover Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_default_btn_bg_h_col')}"
                                      id="dc-colorPicker-adv-default-btn-bg-h-col"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-default-btn-bg-h-col" class="colorcode-label-advanced"><code id="dc-colorCode-adv-default-btn-bg-h-col">#8f98fa</code></label></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-default-btn-txtcol">Text Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_default_btn_txtcol')}"
                                      id="dc-colorPicker-adv-default-btn-txtcol"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-default-btn-txtcol" class="colorcode-label-advanced"><code id="dc-colorCode-adv-default-btn-txtcol">#8f98fa</code></label></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-default-btn-txt-h-col">Text Hover Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_default_btn_txt_h_col')}"
                                      id="dc-colorPicker-adv-default-btn-txt-h-col"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-default-btn-txt-h-col" class="colorcode-label-advanced"><code id="dc-colorCode-adv-default-btn-txt-h-col">#8f98fa</code></label></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-default-btn-bdrcol">Border Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_default_btn_bdrcol')}"
                                      id="dc-colorPicker-adv-default-btn-bdrcol"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-default-btn-bdrcol" class="colorcode-label-advanced"><code id="dc-colorCode-adv-default-btn-bdrcol">#8f98fa</code></label></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-default-btn-bdr-h-col">Border Hover Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_default_btn_bdr_h_col')}"
                                      id="dc-colorPicker-adv-default-btn-bdr-h-col"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-default-btn-bdr-h-col" class="colorcode-label-advanced"><code id="dc-colorCode-adv-default-btn-bdr-h-col">#8f98fa</code></label></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-default-btn-radius">Border Radius:</label>
                                    <input
                                      class="small-input-px"
                                      type="text"
                                      id="dc-colorPicker-adv-default-btn-radius"
                                      name="dc-colorPicker-adv-default-btn-radius"
                                      placeholder="0px"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_default_btn_radius')}" />
                                    <i class="input-unit">px</i>
                                  </div>
                                </div>
                              </div>
                              <div class="w-full button-default_light-settings">
                                <div class="pl-0 pr-0">
                                  <div class="items-center pb-2">
                                    <div class="hl-text-sm-regular">Default Light Button</div>
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-default_light-btn-bgcol">Background Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_default_light_btn_bgcol')}"
                                      id="dc-colorPicker-adv-default_light-btn-bgcol"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-default_light-btn-bgcol" class="colorcode-label-advanced"
                                        ><code id="dc-colorCode-adv-default_light-btn-bgcol">#8f98fa</code></label
                                      ></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-default_light-btn-bg-h-col">Background Hover Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_default_light_btn_bg_h_col')}"
                                      id="dc-colorPicker-adv-default_light-btn-bg-h-col"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-default_light-btn-bg-h-col" class="colorcode-label-advanced"
                                        ><code id="dc-colorCode-adv-default_light-btn-bg-h-col">#8f98fa</code></label
                                      ></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-default_light-btn-txtcol">Text Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_default_light_btn_txtcol')}"
                                      id="dc-colorPicker-adv-default_light-btn-txtcol"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-default_light-btn-txtcol" class="colorcode-label-advanced"
                                        ><code id="dc-colorCode-adv-default_light-btn-txtcol">#8f98fa</code></label
                                      ></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-default_light-btn-txt-h-col">Text Hover Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_default_light_btn_txt_h_col')}"
                                      id="dc-colorPicker-adv-default_light-btn-txt-h-col"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-default_light-btn-txt-h-col" class="colorcode-label-advanced"
                                        ><code id="dc-colorCode-adv-default_light-btn-txt-h-col">#8f98fa</code></label
                                      ></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-default_light-btn-bdrcol">Border Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_default_light_btn_bdrcol')}"
                                      id="dc-colorPicker-adv-default_light-btn-bdrcol"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-default_light-btn-bdrcol" class="colorcode-label-advanced"
                                        ><code id="dc-colorCode-adv-default_light-btn-bdrcol">#8f98fa</code></label
                                      ></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-default_light-btn-bdr-h-col">Border Hover Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_default_light_btn_bdr_h_col')}"
                                      id="dc-colorPicker-adv-default_light-btn-bdr-h-col"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-default_light-btn-bdr-h-col" class="colorcode-label-advanced"
                                        ><code id="dc-colorCode-adv-default_light-btn-bdr-h-col">#8f98fa</code></label
                                      ></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-default_light-btn-radius">Border Radius:</label>
                                    <input
                                      class="small-input-px"
                                      type="text"
                                      id="dc-colorPicker-adv-default_light-btn-radius"
                                      name="dc-colorPicker-adv-default_light-btn-radius"
                                      placeholder="0px"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_default_light_btn_radius')}" />
                                    <i class="input-unit">px</i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- ends here -->
  
                      <!-- select application font family -->
                        <div id="app-font-style" class="p-0">
                          <div class="hl-card">
                            <div class="hl-card-header"><strong>App Font Style</strong></div>
                            <div class="hl-card-content">
                              <div class="tsg-disabled font-family-group">
                                <div class="dc-colorpicker-group mb-2">
                                  <label for="dc-colorPicker-font-family">Body Text:</label>
                                  <select id="dc-colorPicker-font-family" class="themeselectoptions" name="combobox">
                                        <option value="${get_panel_input_value(panel_vars, 'theme_font_family')}" selected>${get_panel_input_value(panel_vars, 'theme_font_family')}</option>
                                        `;
        // theme_font_families.forEach(function (option) { // theme_gen_overlay_html += option; // }); theme_gen_overlay_html += `${theme_font_families}`;
        theme_font_families.forEach(function (option) {
          theme_gen_overlay_html += option;
        });
        // theme_gen_overlay_html += `${theme_font_families}`;
        theme_gen_overlay_html += `
                                      </select>
                                </div>
                                <div class="d-none-temp-active">
                                  <div class="dc-colorpicker-group mt-1 mb-2">
                                    <label for="dc-colorPicker-font-family-h1">Heading 1 Text:</label>
                                    <select id="dc-colorPicker-font-family-h1" class="themeselectoptions">
                                          <option value="${get_panel_input_value(panel_vars, 'theme_font_family_h1')}" selected>${get_panel_input_value(panel_vars, 'theme_font_family_h1')}</option>
                                          `;
        theme_gen_overlay_html += `${theme_font_families}`;
        theme_gen_overlay_html += `
                                                                      </select>
                                  </div>
                                  <div class="dc-colorpicker-group mt-1 mb-2">
                                    <label for="dc-colorPicker-font-family-h2">Heading 2 Text:</label>
                                    <select id="dc-colorPicker-font-family-h2" class="themeselectoptions">
                                          <option value="${get_panel_input_value(panel_vars, 'theme_font_family_h2')}" selected>${get_panel_input_value(panel_vars, 'theme_font_family_h2')}</option>
                                          `;
        theme_gen_overlay_html += `${theme_font_families}`;
        theme_gen_overlay_html += `
                                        </select>
                                  </div>
                                  <div class="dc-colorpicker-group mt-1 mb-2">
                                    <label for="dc-colorPicker-font-family-h3">Heading 3 Text:</label>
                                    <select id="dc-colorPicker-font-family-h3" class="themeselectoptions">
                                          <option value="${get_panel_input_value(panel_vars, 'theme_font_family_h3')}" selected>${get_panel_input_value(panel_vars, 'theme_font_family_h3')}</option>
                                          `;
        theme_gen_overlay_html += `${theme_font_families}`;
        theme_gen_overlay_html += `
                                        </select>
                                  </div>
                                  <div class="dc-colorpicker-group mt-1 mb-2">
                                    <label for="dc-colorPicker-font-family-h4">Heading 4 Text:</label>
                                    <select id="dc-colorPicker-font-family-h4" class="themeselectoptions">
                                          <option value="${get_panel_input_value(panel_vars, 'theme_font_family_h4')}" selected>${get_panel_input_value(panel_vars, 'theme_font_family_h4')}</option>
                                          `;
        theme_gen_overlay_html += `${theme_font_families}`;
        theme_gen_overlay_html += `
                                        </select>
                                  </div>
                                  <div class="dc-colorpicker-group mt-1 mb-2">
                                    <label for="dc-colorPicker-font-family-sidemenu">Side Menu Text:</label>
                                    <select id="dc-colorPicker-font-family-sidemenu" class="themeselectoptions">
                                          <option value="${get_panel_input_value(panel_vars, 'theme_font_family_sidemenu')}" selected>
                                            ${get_panel_input_value(panel_vars, 'theme_font_family_sidemenu')}
                                          </option>
                                          `;
        theme_gen_overlay_html += `${theme_font_families}`;
        theme_gen_overlay_html += `
                                        </select>
                                  </div>
                                  <div class="dc-colorpicker-group mt-1 mb-2">
                                    <label for="dc-colorPicker-font-family-topmenu">Top Menu Text:</label>
                                    <select id="dc-colorPicker-font-family-topmenu" class="themeselectoptions">
                                          <option value="${get_panel_input_value(panel_vars, 'theme_font_family_topmenu')}" selected>
                                            ${get_panel_input_value(panel_vars, 'theme_font_family_topmenu')}
                                          </option>
                                          `;
        theme_gen_overlay_html += `${theme_font_families}`;
        theme_gen_overlay_html += `
                                        </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- ends here app font styles -->
                        <div class="hl-card headings-settings">
                        <div class="hl-card-header">
                          <div class="flex reset-wrap">
                            <div class="hl-text-md-normal"><strong>Heading âŸ¶ Settings </strong></div>
                            <button id="resetbtn-heading-settings" class="btn reset-option-profilebtn" data-toggle="tooltip" data-placement="top" title="Reset">
                              <i class="fa-solid fa-arrow-rotate-left"></i>
                            </button>
                          </div>
                        </div>
                        <div class="hl-card-content">
                          <div class="flex w-full">
                            <div class="w-full">
                              <div class="w-full heading-h1-settings pr-1">
                                <div class="pl-0 pr-0 pt-2">
                                  <!-- First row: Heading (h1) -->
                                  <div class="items-center pb-0 pt-2">
                                    <div class="hl-text-sm-regular">Heading (h1)</div>
                                  </div>
                                  <!-- Second row: Color and Size pickers -->
                                  <div class="heading-h1-settings__row">
                                    <!-- First column: Color picker -->
                                    <div class="dc-colorpicker-group heading-h1-settings__col">
                                      <label for="dc-colorPicker-adv-bodycontent-h1-text-col">Color:</label>
                                      <input
                                        type="color"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_bodycontent_h1_text_col')}"
                                        id="dc-colorPicker-adv-bodycontent-h1-text-col"
                                        class="themeselectoptions" />
                                      <b>
                                        <label for="dc-colorPicker-adv-bodycontent-h1-text-col" class="colorcode-label-adv-bodycontent-h1-text-col">
                                          <code id="dc-colorCode-adv-bodycontent-h1-text-col">#8f98fa</code>
                                        </label>
                                      </b>
                                    </div>
                                    <!-- Second column: Size picker -->
                                    <div class="dc-colorpicker-group heading-h1-settings__col">
                                      <label class="heading-size" for="dc-colorPicker-adv-bodycontent-h1-text-size">Size:</label>
                                      <input
                                        class="small-input-px"
                                        type="text"
                                        id="dc-colorPicker-adv-bodycontent-h1-text-size"
                                        name="dc-colorPicker-adv-bodycontent-h1-text-size"
                                        placeholder="20px"
                                        value="${get_panel_input_value(panel_vars, 'theme_adv_bodycontent_h1_text_size')}" />
                                      <i class="input-unit">px</i>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="w-full pt-3 pl-1 pb-3 heading-h1-settings">
                                  <div class="pl-0 pr-0 pt-2">
                                    <!-- First row: Heading (h2) -->
                                    <div class="items-center pb-0">
                                      <div class="hl-text-sm-regular">Heading (h2)</div>
                                    </div>
                                    <!-- Second row: Color and Size pickers -->
                                    <div class="heading-h1-settings__row">
                                      <!-- First column: Color picker -->
                                      <div class="dc-colorpicker-group heading-h1-settings__col">
                                        <label for="dc-colorPicker-adv-bodycontent-h2-text-col">Color:</label>
                                        <input
                                          type="color"
                                          value="${get_panel_input_value(panel_vars, 'theme_adv_bodycontent_h2_text_col')}"
                                          id="dc-colorPicker-adv-bodycontent-h2-text-col"
                                          class="themeselectoptions" />
                                        <b>
                                          <label for="dc-colorPicker-adv-bodycontent-h2-text-col" class="colorcode-label-adv-bodycontent-h2-text-col">
                                            <code id="dc-colorCode-adv-bodycontent-h2-text-col">#8f98fa</code>
                                          </label>
                                        </b>
                                      </div>
                                      <!-- Second column: Size picker -->
                                      <div class="dc-colorpicker-group heading-h1-settings__col">
                                        <label class="heading-size"  for="dc-colorPicker-adv-bodycontent-h2-text-size">Size:</label>
                                        <input
                                          class="small-input-px"
                                          type="text"
                                          id="dc-colorPicker-adv-bodycontent-h2-text-size"
                                          name="dc-colorPicker-adv-bodycontent-h2-text-size"
                                          placeholder="20px"
                                          value="${get_panel_input_value(panel_vars, 'theme_adv_bodycontent_h2_text_size')}" />
                                        <i class="input-unit">px</i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- ends here -->
                      </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li class="">
                  <div id="section-global-settings" class="link section-global-settings"><i class="fa-solid fa-right-to-bracket"></i>Login Page Settings <i class="fa fa-chevron-down"></i></div>
                  <ul class="submenu">
                    <li>
                      <div class="tsg-disabled overflow-frame scrollable">
                        <div id="login-section">
                          <div class="hl-card">
                            <div class="hl-card-header"><strong>Login Form </strong></div>
                            <div class="hl-card-content">
                              <div class="w-full button-default_light-settings login-form-1">
                                <div class="pl-0 pr-0">
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-input-bgcol">Input Background Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_input_bgcol')}"
                                      id="dc-colorPicker-adv-input-bgcol"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-input-bgcol" class="colorcode-label-advanced"
                                        ><code id="dc-colorcode-adv-input-bgcol">#8f98fa</code></label
                                      ></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-input-txtcol">Input Text Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_input_txtcol')}"
                                      id="dc-colorPicker-adv-input-txtcol"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-input-txtcol" class="colorcode-label-advanced"
                                        ><code id="dc-colorcode-adv-input-txtcol">#8f98fa</code></label
                                      ></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-input-iconcol">Input Icon Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_input_iconcol')}"
                                      id="dc-colorPicker-adv-input-iconcol"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-input-iconcol" class="colorcode-label-advanced"
                                        ><code id="dc-colorcode-adv-input-iconcol">#8f98fa</code></label
                                      ></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-input-bdrcol">Input Border Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_input_bdrcol')}"
                                      id="dc-colorPicker-adv-input-bdrcol"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-input-bdrcol" class="colorcode-label-advanced"
                                        ><code id="dc-colorCode-adv-input-bdrcol">#8f98fa</code></label
                                      ></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-input-bdrhover-col">Input Border Hover Color:</label>
                                    <input
                                      type="color"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_input_bdrhover_col')}"
                                      id="dc-colorPicker-adv-input-bdrhover-col"
                                      class="themeselectoptions" />
                                    <b
                                      ><label for="dc-colorPicker-adv-input-bdrhover-col" class="colorcode-label-advanced"
                                        ><code id="dc-colorCode-adv-input-bdrhover-col">#8f98fa</code></label
                                      ></b
                                    >
                                  </div>
                                  <div class="dc-colorpicker-group">
                                    <label for="dc-colorPicker-adv-input-radius">Input Border Radius:</label>
                                    <input
                                      class="small-input-px"
                                      type="text"
                                      id="dc-colorPicker-adv-input-radius"
                                      name="dc-colorPicker-adv-input-radius"
                                      placeholder="0px"
                                      value="${get_panel_input_value(panel_vars, 'theme_adv_input_radius_col')}" />
                                    <i class="input-unit">px</i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>                        
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <div id="section-advance-settings" class="link section-basic-settings"><i class="fa fa-database"></i>Advanced Settings <i class="fa fa-chevron-down"></i></div>
                  <div class="submenu">
                    <div id="section-advance-settings-wrap" class="tsg-disabled">
                      <div class="hl-card gradient-color-settings d-none">
                        <div class="hl-card-header">
                          <div class="flex reset-wrap">
                            <div class="hl-text-md-normal"><strong>New âŸ¶ Features</strong></div>
                            <button id="resetbtn-header-settings" class="btn reset-option-profilebtn" data-toggle="tooltip" data-placement="top" title="Reset">
                              <i class="fa-solid fa-arrow-rotate-left"></i>
                            </button>
                          </div>
                        </div>
                        <div class="hl-card-content">
                          <div class="flex w-full">
                            <div class="w-full">
                              <!-- header gradient color -->
                              <div class="w-full gradient-color-settings">
                                <div class="pl-0 pr-0 pt-0">
                                  <div id="activate-hcontrols-bl">
                                    <div class="hl-card">
                                      <div class="hl-card-content">
                                        <div class="dc-colorpicker-group">
                                          <label for="hcontrols-bl">Bottom Left Header Controls</label>
                                          <div class="hcontrols-bl">
                                            <input type="checkbox" id="hcontrols-bl" />
                                          </div>
                                        </div>
                                        <div class="dc-colorpicker-group">
                                          <label class="hcontrols-bl-sm" for="hcontrols-bl-sm">Header Controls as Small Icons </label>
                                          <div class="hcontrols-bl-sm">
                                            <input type="checkbox" id="hcontrols-bl-sm" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="items-center pb-2 pt-2"> 
                                  <div class="topnav-notes">We are proactively working on new features... </div>
                                  </div>
                                  
                                  
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="hl-card rename-bottom-margin">
                        <div class="hl-card-header">
                          <div class="">
                            <div class="hl-text-md-normal"><strong>What feature(s) you would like to add?</strong></div>
                          </div>
                        </div>
                        <div id="features-form" class="hl-card-content">
                          <div class="flex w-full">
                            <div class="w-full">
                              <div class="flex w-full">
                                <iframe
                                  src="https://lclink.co/widget/form/CtSgkpk8f2xbVjv8OeEl"
                                  style="width: 100%; height: 350px; border: none; border-radius: 0px"
                                  id="inline-CtSgkpk8f2xbVjv8OeEl"
                                  data-layout="{'id':'INLINE'}"
                                  data-trigger-type="alwaysShow"
                                  data-trigger-value=""
                                  data-activation-type="alwaysActivated"
                                  data-activation-value=""
                                  data-deactivation-type="neverDeactivate"
                                  data-deactivation-value=""
                                  data-form-name="Theme Builder Advanced Settings Feedback Form"
                                  data-height="566"
                                  data-layout-iframe-id="inline-CtSgkpk8f2xbVjv8OeEl"
                                  data-form-id="CtSgkpk8f2xbVjv8OeEl"
                                  title="Theme Builder Advanced Settings Feedback Form">
                                </iframe>
                                <script src="https://lclink.co/js/form_embed.js"></script>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <!--- THIS IS WRONG -->
              </ul>
            </div>
            <div id="processing-spinner">
              <div class="loader-wrap transition">
                <div class="confirmation-message transition">
                  <h2>Are you sure?</h2>
                  <p>You want to publish theme</p>
                  <!-- Default Vs Selected Location -->
                  <div id="publish-location-settings-wrap" class="">
                    <div id="publish-location-settings">
                      <div class="hl-card">
                        <div class="hl-card-content">
                          <div class="dc-colorpicker-group publish-location-group">
                            <label class="publish-locations-label-left" for="locations-check">For all <br />Sub-accounts</label>
                            <div class="publish-locations">
                              <input type="checkbox" id="locations-check" value="" />
                              <div class="card error-notice-tb">
                                <h3>Not a Valid Sub-Account</h3>
                                <p>Please swtich to sub-account to apply sub-account specific settings.</p>
                              </div>
                            </div>
                            <label class="publish-locations-label-right" for="locations-check">Selected <br />Sub-account</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="dc-colorpicker-group-t apply-selected-sub-account">
                      <label style="padding-bottom: 30px !important; padding-top: 0px !important; font-size: 14px !important"><strong class="underline location-name"></strong></label>
                    </div>
                    <div class="dc-colorpicker-group-t all-sub-account active">
                      <label style="padding-bottom: 30px !important; padding-top: 0px !important; font-size: 14px !important"><strong class="underline">All Sub-accounts</strong></label>
                    </div>
                  </div>
                  <!--  ends here -->
                  <button id="confimbtn" class="btn confimbtn" type="button"><i class="fa-solid fa-circle-check"></i> YES, I CONFIRM</button>
                  <button id="cancelbtn" class="btn cancelbtn" type="button"><i class="fa-solid fa-circle-xmark"></i> NO, CANCEL</button>
                </div>
                <div class="loader transition">
                  <div class="spinner"></div>
                  <div class="spinner-msg">
                    <br />
                    <br />
                    Saving & Rendering
                    <p>Your Awesome Theme</p>
                    <p class="spinner-error-msg">Setting up Layout & Applying Colors...</p>
                    <p class="spinner-error-msg-1">Generating Code...</p>
                    <p class="spinner-error-msg-2">Setup Finished</p>
                  </div>
                </div>
                <div class="generate-css-message transition">
                  <div class="success-message">
                    <h3>Theme Successfully Applied!</h3>
                    <p>
                      To apply these theme styles and layout settings, ensure that the Custom CSS is included in the sub-account branding settings. To disable the Theme Builder access button for members and other users, navigate back to the sub-account branding settings, disable the Editor toggle, and save the changes.
                    </p>
                    <div class="cjs-label almost-done">
                      <h4>You are almost done!</h4>
                      <p class="pb-4">Please click the "DONE" button below to proceed with the final rendering.</p>
                    </div>
                    <div class="done-refresh-wrap-1">
                          <button id="backbtn" class="btn backbtn cancelbtn" type="button"><i class="fa-solid fa-arrow-left"></i> BACK</button>
                          <button id="done-refresh" class="btn donebtn" type="button"><i class="fa-regular fa-circle-check"></i>DONE</button>
                        </div>
                  </div>
                  <div class="error-message">
                    <h3>Theme setup Failed!</h3>
                    <h3>Error occured!</h3>
                    <p class="error-msg-p1">Reference Key or Domain Verification failed while fetching the initial data for rendering the theme layout and colors.</p>
                    <p class="error-msg-p">Click the button to go back and fix the reference key and domain name then try again.</p>
                    <div class="hlpt_dc_btn_wrapper error-message-btn">
                      <button id="backbtn-error" class="btn backbtn-error cancelbtn-error" type="button"><i class="fa-solid fa-arrow-left"></i> BACK</button>
                    </div>
                  </div>
                  <div class="script-window hiddenbynature">
                    <div class="custom-javascript-generated">
                      <div style="position: relative">
                        <div class="cjs-label"><h4>Login & Logout Screens Theme CSS Script</h4></div>
                        <div id="copy2clipboard"><i class="fa-solid fa-circle-check"></i>Copied</div>
                        <textarea
                          placeholder="Custom Script"
                          name="generate-description"
                          class="hl-text-area-input text-gray-800 shadow-sm block w-full focus:outline-none focus:ring-offset-curious-blue-500 focus:border-curious-blue-500 sm:text-sm border-gray-300 rounded-md disabled:opacity-50 js-cs-custom-window-textarea"
                          label="Custom Javascript"
                          type="text"
                          rows="4"></textarea>
                        <span id="copytoclipboard-btn" class="copytoclipboard-btn">Copy &nbsp;<i class="fa-regular fa-copy"></i></span>
                        <div class="done-refresh-wrap-1">
                          <p>
                            Copy the above script and paste it to the custom CSS Box of sub account client portal under branding section in advanced settings. Once you complete this process, press the
                            below green "DONE" button and enjoy!
                          </p>
                          <button id="backbtn" class="btn backbtn cancelbtn" type="button"><i class="fa-solid fa-arrow-left"></i> BACK</button>
                          <button id="done-refresh" class="btn donebtn" type="button"><i class="fa-regular fa-circle-check"></i>DONE</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="showmore-step3">
            <div class="hlpt_dc_btn_wrapper">
              <button id="generate-script-js" class="dc-savebtn" type="button"><i class="fa-solid fa-floppy-disk-circle-arrow-right"></i>${selected_theme_save_btn_message}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--ends here -->
      `;
        add_elem_dc_panel.innerHTML = theme_gen_overlay_html;
        add_elem_dc_panel.classList.add('dc-panel');
        add_elem_dc_panel.setAttribute('id', 'dashboard-customizer-panel');
        add_elem_dc_panel.style.display = 'none';
        const create_cptb_panel = document.querySelector('#app');
        if (typeof create_cptb_panel !== 'undefined' && create_cptb_panel) {
          create_cptb_panel.prepend(add_elem_dc_panel);
        }
      }
    }
    ///////////////////// ******************** //////////////////////////
    ///////////////////// end of tb panel  ///////////////////////////
    ///////////////////// ******************** //////////////////////////
    const hlpt_specify_agency_admin = () => {
      var page_header = document.querySelector('#app');
      if (document.body.contains(page_header) && !document.body.classList.contains('cptb')) {
        document.body.classList.add('cptb');
      }
    };
    function removePreloader() {
      setTimeout(() => {
        const preloader = document.querySelector('#preloader');
        const body = document.body;
        if (body.style.cssText === '' && preloader.style.display === 'none') {
          return;
        }
        body.style.opacity = '1';
        preloader.style.display = 'none';
        body.style.removeProperty('opacity');
        body.style.removeProperty('background');
        // console.log(`preloader removed`);
      }, 500);
    }
    const mo_isAdmin = function () {
      const targetNode = document.querySelector('#app');
      const config = { attributes: true, childList: true, subtree: true };
      const observer = new MutationObserver(function (mutations) {
        hlpt_specify_agency_admin();
        const rootStyles = getComputedStyle(document.documentElement);
        const secondaryThemeBgColorTint = rootStyles.getPropertyValue('--hlpt-secondary-theme-bg-color-tint').trim();
        if (secondaryThemeBgColorTint) {
          removePreloader();
        }
      });
      observer.observe(targetNode, config);
    };
    const fetchlid = (callback) => {
      const getSubdomainFromUrl = () => {
        let locationId = '';
        let url = document.location.href;
        let hostname = "app.thedemoaccount.com";
        let parts = hostname.split('.');
  
        if (parts.length > 2) {
          locationId = parts[0];
        }
        return locationId;
      };
      const checkLocationId = () => {
        const locationId = getSubdomainFromUrl();
  
        if (locationId) {
          callback(locationId);
        } else {
          callback('');
        }
      };
      checkLocationId();
    };
    fetchlid((locationId) => {
      if (locationId !== '') {
        window.current_location_id = locationId;
      } else {
        // console.log(`Key not found`);
      }
    });
  
    // *********** DATA TO SEND  *********** */
    const theme_data_to_send = (ls_key, obj_item) => {
      let return_val = '';
      if (typeof obj_item !== 'undefned' && obj_item) return_val = obj_item;
      if (ls_key && localStorage.getItem(ls_key)) {
        return_val = localStorage.getItem(ls_key);
      }
      // console.log(`data to db ${return_val}`);
      return return_val;
    };
    const formatted_theme_data_to_send = function () {
      var ls_obj_general = get_ls_obj_general();
      var ls_obj_advanced = get_ls_obj_advanced();
      let ls_obj = {
        ...ls_obj_general,
        ...ls_obj_advanced,
      };
      const theme_data_post_db = {};
      for (const [key, value] of Object.entries(ls_obj)) {
        theme_data_post_db[key] = theme_data_to_send(key, value);
      }
      return theme_data_post_db;
    };
    //// setup data attributes***.
    const get_data_attribute_value = function (data_attribute_name) {
      let data_attribute_value = '';
      if (data_attribute_name == 'data-ark') {
        data_attribute_value = 'REFERENCE_KEY';
      }
      if (data_attribute_name == 'data-lid') {
        data_attribute_value = 'LOCATION_ID';
      }
      if (data_attribute_name == 'data-domain') {
        data_attribute_value = 'domainname';
      }
      let ark_att = document.getElementById(data_ark_id);
      if (document.body.contains(ark_att)) {
        if (ark_att.hasAttribute(data_attribute_name)) {
          data_attribute_value = ark_att.getAttribute(data_attribute_name);
        }
      } else if (document.head.contains(ark_att)) {
        if (ark_att.hasAttribute(data_attribute_name)) {
          data_attribute_value = ark_att.getAttribute(data_attribute_name);
        }
      }
      return data_attribute_value;
    };
    //// setup PUT - POST data.
    const theme_data_to_db = function () {
      let location_id = window.current_location_id;
      const themegen_settings = {};
      themegen_settings['settings'] = {};
      themegen_settings['settings'] = formatted_theme_data_to_send();
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      var raw = JSON.stringify(themegen_settings);
      var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };
      const loader = document.querySelector('.loader');
      const generate_css_message = document.querySelector('.generate-css-message');
      const error_message = document.querySelector('.error-message');
      const success_message = document.querySelector('.success-message');
      const script_cutom_window_wrapper = document.querySelector('.hiddenbynature');
  
      var api_url = themecptb + '?d=' + get_data_attribute_value('data-domain') + '&k=' + get_data_attribute_value('data-ark') + '&l=' + location_id;
      // console.log(`api_url: ${api_url}`);
  
      fetch(api_url, requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.text();
        })
  
        .then((data) => {
          console.log('Success:', data);
          if (typeof loader !== 'undefined' && loader) {
            loader.style.setProperty('display', 'none', 'important');
            loader.style.opacity = '0';
          }
          if (typeof generate_css_message !== 'undefined' && generate_css_message) {
            generate_css_message.style.setProperty('display', 'block', 'important');
            generate_css_message.style.opacity = '1';
          }
          if (typeof error_message !== 'undefined' && error_message) {
            error_message.style.setProperty('display', 'none', 'important');
            error_message.style.opacity = '0';
          }
          if (typeof success_message !== 'undefined' && success_message) {
            success_message.style.setProperty('display', 'block', 'important');
            success_message.style.opacity = '1';
          }
          if (typeof script_cutom_window_wrapper !== 'undefined' && script_cutom_window_wrapper) {
            script_cutom_window_wrapper.style.setProperty('display', 'none', 'important');
            script_cutom_window_wrapper.style.opacity = '0';
          }
        })
  
        .catch((error) => {
          console.error('Error:', error);
          if (typeof loader !== 'undefined' && loader) {
            loader.style.setProperty('display', 'none', 'important');
            loader.style.opacity = '0';
          }
          if (typeof error_message !== 'undefined' && error_message) {
            error_message.style.setProperty('display', 'block', 'important');
            error_message.style.opacity = '1';
          }
          if (typeof generate_css_message !== 'undefined' && generate_css_message) {
            generate_css_message.style.setProperty('display', 'block', 'important');
            generate_css_message.style.opacity = '1';
          }
          if (typeof success_message !== 'undefined' && success_message) {
            success_message.style.setProperty('display', 'none', 'important');
            success_message.style.opacity = '0';
          }
          if (typeof script_cutom_window_wrapper !== 'undefined' && script_cutom_window_wrapper) {
            script_cutom_window_wrapper.style.setProperty('display', 'none', 'important');
            script_cutom_window_wrapper.style.opacity = '0';
          }
        });
    };
    //// setup GET-Receive data.
    const hlpt_loadEmbed = (url, cb) => {
      let xmlhttp;
      xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          cb(xmlhttp.responseText);
        }
      };
      xmlhttp.open('GET', url, true);
      xmlhttp.send();
    };
    const is_user_allowed = function () {
      let page_url = document.location.href;
      let user_allowed = false;
      if (page_url.includes('app.gohighlevel.com') || document.body.classList.contains('cptb')) {
        user_allowed = true;
      }
      return user_allowed;
    };
  
    //// setup to add dynamic stylesheets
    const add_styles = (linkid, linkurl) => {
      if (!document.head.contains(document.querySelector('#' + linkid))) {
        let link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.id = linkid;
        // link.href = linkurl + '?v=' + Date.now();
        link.href = linkurl;
        document.getElementsByTagName('HEAD')[0].appendChild(link);
      }
    };
  
    function cptb_data_loc() {
      return new Promise((resolve, reject) => {
        hlpt_loadEmbed(themecptb + '?k=' + get_data_attribute_value('data-ark') + '&l=' + window.current_location_id, function (k) {
          try {
            let cptb_data = JSON.parse(k);
            window.theme_data_cptb = cptb_data;
            console.log('lid recheck:', window.theme_data_cptb);
            resolve();
          } catch (error) {
            reject(error);
          }
        });
      });
    }
  
    const get_editor_status = async function () {
      await cptb_data_loc();
      let cptb_data = window.theme_data_cptb;
      if (typeof cptb_data === 'object' && cptb_data.hasOwnProperty('clientportalsetup')) {
        let cptb_data_setup = cptb_data.clientportalsetup;
        window.editor_enabled = cptb_data_setup.editor_enabled;
      }
    };
  
    const create_theme_gen_userinfo_btn = async function () {
      await get_editor_status();
      if (is_user_allowed()) {
        const cptb_userinfo = document.querySelector('#pg-afcp-navbar__edit-profile');
        if (!document.body.contains(document.querySelector('#cptb-header-btn')) && cptb_userinfo) {
          const cptbHeaderBtn = document.createElement('div');
          cptbHeaderBtn.innerHTML = `<div class="btn custom-cptb-header-btn"><span style="padding: 7px 10px;">Theme Builder</span></div>`;
          cptbHeaderBtn.setAttribute('id', 'cptb-header-btn');
          cptbHeaderBtn.classList.add('hl-header--cptb-header-btn', 'cptb-hide');
          cptb_userinfo.insertAdjacentElement('afterend', cptbHeaderBtn);
        }
        const cbtb_btn = document.querySelector('#cptb-header-btn');
        const lid = get_data_attribute_value('data-lid').toLowerCase();
        // const editor = get_data_attribute_value('data-editor').toLowerCase();
        const editor = window.editor_enabled;
        const currentLocationId = window.current_location_id.toLowerCase();
        if (lid === currentLocationId && editor) {
          if (cbtb_btn) cbtb_btn.classList.remove('cptb-hide');
          hideLoader();
        } else {
          if (cbtb_btn) cbtb_btn.classList.add('cptb-hide');
          hideLoader();
        }
        const panel_Reference = document.querySelector('#dashboard-customizer-panel');
        if (cbtb_btn && panel_Reference) {
          cbtb_btn.addEventListener('click', function (event) {
            event.stopPropagation();
            panel_Reference.style.display = 'block';
          });
        }
        theme_gen_close_btn();
      }
    };
  
    const create_cptb_userinfo_btn = function () {
      const clickBtn = document.querySelector('#pg-afcp-navbar__navigation-page-img-avatar-profile-btn');
      if (!document.body.contains(clickBtn)) {
        setTimeout(create_cptb_userinfo_btn, 250);
      } else {
        if (is_user_allowed()) {
          if (clickBtn) {
            clickBtn.addEventListener('click', function () {
              // create_theme_gen_userinfo_btn();
              setTimeout(function () {
                const cptb_userinfo = document.querySelector('#pg-afcp-navbar__edit-profile');
                if (cptb_userinfo) {
                  create_theme_gen_userinfo_btn();
                }
              }, 100);
            });
          }
        }
      }
    };
    //// setup selected theme display in theme selection dropdown
    const dropdown_selected_theme_display = function () {
      const theme_published_vs_disabled =
        window.selected_theme !== 'theme_custom' ? `<span class="modify-theme-btn"> \u2190 Published (â˜…)</span>` : '<span class="modify-theme-btn"> \u2190 Theme Disabled</span>';
      const dropdown_options = document.querySelector('#dc-themeName');
      if (typeof dropdown_options !== 'undefined' && dropdown_options) {
        for (let i = 0; i < dropdown_options.options.length; i++) {
          if (dropdown_options.options[i].getAttribute('selected1') !== null) {
            dropdown_options.options[i].innerHTML += `${theme_published_vs_disabled}`;
            break;
          }
        }
      }
    };
    //// setup init LS from Db or from object
    const initial_theme_value = (cw_icons_value, ls_key, obj_item, window_item) => {
      var selectedtheme = '';
      if (window.selected_theme) selectedtheme = window.selected_theme;
  
      var publishedTheme = '';
      if (typeof window.themegen_settings === 'object' && window.themegen_settings) publishedTheme = window.themegen_settings.selected_theme;
  
      if (window.selected_theme === '') {
        if (typeof obj_item !== 'undefined' && obj_item) localStorage.setItem(ls_key, obj_item);
      } else {
        if (typeof window_item !== 'undefined' && window_item) {
          localStorage.setItem(ls_key, window_item);
        } else if (typeof obj_item !== 'undefined' && obj_item) {
          localStorage.setItem(ls_key, obj_item);
        }
      }
    };
    const setup_initial_theme_values = function () {
      var ls_obj_general = get_ls_obj_general();
      var ls_obj_advanced = get_ls_obj_advanced();
      let ls_obj = {
        ...ls_obj_general,
        ...ls_obj_advanced,
      };
  
      var ls_window_general = get_ls_window_general();
      var ls_window_advanced = get_ls_window_advanced();
      let ls_window = {
        ...ls_window_general,
        ...ls_window_advanced,
      };
  
      let cw_icons_value = get_cw_icons_values();
  
      if (window.selected_theme === '') {
        localStorage.setItem('selected_theme', 'theme_darkcherry');
  
        if (typeof dashboard_themes.theme_data.theme_darkcherry.theme_font_family !== 'undefined')
          localStorage.setItem('theme_font_family', dashboard_themes.theme_data.theme_darkcherry.theme_font_family);
  
        if (typeof dashboard_themes.theme_data.theme_darkcherry.theme_font_family_h1 !== 'undefined')
          localStorage.setItem('theme_font_family_h1', dashboard_themes.theme_data.theme_darkcherry.theme_font_family_h1);
  
        if (typeof dashboard_themes.theme_data.theme_darkcherry.theme_font_family_h2 !== 'undefined')
          localStorage.setItem('theme_font_family_h2', dashboard_themes.theme_data.theme_darkcherry.theme_font_family_h2);
  
        if (typeof dashboard_themes.theme_data.theme_darkcherry.theme_font_family_h3 !== 'undefined')
          localStorage.setItem('theme_font_family_h3', dashboard_themes.theme_data.theme_darkcherry.theme_font_family_h3);
  
        if (typeof dashboard_themes.theme_data.theme_darkcherry.theme_font_family_h4 !== 'undefined')
          localStorage.setItem('theme_font_family_h4', dashboard_themes.theme_data.theme_darkcherry.theme_font_family_h4);
  
        if (typeof dashboard_themes.theme_data.theme_darkcherry.theme_font_family_sidemenu !== 'undefined')
          localStorage.setItem('theme_font_family_sidemenu', dashboard_themes.theme_data.theme_darkcherry.theme_font_family_sidemenu);
  
        if (typeof dashboard_themes.theme_data.theme_darkcherry.theme_font_family_topmenu !== 'undefined')
          localStorage.setItem('theme_font_family_topmenu', dashboard_themes.theme_data.theme_darkcherry.theme_font_family_topmenu);
      }
      var ls_obj_keys = Object.keys(ls_obj);
      for (var i = 0; i < ls_obj_keys.length; i++) {
        var ls_key = ls_obj_keys[i];
        var obj_item = '';
        if (typeof ls_obj === 'object' && ls_obj.hasOwnProperty(ls_key)) obj_item = ls_obj[ls_key];
        var window_item = '';
        if (typeof ls_window === 'object' && ls_window.hasOwnProperty(ls_key)) window_item = ls_window[ls_key];
        initial_theme_value(cw_icons_value, ls_key, obj_item, window_item);
      }
      var init_message = window.selected_theme === '' ? 'Hey, Welcome to Client Portal' : 'Hey Welcome Back to CP';
      // console.log(`${init_message}`);
    };
    //// setup multiple sections DOM i.e. general settings, login settings, advanced settings.
    const setup_multiple_sections_panel_access = function () {
      const multi_section_advanced = document.querySelector('#show-hide-sections');
      if (typeof multi_section_advanced !== 'undefined' && multi_section_advanced) {
        let currentSection = null;
        const links = document.querySelectorAll('.link');
        if (links.length > 0) {
          links[0].classList.add('open');
          const firstSection = links[0].nextElementSibling;
          firstSection.classList.add('open');
          firstSection.style.maxHeight = '430px';
          currentSection = firstSection;
  
          links.forEach(function (link) {
            link.addEventListener('click', function (e) {
              e.preventDefault();
              links[0].classList.remove('open');
              const next = link.nextElementSibling;
              if (currentSection !== next) {
                if (currentSection) {
                  currentSection.classList.remove('open');
                  currentSection.parentNode.classList.remove('open');
                  currentSection.style.maxHeight = '0';
                }
                next.classList.add('open');
                link.parentNode.classList.add('open');
                next.style.maxHeight = next.scrollHeight + 'px';
                currentSection = next;
              }
            });
          });
        }
      }
    };
    /// apply styles on select drowpdown theme builder panel
    const update_styles_dropdown_themes = function () {
      const theme_select_dropdown = document.querySelector('#dc-themeName');
      if (typeof theme_select_dropdown !== 'undefined' && theme_select_dropdown) {
        theme_select_dropdown.addEventListener('mousemove', function (event) {
          const hoveredOption = document.elementFromPoint(event.clientX, event.clientY);
          const options = document.getElementsByTagName('option');
          if (typeof options !== 'undefined' && options) {
            for (let i = 0; i < options.length; i++) {
              options[i].style.setProperty('background-color', 'rgba(255, 255, 255, 0.1)', 'important');
            }
          }
          if (hoveredOption.tagName === 'OPTION') {
            hoveredOption.style.setProperty('background-color', '#rgba(255, 255, 255, 0.1)', 'important');
          }
          const hoverElement = document.querySelector('.themeoptions');
          if (typeof hoverElement !== 'undefined' && hoverElement) {
            hoverElement.addEventListener('mouseover', function () {
              hoverElement.style.backgroundColor = 'blue';
            });
            hoverElement.addEventListener('mouseout', function () {
              hoverElement.style.backgroundColor = '#f0f0f0';
            });
          }
        });
      }
    };
  
    /////////// Theme Builder Panel
    const hlpt_display_dashboard_customizer_panel = () => {
      var selectedtheme = 'theme_custom';
      if (window.selected_theme) selectedtheme = window.selected_theme;
  
      if (is_user_allowed()) {
        tb_panel();
      }
      setup_multiple_sections_panel_access();
      handle_theme_change();
      update_input_fields_from_ls();
      generate_button_listners();
      update_styles_dropdown_themes();
      dropdown_selected_theme_display();
      select_theme_notifier();
      theme_gen_dragable();
      // setup_login_form_pos();
      save_settings_confirmation('');
      setup_font_family();
    };
  
    //// setup dynamic stylesheet
    const remove_dynamic_stylesheets = function () {
      if (document.head.contains(document.querySelector('#clientportal-theme-main'))) {
        document.querySelector('#clientportal-theme-main').remove();
      }
    };
    //// process input color change to LC
    const color_change_listner = (ls_key, element_id) => {
      if (ls_key && typeof ls_key !== 'undefined' && element_id && typeof element_id !== 'undefined') {
        const textarea_input = document.querySelector('.js-cs-custom-window-textarea');
        const unsaved_changes = document.querySelector('.close-theme-customizer-wrapper');
        var selected_element = document.querySelector('#' + element_id);
  
        if (typeof selected_element !== 'undefined' && selected_element && typeof unsaved_changes !== 'undefined' && unsaved_changes) {
          selected_element.addEventListener('change', function handleChange(event) {
            localStorage.setItem(ls_key, event.target.value);
            unsaved_changes.classList.add('showunsaved-changes');
            textarea_input.value = '';
          });
        }
      }
    };
    //// get lckey and nput id for color change to LS
    const input_color_change_listners = function () {
      var ls_obj_general = get_ls_obj_general();
      var ls_obj_advanced = get_ls_obj_advanced();
      let ls_obj = {
        ...ls_obj_general,
        ...ls_obj_advanced,
      };
  
      var ls_elem_id_no_cc_general = get_ls_elem_id_no_cc_general();
      var ls_elem_id_no_cc_advanced = get_ls_elem_id_no_cc_advanced();
      let ls_elem_id = {
        ...ls_elem_id_no_cc_general,
        ...ls_elem_id_no_cc_advanced,
      };
  
      var ls_obj_keys = Object.keys(ls_obj);
      for (var i = 0; i < ls_obj_keys.length; i++) {
        if (ls_obj_keys[i] && typeof ls_elem_id !== 'undefined' && ls_elem_id.hasOwnProperty(ls_obj_keys[i]) && ls_elem_id[ls_obj_keys[i]]) {
          color_change_listner(ls_obj_keys[i], ls_elem_id[ls_obj_keys[i]]);
        }
      }
    };
    //// setup tb panel close button
    const theme_gen_close_btn = function () {
      const panel_Reference = document.querySelector('#dashboard-customizer-panel');
      const close_theme_btn = document.querySelector('.close-theme-customizer');
      if (typeof close_theme_btn !== 'undefined' && close_theme_btn && typeof panel_Reference !== 'undefined' && panel_Reference) {
        close_theme_btn.addEventListener('click', function () {
          panel_Reference.style.display = 'none';
        });
      }
    };
    /* global loader NOT IN USE */
    const load_content_loader_global = function () {
      const is_app_ready = document.querySelector('#app');
      if (!document.body.contains(is_app_ready)) {
        setTimeout(load_content_loader_global, 250);
      } else {
        const wrapperDiv = document.createElement('div');
        wrapperDiv.innerHTML = `
          <div id="content-loader-global">
            <div id="loader-full-overlay">
              <div class="loader-wrapper">
                <div class="loader-pro transition">
                  <div class="spinner"></div>
                  <div class="spinner-msg spinner-msg-1 spinner-msg-2">
                    <br />Rendering
                    <p class="spinner-error-msg">Loading fresh data...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
        wrapperDiv.style.setProperty('position', 'relative', '');
        wrapperDiv.style.setProperty('display', 'none', '');
        is_app_ready.before(wrapperDiv);
      }
    };
    /* global loader  */
    function showLoader() {
      const loader = document.getElementById('content-loader-global');
      if (loader) {
        const parent = loader.parentElement;
        loader.style.setProperty('display', 'block', 'important');
        parent.style.setProperty('display', 'block', '');
      }
    }
    function hideLoader() {
      const loader = document.getElementById('content-loader-global');
      if (loader) {
        loader.style.setProperty('display', 'none', 'important');
  
        const parent = loader.parentElement;
        parent.style.setProperty('display', 'none', '');
      }
      document.body.style.removeProperty('opacity');
    }
    /* global loader ends here */
    //// setup theme change
    const handle_theme_change = function () {
      mo_acs();
      let choosen_theme = window.selected_theme;
      if (typeof document.querySelector('#dc-themeName') !== 'undefined' && document.querySelector('#dc-themeName')) {
        document.querySelector('#dc-themeName').addEventListener('change', function handleChange(event) {
          showLoader();
          choosen_theme = event.target.value;
          update_theme_styles(choosen_theme);
          setTimeout(() => {
            hideLoader();
          }, 800);
        });
      }
      return choosen_theme;
    };
    //// setup theme element notification
    const select_theme_notifier = function () {
      const select_blank = document.querySelector('#notifier');
      const select_blank_input = document.querySelector('#dc-themeName');
      if (typeof select_blank !== 'undefined' && select_blank) {
        if (select_blank_input.value === '') {
          select_blank.style.display = 'block';
          document.querySelector('#dc-colorPicker-primary').disabled = false;
          document.querySelector('#dc-colorPicker-primarybg').disabled = false;
          document.querySelector('#dc-colorPicker-bg-gradient').disabled = false;
          document.querySelector('#dc-colorPicker-leftsidebar-txtcol').disabled = false;
          document.querySelector('#dc-colorPicker-leftsidebar-iconcol').disabled = false;
          document.querySelector('#dc-colorPicker-primary').style.cursor = 'pointer';
          document.querySelector('#dc-colorPicker-primarybg').style.cursor = 'pointer';
          document.querySelector('#dc-colorPicker-bg-gradient').style.cursor = 'pointer';
          document.querySelector('#dc-colorPicker-leftsidebar-txtcol').style.cursor = 'pointer';
          document.querySelector('#dc-colorPicker-leftsidebar-iconcol').style.cursor = 'pointer';
  
          if (typeof textarea_input !== 'undefined' && textarea_input) {
            textarea_input.value = '';
          }
        }
        if (typeof select_blank !== 'undefined' && select_blank) {
          select_blank_input.addEventListener('change', function handleChange(event) {
            select_blank.style.display = 'none';
            document.querySelector('#dc-colorPicker-primary').disabled = false;
            document.querySelector('#dc-colorPicker-primarybg').disabled = false;
            document.querySelector('#dc-colorPicker-bg-gradient').disabled = false;
            document.querySelector('#dc-colorPicker-leftsidebar-txtcol').disabled = false;
            document.querySelector('#dc-colorPicker-leftsidebar-iconcol').disabled = false;
            document.querySelector('#dc-colorPicker-primary').style.cursor = 'pointer';
            document.querySelector('#dc-colorPicker-primarybg').style.cursor = 'pointer';
            document.querySelector('#dc-colorPicker-bg-gradient').style.cursor = 'pointer';
            document.querySelector('#dc-colorPicker-leftsidebar-txtcol').style.cursor = 'pointer';
            document.querySelector('#dc-colorPicker-leftsidebar-iconcol').style.cursor = 'pointer';
          });
        }
      }
    };
    //// setup theme interaction for pages conditionally swtich to other screen
    const tb_panel_interactive_styles = function () {
      const tsgpanel_card = document.querySelector('.tsg-panel');
      const select_blank_input = document.querySelector('#dc-themeName');
      const showmore_step2 = document.querySelector('.showmore-step2');
      const showmore_step3 = document.querySelector('.showmore-step3');
      const card_header = document.querySelector('.dc-card-header');
      const card_header_h3 = document.querySelector('.card-header-h3');
      const card_header_description_p = document.querySelector('.dc-item-description p');
      const card_header_title = document.querySelector('.dc-title');
      const card_header_mainlabel = document.querySelector('#mainlabel');
      const card_header_theme_label = document.querySelector('.hl-oe__item-wrap.dc-wrap');
      const card_header_selectBtn = document.querySelector('.dc-themeName-wrap #dc-themeName');
      const card_header_selectBtn_wrap = document.querySelector('.dc-themeName-wrap');
      const notifier_placement = document.querySelector('#notifier');
      const show_hide_sections = document.querySelector('.show-hide-sections');
      const show_hide_savebtn = document.querySelector('.dc-savebtn');
      // const show_hide_greetings = document.querySelector('.greetings');
      if (
        typeof select_blank_input !== 'undefined' &&
        select_blank_input &&
        typeof showmore_step2 !== 'undefined' &&
        showmore_step2 &&
        !showmore_step2.classList.contains('showmore-step2--dina') &&
        typeof showmore_step3 !== 'undefined' &&
        showmore_step3 &&
        !showmore_step3.classList.contains('showmore-step3--dina') &&
        typeof card_header !== 'undefined' &&
        card_header &&
        !card_header.classList.contains('dc-card-header--dina') &&
        typeof card_header_h3 !== 'undefined' &&
        card_header_h3 &&
        !card_header_h3.classList.contains('card-header-h3--dina') &&
        typeof card_header_description_p !== 'undefined' &&
        card_header_description_p &&
        !card_header_description_p.classList.contains('hideme') &&
        typeof card_header_title !== 'undefined' &&
        card_header_title &&
        !card_header_title.classList.contains('hideme') &&
        typeof card_header_mainlabel !== 'undefined' &&
        card_header_mainlabel &&
        !card_header_mainlabel.classList.contains('hideme') &&
        typeof card_header_selectBtn !== 'undefined' &&
        card_header_selectBtn &&
        !card_header_selectBtn.classList.contains('dc-themeName--dina') &&
        typeof card_header_selectBtn_wrap !== 'undefined' &&
        card_header_selectBtn_wrap &&
        !card_header_selectBtn_wrap.classList.contains('dc-themeName-wrap--dina') &&
        typeof card_header_theme_label !== 'undefined' &&
        card_header_theme_label &&
        !card_header_theme_label.classList.contains('dc-wrap--dina') &&
        typeof notifier_placement !== 'undefined' &&
        notifier_placement &&
        !tsgpanel_card.classList.contains('tsg-panel--dina') &&
        typeof tsgpanel_card !== 'undefined' &&
        tsgpanel_card &&
        typeof show_hide_sections !== 'undefined' &&
        show_hide_sections &&
        !show_hide_sections.classList.contains('show_hide_sections--dina')
      ) {
        select_blank_input.addEventListener('change', function handleChange(event) {
          showmore_step2.classList.add('showmore-step2--dina');
          showmore_step3.classList.add('showmore-step3--dina');
          card_header.classList.add('dc-card-header--dina');
          card_header_h3.classList.add('card-header-h3--dina');
          card_header_description_p.classList.add('hideme');
          card_header_title.classList.add('hideme');
          card_header_mainlabel.classList.add('hideme');
          card_header_selectBtn.classList.add('dc-themeName--dina');
          card_header_selectBtn_wrap.classList.add('dc-themeName-wrap--dina');
          card_header_theme_label.classList.add('dc-wrap--dina');
          tsgpanel_card.classList.add('tsg-panel--dina');
          show_hide_sections.classList.add('show_hide_sections--dina');
        });
      }
    };
    //// setup button listners
    const generate_button_listners = function () {
      const script_cutom_window_wrapper = document.querySelector('.hiddenbynature');
      const confirmation_message = document.querySelector('.confirmation-message');
      const generate_css_message = document.querySelector('.generate-css-message');
      const generate_script_js_btn = document.querySelector('#generate-script-js');
      const loader_wrap = document.querySelector('.loader-wrap');
      const almost_done = document.querySelector('.almost-done');
      var selected_theme = '';
      if (window.selected_theme) selected_theme = window.selected_theme;
      var publishedTheme = '';
      if (window.themegen_settings) publishedTheme = window.themegen_settings.theme_name;
      ///// add sub account location id to LS
      const allow_subaccount = document.querySelector('#dc-colorPicker-adv-allow-subaccount');
      if (typeof allow_subaccount !== 'undefined' && allow_subaccount) {
        allow_subaccount.addEventListener('input', function () {
          localStorage.setItem('allow_subaccount', event.target.value);
        });
      }
      ////// generate css btn
      if (typeof generate_script_js_btn !== 'undefined' && generate_script_js_btn && typeof loader_wrap !== 'undefined' && loader_wrap) {
        generate_script_js_btn.addEventListener('click', function () {
          loader_wrap.style.display = 'block';
          generate_script_js_btn.style.setProperty('display', 'none', 'important');
          generate_css_message.style.setProperty('display', 'none', 'important');
          generate_css_message.style.setProperty('transition', 'opacity 1s ease');
          generate_css_message.style.opacity = '0';
          setTimeout(function () {
            loader_wrap.style.opacity = '1';
          }, 50);
        });
      }
      ////// cancel process button
      const cancelbtn = document.querySelector('.cancelbtn');
      if (typeof cancelbtn !== 'undefined' && cancelbtn) {
        cancelbtn.addEventListener('click', function () {
          loader_wrap.style.display = 'none';
          loader_wrap.style.opacity = '0';
          generate_script_js_btn.style.setProperty('display', 'flex', 'important');
        });
      }
      ////// refresh sub location data button
      const refresh_btn = document.querySelector('#refresh-location-delete');
      const dashboard_customizer_panel = document.querySelector('#dashboard-customizer-panel');
      if (refresh_btn && dashboard_customizer_panel) {
        refresh_btn.addEventListener('click', function () {
          dashboard_customizer_panel.style.setProperty('display', 'none', 'important');
          location.reload();
        });
      }
      ////// tb step back button
      const backbtn = document.querySelector('.backbtn');
      if (typeof backbtn !== 'undefined' && backbtn) {
        backbtn.addEventListener('click', function () {
          loader_wrap.style.display = 'none';
          loader_wrap.style.opacity = '0';
          generate_css_message.style.setProperty('display', 'none', 'important');
          generate_css_message.style.opacity = '0';
          confirmation_message.style.setProperty('display', 'block', 'important');
          confirmation_message.style.opacity = '1';
          script_cutom_window_wrapper.style.setProperty('display', 'none', 'important');
          script_cutom_window_wrapper.style.opacity = '0';
          generate_css_message.style.maxHeight = '300px';
          generate_script_js_btn.style.setProperty('display', 'flex', 'important');
          if (typeof almost_done !== 'undefined' && almost_done) {
            almost_done.style.setProperty('display', 'block', 'important');
            almost_done.style.opacity = '1';
          }
        });
      }
      ////// back button error
      const backbtn_error = document.querySelector('.cancelbtn-error');
      if (typeof backbtn_error !== 'undefined' && backbtn_error) {
        backbtn_error.addEventListener('click', function () {
          loader_wrap.style.display = 'none';
          loader_wrap.style.opacity = '0';
          generate_css_message.style.setProperty('display', 'none', 'important');
          generate_css_message.style.opacity = '0';
          confirmation_message.style.setProperty('display', 'block', 'important');
          confirmation_message.style.opacity = '1';
          script_cutom_window_wrapper.style.setProperty('display', 'none', 'important');
          script_cutom_window_wrapper.style.opacity = '0';
          generate_css_message.style.maxHeight = '200px';
          generate_script_js_btn.style.setProperty('display', 'flex', 'important');
        });
      }
      ////// reload - refresh the browser
      const theme_update_donebtn = document.querySelector('.donebtn');
      if (typeof theme_update_donebtn !== 'undefined' && theme_update_donebtn) {
        theme_update_donebtn.addEventListener('click', function () {
          location.reload(true);
          if (typeof document.querySelector('#dashboard-customizer-panel') !== 'undefined' && document.querySelector('#dashboard-customizer-panel')) {
            document.querySelector('#dashboard-customizer-panel').style.setProperty('display', 'none', 'important');
          }
        });
      }
      ////// scroll to textarea script window
      const scroll_to_script_window = function (btn) {
        const generate_script_varcss = document.querySelector('#generate-script-varcss');
        if (
          typeof document.querySelector('.copytoclipboard-btn') !== 'undefined' &&
          document.querySelector('.copytoclipboard-btn') &&
          typeof generate_script_varcss !== 'undefined' &&
          generate_script_varcss
        ) {
          btn.addEventListener('click', function () {
            btn.scrollIntoView({ behavior: 'smooth' });
          });
        }
      };
      scroll_to_script_window(document.querySelector('#generate-script-js'));
      if (typeof generate_script_varcss !== 'undefined' && generate_script_varcss) {
        scroll_to_script_window(generate_script_varcss);
      }
      ////// copy to clipborad
      const copytoclipboard_btn = document.querySelector('.copytoclipboard-btn');
      if (typeof copytoclipboard_btn !== 'undefined' && copytoclipboard_btn) {
        copytoclipboard_btn.addEventListener('click', function () {
          let text = document.querySelector('.js-cs-custom-window-textarea');
          text.select();
          document.execCommand('copy');
          copytoclipboard_btn.textContent = '(âœ”) Copied!';
          copytoclipboard_btn.style.setProperty('background-color', '#1de24f', 'important');
          const copyclip = document.querySelector('#copy2clipboard');
  
          if (typeof copyclip !== 'undefined' && copyclip) {
            setTimeout(function () {
              copyclip.style.opacity = '0';
              copytoclipboard_btn.textContent = 'Copy';
              copytoclipboard_btn.style.setProperty('background-color', '#e2e2e2', 'important');
            }, 3500);
          }
        });
      }
    };
    //// setup theme save confirmation and swtich to next action
    const save_settings_confirmation = function (loc_id = '') {
      const confimbtn = document.querySelector('#confimbtn');
      const confirmation_message = document.querySelector('.confirmation-message');
      const loader = document.querySelector('.loader');
      const unsaved_changes = document.querySelector('.close-theme-customizer-wrapper');
      var selected_location_id = '';
      if (loc_id) {
        selected_location_id = loc_id;
      }
      if (localStorage.getItem('themegen_publish_selected_location')) selected_location_id = localStorage.getItem('themegen_publish_selected_location');
  
      if (
        typeof confimbtn !== 'undefined' &&
        confimbtn &&
        typeof confirmation_message !== 'undefined' &&
        confirmation_message &&
        typeof loader !== 'undefined' &&
        loader &&
        typeof unsaved_changes !== 'undefined' &&
        unsaved_changes
      ) {
        confimbtn.addEventListener('click', function () {
          loader.style.display = 'flex';
          loader.style.opacity = '1';
          confirmation_message.style.display = 'none';
          confirmation_message.style.opacity = '0';
          unsaved_changes.classList.remove('showunsaved-changes');
          theme_data_to_db();
        });
      }
    };
    //// setup Theme Builder draggable feature
    const theme_gen_dragable = function () {
      if (typeof document.querySelector('#dashboard-customizer-panel') !== 'undefined' && document.querySelector('#dashboard-customizer-panel')) {
        dragElement(document.querySelector('#dashboard-customizer-panel'));
        function dragElement(elmnt) {
          let pos1 = 0,
            pos2 = 0,
            pos3 = 0,
            pos4 = 0;
          if (document.querySelector(elmnt.id + 'header ')) {
            document.querySelector(elmnt.id + 'header ').onmousedown = dragMouseDown;
          } else {
            elmnt.onmousedown = dragMouseDown;
          }
          function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
          }
          function elementDrag(e) {
            const distance = Math.sqrt(Math.pow(e.clientX - pos3, 2) + Math.pow(e.clientY - pos4, 2));
            if (distance > 3) {
              e = e || window.event;
              e.preventDefault();
              pos1 = pos3 - e.clientX;
              pos2 = pos4 - e.clientY;
              pos3 = e.clientX;
              pos4 = e.clientY;
              elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
              elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
            }
          }
          function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
          }
          function remove_dragElement(elem) {
            if (document.body.contains(document.querySelector(elem))) {
              document.querySelector(elem).addEventListener(
                'mousedown',
                function (e) {
                  e.stopPropagation();
                },
                false
              );
            }
          }
          //////// remove drag from the elements cc and no cc all.
          var ls_elem_id_cc_general = get_ls_elem_id_no_cc_general();
          var ls_elem_id_cc_advanced = get_ls_elem_id_no_cc_advanced();
          var ls_elem_id_no_cc_general = get_ls_elem_id_no_cc_general();
          var ls_elem_id_no_cc_advanced = get_ls_elem_id_no_cc_advanced();
          var ls_draggable_elems = get_draggable_elems();
  
          let ls_elem_id = {
            ...ls_elem_id_no_cc_general,
            ...ls_elem_id_no_cc_advanced,
            ...ls_elem_id_cc_general,
            ...ls_elem_id_cc_advanced,
            ...ls_draggable_elems,
          };
          var ls_elem_id_keys = Object.keys(ls_elem_id);
          for (var i = 0; i < ls_elem_id_keys.length; i++) {
            var selected_key = ls_elem_id[ls_elem_id_keys[i]];
            if (selected_key && typeof selected_key !== 'undefined') {
              selected_key = '#' + selected_key;
              remove_dragElement(selected_key);
            }
          }
          if (
            typeof document.querySelector('#dc-themeName') !== 'undefined' &&
            document.querySelector('#dc-themeName') &&
            typeof document.querySelector('.hl-oe__item-info') !== 'undefined' &&
            document.querySelector('.hl-oe__item-info')
          ) {
            remove_dragElement('#dc-themeName');
            remove_dragElement('.hl-oe__item-info');
          }
        }
      }
    };
    //// theme gen values setup
    const get_tg_setting_value = function (ls_obj, setting_var) {
      const skip_vars = [];
      var tg_setting_value = '';
      var themegen_settings = window.themegen_settings;
      if (typeof themegen_settings === 'object' && themegen_settings.hasOwnProperty(setting_var)) {
        tg_setting_value = themegen_settings[setting_var];
      }
      if (!tg_setting_value) {
        if (typeof ls_obj === 'object' && ls_obj.hasOwnProperty(setting_var)) {
          tg_setting_value = ls_obj[setting_var];
        }
      }
      if (!skip_vars.includes(setting_var) || !skip_vars.length) {
        if (setting_var.endsWith('_label') && tg_setting_value) {
          tg_setting_value = '"' + tg_setting_value + '"';
        } else if (setting_var.endsWith('_icon') && tg_setting_value) {
          tg_setting_value = "'\\" + tg_setting_value + "'";
        } else if (setting_var.endsWith('_bg_url') && tg_setting_value) {
          tg_setting_value = "url('\\" + tg_setting_value + "')";
        }
      }
      return tg_setting_value;
    };
    ///////// setting up the root variables values for selected root vars
    const update_selected_root_var = (ls_key, new_value) => {
      if (ls_key) {
        let r = document.querySelector(':root');
        var rootvar_unit_values = get_rootvar_unit_values();
        var ls_obj_general = get_ls_obj_general();
        var ls_obj_advanced = get_ls_obj_advanced();
        let ls_obj = {
          ...ls_obj_general,
          ...ls_obj_advanced,
        };
  
        var ls_rvars_general = get_ls_rvars_general();
        var ls_rvars_advanced = get_ls_rvars_advanced();
        let ls_rvars = {
          ...ls_rvars_general,
          ...ls_rvars_advanced,
        };
        var unit_value = '';
        if (typeof rootvar_unit_values === 'object' && rootvar_unit_values.hasOwnProperty(ls_rvars[ls_key]) && rootvar_unit_values[ls_rvars[ls_key]]) unit_value = rootvar_unit_values[ls_rvars[ls_key]];
        var tg_setting_value = new_value;
        if (ls_key.endsWith('_label') && tg_setting_value) {
          tg_setting_value = '"' + tg_setting_value + '"';
        } else if (ls_key.endsWith('_icon') && tg_setting_value) {
          tg_setting_value = "'\\" + tg_setting_value + "'";
        }
        if (tg_setting_value) {
          r.style.setProperty(ls_rvars[ls_key], tg_setting_value + unit_value);
        } else {
        }
      }
    };
    ////////// reset sections to default (window or obj)
    const reset_to_default = () => {
      let selectedtheme = 'theme_custom';
      if (window.selected_theme) selectedtheme = window.selected_theme;
      let selected_theme_name = dashboard_themes.theme_data[selectedtheme].theme_name;
      let published_theme_name = '';
      if (typeof window.themegen_settings === 'object') published_theme_name = window.themegen_settings.theme_name;
  
      var ls_window_general = get_ls_window_general();
      var ls_window_advanced = get_ls_window_advanced();
      let ls_window = {
        ...ls_window_general,
        ...ls_window_advanced,
      };
  
      var ls_obj_general = get_ls_obj_general();
      var ls_obj_advanced = get_ls_obj_advanced();
      let ls_obj = {
        ...ls_obj_general,
        ...ls_obj_advanced,
      };
  
      var ls_elem_id_no_cc_general = get_ls_elem_id_no_cc_general();
      var ls_elem_id_no_cc_advanced = get_ls_elem_id_no_cc_advanced();
      let ls_elem_id = {
        ...ls_elem_id_no_cc_general,
        ...ls_elem_id_no_cc_advanced,
      };
  
      var ls_elem_id_cc_general = get_ls_elem_id_cc_general();
      var ls_elem_id_cc_advanced = get_ls_elem_id_cc_advanced();
      let ls_elem_id_cc = {
        ...ls_elem_id_cc_general,
        ...ls_elem_id_cc_advanced,
      };
      var reset_btn_obj = get_reset_btn_obj_advanced();
      var reset_btn_obj_keys = Object.keys(reset_btn_obj);
  
      for (var i = 0; i < reset_btn_obj_keys.length; i++) {
        var resetbtnid = reset_btn_obj_keys[i];
        if (resetbtnid) {
          if (document.querySelector('#' + resetbtnid)) {
            document.querySelector('#' + resetbtnid).addEventListener('click', function (event) {
              event.preventDefault();
              var clicked_button_id = event.target.parentElement.id;
              var selected_key_array = reset_btn_obj[clicked_button_id];
              if (Array.isArray(selected_key_array) && selected_key_array.length) {
                for (var j = 0; j < selected_key_array.length; j++) {
                  var selected_ls_key = selected_key_array[j];
                  if (selected_ls_key) {
                    var elemid = '';
                    if (typeof ls_elem_id === 'object' && ls_elem_id.hasOwnProperty(selected_ls_key)) elemid = ls_elem_id[selected_ls_key];
                    var elemid_cc = '';
                    if (typeof ls_elem_id_cc === 'object' && ls_elem_id_cc.hasOwnProperty(selected_ls_key)) elemid_cc = ls_elem_id_cc[selected_ls_key];
  
                    var elemid_obj = {};
                    if (elemid || elemid_cc) {
                      if (selected_theme_name && published_theme_name && selected_theme_name === published_theme_name) {
                        var window_item = '';
                        if (typeof ls_window === 'object' && ls_window.hasOwnProperty(selected_ls_key)) window_item = ls_window[selected_ls_key];
                        if (typeof window_item === 'undefined') window_item = '';
                        if (window_item) {
                          if (elemid) {
                            elemid_obj = document.querySelector('#' + elemid);
                            if (typeof elemid_obj !== 'undefined' && document.body.contains(elemid_obj)) {
                              elemid_obj.value = window_item;
                              localStorage.setItem(selected_ls_key, elemid_obj.value);
                              update_selected_root_var(selected_ls_key, elemid_obj.value);
                            }
                          }
  
                          if (elemid_cc) {
                            elemid_obj = document.querySelector('#' + elemid_cc);
                            if (typeof elemid_obj !== 'undefined' && document.body.contains(elemid_obj)) {
                              elemid_obj.textContent = window_item;
                            }
                          }
                        } else {
                          var obj_item = '';
                          if (typeof ls_obj === 'object' && ls_obj.hasOwnProperty(selected_ls_key) && ls_obj[selected_ls_key]) obj_item = ls_obj[selected_ls_key];
                          if (typeof obj_item === 'undefined') obj_item = '';
                          if (obj_item) {
                            document.querySelector('#' + clicked_button_id).style.opacity = '0.5';
                            if (elemid) {
                              elemid_obj = document.querySelector('#' + elemid);
                              if (typeof elemid_obj !== 'undefined' && document.body.contains(elemid_obj)) {
                                elemid_obj.value = obj_item;
                                localStorage.setItem(selected_ls_key, elemid_obj.value);
                                update_selected_root_var(selected_ls_key, elemid_obj.value);
                              }
                            }
  
                            if (elemid_cc) {
                              elemid_obj = document.querySelector('#' + elemid_cc);
                              if (typeof elemid_obj !== 'undefined' && document.body.contains(elemid_obj)) {
                                elemid_obj.textContent = obj_item;
                              }
                            }
                          }
                        }
                      } else {
                        var obj_item = '';
                        if (typeof ls_obj === 'object' && ls_obj.hasOwnProperty(selected_ls_key) && ls_obj[selected_ls_key]) obj_item = ls_obj[selected_ls_key];
                        document.querySelector('#' + clicked_button_id).style.opacity = '0.5';
                        if (elemid) {
                          elemid_obj = document.querySelector('#' + elemid);
                          if (typeof elemid_obj !== 'undefined' && document.body.contains(elemid_obj)) {
                            elemid_obj.value = obj_item;
                            localStorage.setItem(selected_ls_key, elemid_obj.value);
                            update_selected_root_var(selected_ls_key, elemid_obj.value);
                          }
                        }
  
                        if (elemid_cc) {
                          elemid_obj = document.querySelector('#' + elemid_cc);
                          if (typeof elemid_obj !== 'undefined' && document.body.contains(elemid_obj)) {
                            elemid_obj.textContent = obj_item;
                          }
                        }
                      }
                    }
                  }
                }
              }
            });
          }
        }
      }
    };
    ////// process update theme styles
    const handle_uts = (ls_key, ls_obj, ls_window) => {
      var obj_item = '';
      if (typeof ls_obj === 'object' && ls_obj.hasOwnProperty(ls_key)) obj_item = ls_obj[ls_key];
      var window_item = '';
      if (typeof ls_window === 'object' && ls_window.hasOwnProperty(ls_key)) window_item = ls_window[ls_key];
      let selected_theme_name = '';
      if (window.selected_theme) {
        var selectedtheme = window.selected_theme;
        selected_theme_name = dashboard_themes.theme_data[selectedtheme].theme_name;
      }
      let published_theme_name = '';
      if (typeof window.themegen_settings === 'object' && window.themegen_settings.theme_name) {
        var window_themegen_settings = window.themegen_settings;
        if (typeof window_themegen_settings === 'object' && window_themegen_settings.hasOwnProperty('theme_name')) {
          published_theme_name = window_themegen_settings.theme_name;
        }
      }
      if (selected_theme_name && published_theme_name && selected_theme_name === published_theme_name && ls_key && window_item) {
        localStorage.setItem(ls_key, window_item);
      } else if (ls_key && obj_item) {
        localStorage.setItem(ls_key, obj_item);
      }
    };
    /// setup update theme styles on change obj
    const update_theme_styles = function (selectedtheme) {
      window.selected_theme = selectedtheme;
      var ls_window_general = get_ls_window_general();
      var ls_window_advanced = get_ls_window_advanced();
      let ls_window = {
        ...ls_window_general,
        ...ls_window_advanced,
      };
  
      var ls_obj_general = get_ls_obj_general();
      var ls_obj_advanced = get_ls_obj_advanced();
      let ls_obj = {
        ...ls_obj_general,
        ...ls_obj_advanced,
      };
  
      var ls_obj_keys = Object.keys(ls_obj);
      for (var i = 0; i < ls_obj_keys.length; i++) {
        handle_uts(ls_obj_keys[i], ls_obj, ls_window);
      }
  
      const save_btn_theme = document.querySelector('#generate-script-js');
      const confirmation_message = document.querySelector('.confirmation-message p');
      const success_message = document.querySelector('.success-message h3');
      const success_message_instructions = document.querySelector('.success-message p');
      const css_remove_script = document.querySelector('.done-refresh-wrap-1 p');
      if (save_btn_theme) {
        if (
          window.selected_theme !== 'theme_custom' &&
          typeof save_btn_theme !== 'undefined' &&
          save_btn_theme &&
          typeof confirmation_message !== 'undefined' &&
          confirmation_message &&
          typeof success_message !== 'undefined' &&
          success_message &&
          typeof success_message_instructions !== 'undefined' &&
          success_message_instructions &&
          typeof css_remove_script !== 'undefined' &&
          typeof css_remove_script !== 'undefined' &&
          css_remove_script
        ) {
          save_btn_theme.innerHTML = `<i class="fa-solid fa-floppy-disk-circle-arrow-right"></i>SAVE AND APPLY THEME <span class="save-option-subaccount">Option to Apply Globally or to Selected Sub-account</span>`;
          save_btn_theme.classList.remove('dc-savebtn-disable');
          confirmation_message.textContent = 'You want to publish theme';
          success_message.textContent = 'Theme Successfully Applied!';
          success_message_instructions.textContent = 'The theme settings have been successfully saved and will be implemented in the Communities, Courses and Affiliates applications.';
          css_remove_script.innerHTML = `Copy the above script and paste it to the custom CSS Box of sub account client portal under branding section in advanced settings. <br/> <span><strong style="color: red !important;">IMPORTANT: </strong>Press the below green "DONE" button which will render all the theme settings to agency and its sub-accounts.</span>`;
        } else {
          save_btn_theme.innerHTML = `<i class="fa-solid fa-floppy-disk-circle-arrow-right"></i>SAVE AND APPLY NO THEME <span class="save-option-subaccount">Option to Apply Globally or to Selected Sub-account</span>`;
          save_btn_theme.classList.add('dc-savebtn-disable');
          confirmation_message.textContent = 'You want to apply No Theme.';
          success_message.textContent = 'Theme Successfully Applied!';
          success_message_instructions.textContent =
            "The theme custom styles have been fully removed from the Client Portal Community App. The default HL Client Portal will be displayed upon clicking the 'Done' button. If you do not see the updates, please clear your cache.";
          css_remove_script.textContent =
            'Remove all css script related to Theme Builder from the custom CSS Box of company settings. Once you complete this process, press the below green "DONE" button which will remove all the theme settings for agency and its sub-accounts except separately customized sub-accounts.';
        }
      }
      const parentElement = document.querySelector('.showmore-step2.showmore-step2--dina');
      if (typeof parentElement !== 'undefined' && parentElement) {
        var disabledDivs = parentElement.querySelectorAll('.tsg-disabled');
        if (window.selected_theme !== 'theme_custom' && typeof save_btn_theme !== 'undefined' && save_btn_theme) {
          disabledDivs.forEach(function (div) {
            div.style.opacity = '1';
            div.style.cursor = 'auto';
          });
        } else {
          disabledDivs.forEach(function (div) {
            div.style.opacity = '0.25';
            div.style.cursor = 'not-allowed';
          });
        }
      }
      remove_dynamic_stylesheets();
      load_files();
      update_input_fields_from_ls();
      assign_colors();
      input_color_change_listners();
      generate_button_listners();
      reset_to_default();
      setup_font_family();
    };
  
    //// update input fileds from LS
    const handle_get_iffls = (ls_key, picker_element_id, code_element_id = '') => {
      if (ls_key && (picker_element_id || code_element_id)) {
        let color_value = '';
        if (localStorage.getItem(ls_key)) {
          color_value = localStorage.getItem(ls_key);
        }
        if (typeof color_value !== 'undefined' && color_value) {
          const colorPicker_primary = document.querySelector('#' + picker_element_id);
          if (typeof colorPicker_primary !== 'undefined' && document.body.contains(colorPicker_primary)) {
            colorPicker_primary.value = color_value;
          }
          if (code_element_id) {
            const colorCode_primary = document.querySelector('#' + code_element_id);
            if (typeof colorCode_primary !== 'undefined' && document.body.contains(colorCode_primary)) colorCode_primary.textContent = color_value;
          }
        }
      }
    };
    //// update input fileds from LS
    const update_input_fields_from_ls = function () {
      var ls_obj_general = get_ls_obj_general();
      var ls_obj_advanced = get_ls_obj_advanced();
      let ls_obj = {
        ...ls_obj_general,
        ...ls_obj_advanced,
      };
  
      var ls_elem_id_no_cc_general = get_ls_elem_id_no_cc_general();
      var ls_elem_id_no_cc_advanced = get_ls_elem_id_no_cc_advanced();
      let ls_elem_id_no_cc = {
        ...ls_elem_id_no_cc_general,
        ...ls_elem_id_no_cc_advanced,
      };
  
      var ls_elem_id_cc_general = get_ls_elem_id_cc_general();
      var ls_elem_id_cc_advanced = get_ls_elem_id_cc_advanced();
      let ls_elem_id_cc = {
        ...ls_elem_id_cc_general,
        ...ls_elem_id_cc_advanced,
      };
  
      var ls_obj_keys = Object.keys(ls_obj);
      for (var i = 0; i < ls_obj_keys.length; i++) {
        var ls_key = ls_obj_keys[i];
        var picker_element_id = '';
        if (typeof ls_elem_id_no_cc === 'object' && ls_elem_id_no_cc.hasOwnProperty(ls_key)) picker_element_id = ls_elem_id_no_cc[ls_key];
        var code_element_id = '';
        if (typeof ls_elem_id_cc === 'object' && ls_elem_id_cc.hasOwnProperty(ls_key)) code_element_id = ls_elem_id_cc[ls_key];
        handle_get_iffls(ls_key, picker_element_id, code_element_id);
      }
    };
    ///// Update Users Colors - on change/rendering.
    const update_user_colors = () => {
      if (!document.body.contains(document.querySelector('#app'))) {
      } else {
        let r = document.querySelector(':root');
        var ls_obj_general = get_ls_obj_general();
        var ls_obj_advanced = get_ls_obj_advanced();
        let ls_obj = {
          ...ls_obj_general,
          ...ls_obj_advanced,
        };
        var ls_rvars_general = get_ls_rvars_general();
        var ls_rvars_advanced = get_ls_rvars_advanced();
        let ls_rvars = {
          ...ls_rvars_general,
          ...ls_rvars_advanced,
        };
        var rootvar_unit_values = get_rootvar_unit_values();
        var ls_rvars_keys = Object.keys(ls_rvars);
  
        for (var i = 0; i < ls_rvars_keys.length; i++) {
          var unit_value = '';
          if (typeof rootvar_unit_values === 'object' && rootvar_unit_values.hasOwnProperty(ls_rvars[ls_rvars_keys[i]]) && rootvar_unit_values[ls_rvars[ls_rvars_keys[i]]])
            unit_value = rootvar_unit_values[ls_rvars[ls_rvars_keys[i]]];
          var tg_setting_value = '';
          if (ls_rvars_keys[i]) tg_setting_value = get_tg_setting_value(ls_obj, ls_rvars_keys[i]);
          if (tg_setting_value) {
            r.style.setProperty(ls_rvars[ls_rvars_keys[i]], tg_setting_value + unit_value);
            // console.log(`Applied setting: ${ls_rvars[ls_rvars_keys[i]]} = ${tg_setting_value + unit_value}`);
          } else {
            // console.log(`No setting value found for key: ${ls_rvars_keys[i]}`);
          }
        }
      }
    };
    //// values for few root vars that uses the tint from the color value.
    const vcss_opacity_mini = '1A';
    const get_tg_setting_value_tint = function (setting_var) {
      var tg_setting_value = '';
      var themegen_settings = window.themegen_settings;
      if (typeof themegen_settings === 'object' && themegen_settings.hasOwnProperty(setting_var)) {
        tg_setting_value = themegen_settings[setting_var];
      }
      return tg_setting_value;
    };
    //// values for few root vars that uses the tint from the color value.
    const update_user_colors_tint = () => {
      if (!document.body.contains(document.querySelector('#app'))) {
      } else {
        let r = document.querySelector(':root');
        r.style.setProperty('--hlpt-primary-theme-color-tint', get_tg_setting_value_tint('theme_name_primary_col') + vcss_opacity_mini);
        r.style.setProperty('--hlpt-primary-theme-bg-color-tint', get_tg_setting_value_tint('theme_name_primary_bgcol') + vcss_opacity_mini);
        r.style.setProperty('--hlpt-secondary-theme-bg-color-tint', get_tg_setting_value_tint('theme_name_gradient_bgcol') + vcss_opacity_mini);
      }
    };
    const get_location_db = () => {
      let location_settings_exists = '';
      let themegen_data = window.theme_data_cptb;
      if (typeof themegen_data === 'object' && themegen_data.hasOwnProperty('clientportalsetup')) {
        // console.log('db location found');
        location_settings_exists = true;
      } else {
        if (Object.keys(themegen_data.clientportalsetup).length === 0) {
          location_settings_exists = false;
          // console.log('no  db location found');
        }
      }
      return location_settings_exists;
    };
  
    //// Load base script files of the tb.
    const load_base_files = function () {
      if (selected_theme !== 'theme_darkcherry' || !get_location_db) {
        remove_dynamic_stylesheets();
      }
    };
    //// Load dynamic files script on change  of the tb rendering.
    const load_dynamic_files = function () {
      let selected_theme = '';
      if (window.selected_theme) selected_theme = window.selected_theme;
      if (get_location_db || selected_theme === 'theme_darkcherry')
        // add_styles('clientportal-theme-main', `${script_url}${dashboard_themes.script_filename.dashboard_theme_main_css}?k=${get_data_attribute_value('data-ark')}`);
        add_styles('clientportal-theme-main', `${script_url}${dashboard_themes.script_filename.dashboard_theme_main_css_path}`);
      if (selected_theme !== 'theme_darkcherry') remove_dynamic_stylesheets();
    };
    //// Load embedded script file while rendering for the user and admin
    const load_embedded_theme_styles = function () {
      // if (get_location_db) add_styles('clientportal-theme-main', `${script_url}${dashboard_themes.script_filename.dashboard_theme_main_css}?k=${get_data_attribute_value('data-ark')}`);
      if (get_location_db) add_styles('clientportal-theme-main', `${script_url}${dashboard_themes.script_filename.dashboard_theme_main_css_path}`);
      if (selected_theme !== 'theme_darkcherry') remove_dynamic_stylesheets();
    };
    const setup_tg_variables = function (themegen_settings) {
      var themegen_settings = window.themegen_settings;
      if (typeof themegen_settings === 'object' && themegen_settings.hasOwnProperty('selected_theme')) {
        window.selected_theme = themegen_settings.selected_theme;
      }
    };
    //// Load files
    const load_files = function () {
      if (window.selected_theme) {
        load_base_files();
        load_dynamic_files();
        load_embedded_theme_styles();
      }
    };
    //// assign colors.
    function getKeyByValue(object, value) {
      return Object.keys(object).find((key) => object[key] === value);
    }
    const assign_colors = () => {
      const admin_agency_check = document.querySelector('#app');
      if (!document.body.contains(admin_agency_check)) {
        setTimeout(assign_colors, 250);
      } else {
        function setColor() {
          var ls_rvars_general = get_ls_rvars_general();
          var ls_rvars_advanced = get_ls_rvars_advanced();
          let ls_rvars = {
            ...ls_rvars_general,
            ...ls_rvars_advanced,
          };
  
          var ls_obj_general = get_ls_obj_general();
          var ls_obj_advanced = get_ls_obj_advanced();
          let ls_obj = {
            ...ls_obj_general,
            ...ls_obj_advanced,
          };
  
          let r = document.querySelector(':root');
          var rvar_elements = get_rvar_elements();
          var rootvar_unit_values = get_rootvar_unit_values();
          for (const [rvar, element_id_list] of Object.entries(rvar_elements)) {
            var element_id_array = element_id_list.split(',');
            if (Array.isArray(element_id_array)) {
              var element_id_cc = '';
              var element_id = element_id_array[0].trim();
              if (element_id_array.length > 1) element_id_cc = element_id_array[1].trim();
              var input_obj = '';
              input_obj = document.querySelector('#' + element_id);
              var input_value = '';
              var input_value_org = '';
              if (typeof input_obj !== 'undefined' && document.body.contains(input_obj) && input_obj.value) {
                var unit_value = '';
                if (typeof rootvar_unit_values === 'object' && rootvar_unit_values.hasOwnProperty(rvar) && rootvar_unit_values[rvar]) unit_value = rootvar_unit_values[rvar];
                input_value = input_obj.value;
  
                input_value_org = input_obj.value;
  
                if (rvar.startsWith('--dynamic-font-family') && input_value) {
                  const parts = input_value.split(':');
                  input_value = parts[0];
                }
  
                if (rvar.endsWith('-label') && input_value) {
                  input_value = '"' + input_value + '"';
                } else if (rvar.endsWith('-icon') && input_value) {
                  input_value = "'\\" + input_value + "'";
                }
                if (!input_value) {
                  var ls_key = getKeyByValue(ls_rvars, rvar);
                  if (typeof ls_key !== 'undefined' && ls_key) {
                    if (typeof ls_obj === 'object' && ls_obj.hasOwnProperty(ls_key)) {
                      input_value = ls_obj[ls_key];
                    }
                  }
                }
                if (input_value) {
                  input_obj.style.backgroundColor = input_value;
                  r.style.setProperty(rvar, input_value + unit_value);
                }
                input_obj.addEventListener('input', setColor);
                if (element_id_cc && input_value_org) {
                  var input_obj_cc = '';
                  input_obj_cc = document.querySelector('#' + element_id_cc);
                  if (typeof input_obj_cc !== 'undefined' && document.body.contains(input_obj_cc)) {
                    input_obj_cc.innerHTML = input_value_org;
                  }
                }
              }
            }
          }
        }
        setColor();
        // console.log(`...all set...`);
      }
    };
    const process_theme_settings_data = function (loc_id = '') {
      var themegen_data = window.theme_data_cptb;
      var current_location_id = loc_id;
      if (typeof themegen_data === 'object' && themegen_data.hasOwnProperty('clientportalsetup')) {
        var themegen_data_setup = themegen_data.clientportalsetup;
        window.editor_enabled = themegen_data_setup.editor_enabled;
        if (typeof themegen_data_setup === 'object' && themegen_data_setup.hasOwnProperty('settings')) {
          var themegen_settings = themegen_data_setup.settings;
          if (typeof themegen_settings === 'string') {
            themegen_settings = JSON.parse(themegen_settings);
          }
          if (typeof themegen_settings === 'object') {
            window.themegen_settings = themegen_settings;
            setup_tg_variables(themegen_settings);
            update_user_colors();
            update_user_colors_tint();
          }
        }
      }
    };
    function setup_font_family() {
      function loadFont(fontName, variant, linkId) {
        if (fontName === 'Inter') {
          const existingLink = document.querySelector('link[href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"]');
          if (existingLink) {
            existingLink.remove();
          }
        }
        if (fontName === 'Poppins') {
          const existingLink = document.querySelector('link[href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"]');
          if (existingLink) {
            existingLink.remove();
          }
        }
        let link = document.getElementById(linkId);
        if (!link) {
          link = document.createElement('link');
          link.id = linkId;
          link.rel = 'stylesheet';
          document.head.appendChild(link);
        }
  
        let fontFamily = fontName.replace(/ /g, '+').replace(/,.*/, '');
        let fontVariant = variant ? `:wght@${variant}` : '';
        link.href = `https://fonts.googleapis.com/css2?family=${fontFamily}${fontVariant}&display=swap`;
      }
  
      const fontSelectElements = [
        { id: 'dc-colorPicker-font-family', property: '--dynamic-font-family', linkId: 'dynamic-font-link', selectedFontFamily: 'theme_font_family' },
        { id: 'dc-colorPicker-font-family-h1', property: '--dynamic-font-family-h1', linkId: 'dynamic-font-link-h1', selectedFontFamily: 'theme_font_family_h1' },
        { id: 'dc-colorPicker-font-family-h2', property: '--dynamic-font-family-h2', linkId: 'dynamic-font-link-h2', selectedFontFamily: 'theme_font_family_h2' },
        { id: 'dc-colorPicker-font-family-h3', property: '--dynamic-font-family-h3', linkId: 'dynamic-font-link-h3', selectedFontFamily: 'theme_font_family_h3' },
        { id: 'dc-colorPicker-font-family-h4', property: '--dynamic-font-family-h4', linkId: 'dynamic-font-link-h4', selectedFontFamily: 'theme_font_family_h4' },
        { id: 'dc-colorPicker-font-family-sidemenu', property: '--dynamic-font-family-sidemenu', linkId: 'dynamic-font-link-sidemenu', selectedFontFamily: 'theme_font_family_sidemenu' },
        { id: 'dc-colorPicker-font-family-topmenu', property: '--dynamic-font-family-topmenu', linkId: 'dynamic-font-link-topmenu', selectedFontFamily: 'theme_font_family_topmenu' },
      ];
      fontSelectElements.forEach(({ id, property, linkId, selectedFontFamily }) => {
        const fontFamilySelect = document.getElementById(id);
        if (!fontFamilySelect) {
          console.warn(`Element with id ${id} not found`);
          return;
        }
        function updateDefaultOptionText() {
          const selectedFont = fontFamilySelect.value;
          const defaultOption = fontFamilySelect.querySelector('[value=""]');
          if (defaultOption) {
            defaultOption.textContent = selectedFont;
          }
        }
        function setFontFromLocalStorage() {
          const storedFontName = localStorage.getItem(selectedFontFamily);
          if (storedFontName) {
            const [fontName, variant] = storedFontName.split(':');
            loadFont(fontName, variant, linkId, selectedFontFamily);
            document.documentElement.style.setProperty(property, fontName);
            fontFamilySelect.value = storedFontName;
            updateDefaultOptionText();
          }
        }
        setFontFromLocalStorage();
        fontFamilySelect.addEventListener('change', function () {
          const [fontName, variant] = this.value.split(':');
          loadFont(fontName, variant, linkId);
          document.documentElement.style.setProperty(property, fontName);
          localStorage.setItem(selectedFontFamily, this.value);
          updateDefaultOptionText();
        });
      });
      fontSelectElements.forEach(({ selectedFontFamily, linkId }) => {
        const storedFontName = localStorage.getItem(selectedFontFamily);
        if (storedFontName) {
          const [fontName, variant] = storedFontName.split(':');
          loadFont(fontName, variant, linkId);
        }
      });
    }
    function switch_darkmode_setup() {
      let isDarkMode_cptb = false;
      const darkmode_btn = document.querySelector('#pg-afcp-navbar__navigation-dark-mode-button');
      const sun_btn = document.querySelector('.sun-icon');
      const moon_btn = document.querySelector('.moon-icon');
      if (darkmode_btn) {
        darkmode_btn.addEventListener('click', function () {
          if (sun_btn) {
            isDarkMode_cptb = !isDarkMode_cptb;
            if (isDarkMode_cptb) {
              remove_dynamic_stylesheets();
            }
          } else if (moon_btn) {
            load_dynamic_files();
          }
        });
      }
      if (darkmode_btn) {
        if (moon_btn) {
          remove_dynamic_stylesheets();
        }
        if (sun_btn) {
          load_dynamic_files();
        }
      }
    }
  
    function removeInlineStyles(selectors) {
      const elements = document.querySelectorAll(selectors);
      elements.forEach((element) => {
        element.removeAttribute('style');
      });
    }
  
    const mo_acs = function () {
      const targetNode = document.querySelector('#app');
      const config = { attributes: true, childList: true, subtree: true };
      const observer = new MutationObserver(function (mutations) {
        tb_panel_interactive_styles();
        switch_darkmode_setup();
        removeInlineStyles(['#sign-up--button', '#login--button']);
      });
      observer.observe(targetNode, config);
    };
    function loadAjaxScript(id, ajaxUrl) {
      if (!document.getElementById(id)) {
        var script = document.createElement('script');
        script.id = id;
        script.src = ajaxUrl;
        document.head.appendChild(script);
      }
    }
    const apply_id_custom_js = function () {
      var customScript = document.querySelector('script[vmid="clientportal-site-custom-js"]');
      if (customScript) {
        if (!customScript.id) {
          customScript.id = 'hlpt-dashboard-customizer-parent';
        }
      }
    };
  
    const refresh_settings = function () {
      load_content_loader_global();
      process_theme_settings_data(window.current_location_id);
  
      if (is_user_allowed()) {
        // create_theme_gen_userinfo_btn();
        hlpt_display_dashboard_customizer_panel();
        setup_initial_theme_values();
        theme_gen_dragable();
      }
      load_files();
      setup_initial_theme_values();
      assign_colors();
      update_user_colors();
      update_user_colors_tint();
      // create_cptb_userinfo_btn();
    };
    function handlePgChange() {
      apply_id_custom_js();
      setup_font_family();
      create_cptb_userinfo_btn();
      // console.log(`change-1`);
    }
    /// hlpt load embed
    hlpt_loadEmbed('https://auth.locationapi.co/resources1?k=' + get_data_attribute_value('data-ark') + '&s=dashboard_styles' + '&v=' + Date.now(), function (j) {
      let r = JSON.parse(j);
      if (r.e || r.p == 'lifetime') {
        add_styles('dashboardcustomizer', script_url + dashboard_themes.script_filename.theme_builder_panel);
        hlpt_loadEmbed(themecptb + '?k=' + get_data_attribute_value('data-ark') + '&l=' + window.current_location_id, function (k) {
          let themegen_data = JSON.parse(k);
          window.theme_data_cptb = themegen_data;
          refresh_settings();
          $(function () {
            handlePgChange();
            setInterval(function () {
              if (window.location.href !== handlePgChange.lastUrl) {
                handlePgChange.lastUrl = window.location.href;
                handlePgChange();
              }
            }, 100);
          });
        });
      }
    });
    function addLoadingStyles() {
      const preloader = document.createElement('div');
      preloader.id = 'preloader';
      document.body.parentNode.insertBefore(preloader, document.body);
    }
    addLoadingStyles();
    loadAjaxScript('hlpt-jquery-script', 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js');
    mo_isAdmin();
    window.addEventListener('beforeunload', function (event) {
      window.location.reload(true);
      // console.log(`Client Portal TB init... v1.0`);
    });
  })();