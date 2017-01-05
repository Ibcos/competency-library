---
layout: default
---
<h1>Core Competencies</h1>
<ul>
{% for competency in site.competencies %}
{% if competency.type == 'core' %}
  <li>{{ competency.title }}</li>
{% endif %}
{% endfor %}
</ul>

<h1>Role Competencies</h1>
<ul>
{% for competency in site.competencies %}
{% if competency.type == 'role' %}
  <li>{{ competency.title }}</li>
{% endif %}
{% endfor %}
</ul>

<hr>


{% for competency in site.competencies %}

  <h2>{{ competency.title }}</h2>
  <ol>
  {% for definition in competency.definitions %}
    <li>{{ definition.definition }}</li>
  {% endfor %}
  </ol>
  <table>
  {% for definition in competency.definitions %}
  {% if competency.type == 'core' %}
    <tr>
        <td>{{ definition.definition }}</td>
        <td>{{ definition.unsatisfactory }}</td>
        <td>{{ definition.needs }}</td>
        <td>{{ definition.meets }}</td>
        <td>{{ definition.exceeds }}</td>
        <td>{{ definition.exceptional }}</td>
    </tr>
  {% elsif competency.type == 'role' %}
    <tr>
        <td>{{ definition.positive }}</td>
        <td>{{ definition.negative }}</td>
    </tr>
  {% endif %}
  {% endfor %}
  </table>
{% endfor %}