<?php



define('WP_CACHE', true);

/** WP 2FA plugin data encryption key. For more information please visit melapress.com */
define( 'WP2FA_ENCRYPT_KEY', '1Bq2aB2WznDv/2tU0/gFhQ==' );

/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */
// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', "websit19_asistentugas");
/** MySQL database username */
define('DB_USER', "websit19_ASISTENtugas");
/** MySQL database password */
define('DB_PASSWORD', "Ardata2024!");
/** MySQL hostname */
define('DB_HOST', "localhost");
/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');
/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');
/**#@+
 * Authentication Unique Keys and Salts.
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 */
/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';
/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('FS_METHOD','direct');
define('WPLANG', '');
define('FS_CHMOD_DIR', (0775 & ~ umask()));
define('FS_CHMOD_FILE', (0664 & ~ umask()));
/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define( 'WP_DEBUG', false );
define( 'DUPLICATOR_AUTH_KEY', '!BWe:OHqa=_g?!;vyx^/x>Ukm=QR/?nh|YMtpX1W{_~o?xs1Id<UO1zWpg/)V#L+' );
define( 'AUTH_KEY', 'HR1z9iWR1cq8SuI4dhoKqC9c1rDPv2T2CCTcKiRAcTw8QezLCqEIWbHB5GBP71vx' );
define( 'SECURE_AUTH_KEY', 'DjwR3yniN9V43tUxjIYLquGCyqUFFWImstaDpBuvIYb2IM0Esn65jpLsaCy3mawd' );
define( 'LOGGED_IN_KEY', 'JbCUvInnrcj62oNYN25Icqv7SWjcAC2QaQiuXLeJ9eISXLcsiHVQ0efuvUmyg7MS' );
define( 'NONCE_KEY', 'AjUSnSSRPJmMMEQD9yVGjeJV8KPcStyBH3CmiTtVKrMKSAyIMsDKY6CcRia1Y1XK' );
define( 'AUTH_SALT', 'hsHhTs56NEATyzJS7nW2azW8PySGAQg6dPg42sRBAs0WPKooNEX4Htca0bJRz2z2' );
define( 'SECURE_AUTH_SALT', 'R48GSHUdTeMWt1NaMIFfJLyuAMKJEVAyjXB98sGJDGCFwfjd951CjwAy8eceymGX' );
define( 'LOGGED_IN_SALT', 'Gy9LN2tahNQQ8p26SefV5H31L0bMf9KvJWgbuEdGmnge5HtUbdHoqjwBECMjF2Qt' );
define( 'NONCE_SALT', 'hE7VesUujSL1op33HwATQAIpRCobwVmJSvLfixrUx5wGnqxHG3D0W3mvej2GHGAn' );
/* That's all, stop editing! Happy blogging. */
/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
        define('ABSPATH', dirname(__FILE__) . '/');
/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');