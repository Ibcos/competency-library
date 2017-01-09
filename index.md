---
layout: default
---
<div class="container">
  <div class="header clearfix">
    <nav>
      <ul class="nav nav-pills float-right">
        <li class="nav-item">
          <a class="nav-link active" href="#">Core <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Role</a>
        </li>
      </ul>
    </nav>
    <h3 class="text-muted">Ibcos Competency Library</h3>
  </div>

  <div class="row">
    <div class="col-lg">
      <h2>Core Competencies</h2>
      <div class="btn-group" role="group" aria-label="Core Competencies">
      {% for competency in site.competencies %}
      {% if competency.type == 'core' %}
        <button type="button" class="btn btn-secondary">{{ competency.title }}</button>
      {% endif %}
      {% endfor %}
      </div>
    </div>
  </div>

  {% for competency in site.competencies %}
  {% if competency.type == 'core' %}
  <div class="row">
    <div class="col-lg">
      <h4>{{ competency.title }}</h4>
      <ol>
      {% for definition in competency.definitions %}
        <li>{{ definition.title }}</li>
      {% endfor %}
      </ol>
      <table class="table">
        <tr>
          <td>&nbsp;</td>
          <td>Unsatisfactory</td>
          <td>Needs Improvement</td>
          <td>Meets Expectations</td>
          <td>Exceeds Expectations</td>
          <td>Exceptional</td>
        </tr>
        {% for definition in competency.definitions %}
        <tr>
          <td>{{ forloop.index }}</td>
          <td>
            <ul>
            {% for unsatisfactory in definition.unsatisfactories %}
              <li>{{ unsatisfactory.example }}</li>
            {% endfor %}
            </ul>
          </td>
          <td>
            <ul>
            {% for need in definition.needs %}
              <li>{{ need.example }}</li>
            {% endfor %}
            </ul>
          </td>
          <td>
            <ul>
            {% for meet in definition.meets %}
              <li>{{ meet.example }}</li>
            {% endfor %}
            </ul>
          </td>
          <td>
            <ul>
            {% for exceed in definition.exceeds %}
              <li>{{ exceed.example }}</li>
            {% endfor %}
            </ul>
          </td>
          <td>
            <ul>
            {% for exceptional in definition.exceptionals %}
              <li>{{ exceptional.example }}</li>
            {% endfor %}
            </ul>
          </td>
        </tr>
        {% endfor %}
      </table>
    </div>
  </div>
  {% endif %}
  {% endfor %}

  <footer class="footer">
    <p>Designed with <i class="fa fa-heart" aria-hidden="true"></i> in Poole - &copy; Ibcos 2017</p>
  </footer>

</div>