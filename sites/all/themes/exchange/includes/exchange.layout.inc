<?php
  $form['layout'] = array(
    '#type' => 'fieldset',
    '#title' => t('Layout'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
    '#group' => 'settings',
    '#tree' => TRUE,
  );
	
	$default = isset($settings['layout']['sidebar']) ? $settings['layout']['sidebar'] : 'right';
	$options = array(
		'left' => theme('image', array('path' => drupal_get_path('theme', 'exchange') . '/images/layout-left.png')),
		'right' => theme('image', array('path' => drupal_get_path('theme', 'exchange') . '/images/layout-right.png')),
	);
	$form['layout']['sidebar'] = array(
		'#type' => 'radios',
		'#title' => t('Sidebar'),
		'#default_value' => $default,
		'#options' => $options,
	);