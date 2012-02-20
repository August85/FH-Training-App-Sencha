app.views.Settings = Ext.extend(Ext.Panel, {
  title: 'Settings',
  iconCls: 'settings',
  scroll: 'vertical',

  listeners: {
  	show: function() {
  		app.views.tabPanel.tabBar.show();
  		app.views.tabPanel.componentLayout.childrenChanged = true;
  		app.views.tabPanel.doComponentLayout();

      // Load settings from local storage
      Ext.dispatch({
        controller: app.controllers.settings,
        action: 'loadSettings'
      });
  	}
  },

  dockedItems: [
  	{
  		dock: 'top',
  		xtype: 'toolbar',
  		items: [
  			{
  				text: 'Back',
  				handler: function() {
  					app.views.tabPanel.setActiveItem(app.views.home);
  				}
  			}
  		]
  	}
  ],
  
  items: [
    {
      xtype: 'form',
      items: [
        {
          xtype: 'fieldset',
          title: 'Personal Info',
          instructions: 'Please enter the information above.',
          defaults: {
            labelAlign: 'left',
            labelWidth: '30%'
          },
          items: [
            {
              xtype: 'selectfield',
              id: 'title',
              name: 'title',
              label: 'Title',
              options: [{
                text: 'Mr',
                value: 'mr'
              }, {
                text: 'Ms',
                value: 'ms'
              }, {
                text: '...',
                value: '...'
              }]
            },
            {
              xtype: 'textfield',
              id: 'name',
              name:  'name',
              label: 'Name'
            }
          ]
        },
        {
          xtype: 'fieldset',
          title: 'App Config',
          defaults: {
            labelAlign: 'left',
            labelWidth: '30%'
          },
          items: [
            {
              xtype: 'sliderfield',
              id: 'slider',
              name: 'value',
              label: 'Slider'
            },
            {
              xtype: 'togglefield',
              id: 'toggle',
              name: 'enable',
              label: 'Toggle Switch'
            }
          ]
        },
        {
          layout: {
            type: 'hbox',
            pack: 'center',  
          },
          items: [
            {
              xtype: 'button',
              text: 'Save Settings',
              width: '80%',
              height: '100%',
              handler: function() {
                Ext.dispatch({
                  controller: app.controllers.settings,
                  action: 'saveSettings'
                });
              }
            }
          ]          
        }
      ]
    },
  ]
});